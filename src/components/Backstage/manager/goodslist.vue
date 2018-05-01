<template>

	<div>
		<div class="searchBox">
			<input type="text" />
			<button class="btn btn-success" @click="searchProduct">搜索</button>
			<button class="btn btn-success" @click="add">新增</button>
		</div>

		<div>
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
						<td><span><img :src="val.url" alt="" /></span></td>
						<td><span><button class="deletePro btn btn-success" @click="editPro(val._id,val.title,val.price,val.url,val.type)">编辑</button><button class="deletePro btn btn-danger" @click="deletePro(val._id,idx)">删除</button></span></td>
					</tr>
				</tbody>

			</table>
		</div>
		
		<div class="addpro" v-show="addWid">

			<div class="form-group">
				<label for="">商品标题<input type="text" class="form-control" v-model="title" ></label>
				<span id="helpBlock2" class="error-block" ></span>

				<label for="">商品描述<input type="text" class="form-control" v-model="desc" ></label>
				<span id="helpBlock2" class="help-block usertips" ></span>

				<label for="">商品价格<input type="text" class="form-control" v-model="price" ></label>
				<span id="helpBlock2" class="help-block usertips" ></span>

				<label for="">商品图片路径<input type="text" class="form-control" v-model="url" ></label>
				<span id="helpBlock2" class="help-block usertips" ></span>
				<label for="">商品类型<input type="text" class="form-control" v-model="type" ></label>
				
			</div>
			<button type="submit" class="addPro btn btn-success" @click="addProduct">add</button> 
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
				addWid:false,
				title:'',
				desc:'',
				price:'',
				url:'',
				type:''
			}
		},
		props:['data'],
		methods:{
			add(){
				this.addWid = true;
			},

			addProduct(){
				http.post('addProduct',
					{
						title:this.title,
						price:this.price,
						desc:this.desc,
						url:this.url,
						type:this.type

					}).then((res) => {
					this.addWid = false;

				})

			},
			searchProduct(){

			},

			deletePro(id,idx){     
				this.goodslist.splice(idx,1);
				http.post('delPro',{pId:id}).then((res) => {

				})

			},

			editPro(){
				
			}
		},
		mounted(){
			http.get('getProduct',{}).then((res) => {

				this.goodslist = res.data.data
				console.log(res.data.data)
				     
			})
		}
	}
</script>