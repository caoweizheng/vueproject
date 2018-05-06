<template>
	<div class="bggoodslist">
		<div class="searchBox">
			<input type="text" />
			<button class="btn btn-success" @click="searchProduct">搜索</button>
			<button class="btn btn-success" @click="add">新增</button>

		</div>

		<div class="bag_list">
			<table class="table table-striped">
				<thead>
					<tr>
						<td>商品标题</td>
						<td>价格</td>
						<td>商品图片</td>
						<td>操作</td>
					</tr>
				</thead>

				<tbody>
					<tr v-for="(val,idx) in goodslist" :key="val._id">
						<td><span>{{val.title}}</span></td>
						<td><span>{{val.price}}</span></td>
						<td><span><img :src="val.image" alt="" /></span></td>
						<td><span><button class="deletePro btn btn-success" @click="editPro(val._id,val.title,val.subtitle,val.price,val.volume,val.image,val.target_type,idx)">编辑</button><button class="deletePro btn btn-danger" @click="deletePro(val._id,idx)">删除</button></span></td>
					</tr>
				</tbody>

			</table>


			  <ul class="pagination pagination-lg">
			    <li>
			      <a aria-label="Previous">
			        <span aria-hidden="true">&laquo;</span>
			      </a>
			    </li>
				<li v-for="(item,idx) in pageLen">
					<a @click="pagination(item,idx)">{{item}}</a>
				</li>
			    <li>
			      <a aria-label="Next">
			        <span aria-hidden="true">&raquo;</span>
			      </a>
			    </li>
			  </ul>

		</div>
		
		<div class="bgmark" v-show="addWid">
			<div class="addpro" >

				<span class="close" @click="addWid = false">&times;</span>
				<div class="form-group">
					<label for="">商品标题<input type="text" class="form-control" v-model="addTitle" ></label>
					
					<label for="">商品描述<input type="text" class="form-control" v-model="addDesc" ></label>				
					<label for="">商品价格<input type="text" class="form-control" v-model="addPrice" ></label>
					<label for="">商品分量<input type="text" class="form-control" v-model="addVolume" ></label>

					<label for="">商品图片路径<input type="text" class="form-control" v-model="addImage" ></label>
					<label for="">商品类型<input type="text" class="form-control" v-model="addType" ></label>
					
				</div>
				<button type="submit" class="addPro btn btn-success" @click="addProduct">add</button> 
				
			</div>
		</div>
		<div class="bgmark" v-show="editWid">
			<div class="addpro" >

				<span class="close" @click="editWid = false">&times;</span>
				<div class="form-group">
					<label for="">商品id<input readonly type="text" class="form-control" v-model="pId" ></label>
					<label for="">商品标题<input type="text" class="form-control" v-model="title" ></label>
					<label for="">商品描述<input type="text" class="form-control" v-model="subtitle" ></label>
					<label for="">商品价格<input type="text" class="form-control" v-model="price" ></label>
					<label for="">商品分量<input type="text" class="form-control" v-model="volume" ></label>
					<label for="">商品图片路径<input type="text" class="form-control" v-model="image" ></label>
					<label for="">商品类型<input type="text" class="form-control" v-model="target_type" ></label>
					
				</div>
				<button type="submit" class="addPro btn btn-success" @click="editProduct({pId,title,subtitle,price,volume,image,target_type})">edit</button> 
				
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import http from '../../../utils/httpClient.js';
	import '../../../css/b_goodslist.css';
	export default {

		data(){
			return{
				goodslist:[],
				showlist:[],
				pageLen:0,
				pageIdx:1,
				addWid:false,
				editWid:false,
				editIdx:0,
				addTitle:'',
				addDesc:'',
				addPrice:'',
				addImage:'',
				addVolume:'',
				addType:'',
				
				// 编辑的字段
				pId:'',
				title:'',
				subtitle:'',
				price:'',
				volume:'',
				image:'',
				target_type:''

			}
		},
		props:['data'],


		methods:{
			//分页
			pagination(item,idx){

				http.get('getProduct',{}).then((res) => {

					this.goodslist = res.data.data;
					this.pageLen = Math.ceil(this.goodslist.length/20);
					this.goodslist = this.goodslist.splice((item-1)*20,20);

					console.log(res.data.data)
					     
				})
			},

			add(){
				// 显示添加商品弹出框
				this.addWid = true;
				     
			},
			// 添加商品
			addProduct(){
				http.post('addProduct',
					{
						title:this.addTitle,
						price:this.addPrice,
						desc:this.addDesc,
						url:this.addImage,
						volume:this.addVolume,
						type:this.addType

					}).then((res) => {
						this.addWid = false;
						// 获取全部商品数据
						http.get('getProduct',{}).then((res) => {

							this.goodslist = res.data.data;
							this.pageLen = Math.ceil(this.goodslist.length/20);
							this.goodslist = this.goodslist.splice(0,20);

							// this.goodslist = res.data.data;
							// this.showlist = this.goodslist.splice(pageIdx,4);     
						})

				})

			},
			searchProduct(){

			},

			deletePro(id,idx){     
				// 删除商品
				this.goodslist.splice(idx,1);
				this.showlist = this.goodslist.splice(this.pageIdx,20);
				http.post('delPro',{pId:id}).then((res) => {

				})

			},

			editPro(_id,title,desc,price,volume,url,type,idx){

				this.editIdx = idx;
				this.editWid = true;
				this.pId  = _id;
				this.title = title;
				this.subtitle = desc;
				this.price = price;
				this.volume = volume;
				this.image = url;
				this.target_type = type;

			},
			// 编辑商品,并且更新到数据库
			editProduct(obj){
				this.editWid = false;
				console.log(obj)
				this.goodslist[this.editIdx] = {

					_id:obj.pId,
					volume:obj.volume,
					subtitle:obj.subtitle,
					target_type:obj.target_type,
					title:obj.title,
					price:obj.price,
					image:obj.image

				};

				http.post('updatePro',{
					proId:obj.pId,
					title:obj.title,
					desc:obj.subtitle,
					price:obj.price,
					volume:obj.volume,
					url:obj.image,
					type:obj.target_type
				}).then((res) => {
					console.log(res)
					     
				})
			}
		},
		mounted(){
			http.get('getProduct',{}).then((res) => {

				this.goodslist = res.data.data;
				this.pageLen = Math.ceil(this.goodslist.length/20);
				this.goodslist = this.goodslist.splice(0,20);
				     
			})
		}
	}
</script>