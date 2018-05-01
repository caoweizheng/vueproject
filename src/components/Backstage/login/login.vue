<template>
	<div id="box">
		<h3>登录</h3>
          <div class="form-group">
            <input type="text" class="form-control" v-model="username" placeholder="userName">
            <span id="helpBlock2" class="error-block" ></span>
          </div>
          <div class="form-group">
            <input type="password" class="form-control" v-model="pass" placeholder="Password">
            <span id="helpBlock2" class="help-block usertips" ></span>
          </div>
          <button type="submit" class="btn btn-success btn-lg" @click="login">Sign in</button>  
    </div>
</template>
<style type="text/css">
    #box{
        width: 400px;
        margin: 100px auto;
        box-shadow:0 0 50px 10px #ccc;
        padding: 50px;
        border-radius:20px;
        background:#fff;
    }
    #box div{
        display: block;
    }
    a{
        margin-left: 20px;
    }
    .mark{
        position:absolute;
        left: 0;
        top: 0;
        display:none;
        background:rgba(0,0,0,0.2);
    }
</style>
<script>
    import http from '../../../utils/httpClient.js'
	export default {
		data:function(){
			return {
				username:'',
				pass:''
				
			}
		},
		methods:{
			login(){

	          http.post('login',{username:this.username,password:this.pass}).then((res)=>{ 
	            console.log(res) 
	              if(res.data.state){
	              	this.$router.push({name:'manager'});
	              }else{
	                
	                alert('用户名或密码错误!');
	                
	              }
	                  
	          })

			}
		}

	}
</script>