<template>
	<div id="userbox">
		<table class="table table-striped">
			<thead>
				<tr>
					<td>用户名</td>
					<td>密码</td>
					<td>注册时间</td>
					<td>操作</td>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item,idx) in userlist" :key="idx">
					<td><span>{{item.phone}}</span></td>
					<td><span>{{item.password}}</span></td>
					<td><span>{{item.time}}</span></td>
					<td><span><button @click="delUser(item._id,idx)" class="deleteUser btn btn-danger">删除</button></span></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>


<script type="text/javascript">
	import http from '../../../utils/httpClient.js';
	import '../../../css/userlist.css'
	export default {
		data(){
			return {
				userlist:[]
			}
		},
		methods:{
			delUser(id,idx){
				this.userlist.splice(idx,1);
				http.post('delUser',{uId:id}).then((res) => {
					console.log(res)
					     
				})
			}
		},
		mounted(){

			http.get('userlist',{}).then((res) => {
				console.log(res)
				     
				this.userlist = res.data.data
			})

		}
	}
</script>