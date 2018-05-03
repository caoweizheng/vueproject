<template>

	<div id="box">
		<h3>Login</h3>
          <div class="form-group">
            <input type="text" class="form-control" v-model="phone" placeholder="username">
            <span id="helpBlock2" class="error-block" ></span>
          </div>
          <div class="form-group">
            <input type="password" class="form-control" v-model="password" placeholder="Password">
            <span id="helpBlock2" class="help-block usertips" ></span>
          </div>
          <button type="submit" class="btn btn-success btn-lg" @click="login">Sign in</button>
          <router-link to="/register">还没有账号?赶紧注册一个吧!</router-link>  
    </div>
</template>
<style type="text/css">
	#box{
		width: 400px;
		margin: 0 auto;
	}
</style>
<script>
	import http from '../../utils/httpClient.js'
	export default{
		data(){
			return{
				phone:'',
				password:''
			}
		},
		methods:{
			login(){
				http.post('userlogin',{phone:this.phone,password:this.password}).then((res) => {
					console.log(res)
					     
					if(res.data.state){

                        window.localStorage.setItem('phone',res.data.data);

                        this.$router.push({name:'main'});
					}	
					     
				})
			}
		}
	}
</script>