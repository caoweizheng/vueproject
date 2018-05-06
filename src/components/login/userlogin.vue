<template>

	<div id="box">
        <nav>
            <div class="back"><i class="fa fa-angle-left"></i></div>
            <div class="login_text">
                <span>账号密码登录</span>
            </div>
            <div class="top_r"></div>
        </nav>
        <div class="account-login-form">
            <div class="form-group">
                <i class="fa fa-mobile"></i>
                <input type="text" class="form-control" v-model="phone" placeholder="用户名">
                <span id="helpBlock2" class="error-block" ></span>
            </div>
            <div class="form-group">
                <i class="fa fa-lock"></i>
                <input type="password" class="form-control" v-model="password" placeholder="密码">
                <span id="helpBlock2" class="help-block usertips" ></span>
            </div>
            <button type="submit" class="btn btn-success btn-lg" @click="login">Sign in</button>
            <router-link to="/register">还没有账号?赶紧注册一个吧!</router-link>
        </div>      
    </div>
</template>
<script>
    import '../../css/userlogin.css'
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
					console.log('userlogin',res.data.state)
					     
					if(res.data.state){

                        window.localStorage.setItem('phone',res.data.data);

                        this.$router.push({name:'main'});
					}	
					     
				})
			}
		}
	}
</script>