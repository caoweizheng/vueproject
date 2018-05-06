<template>

	<div id="rbox">
		<h3>Register</h3>
          <div class="form-group">
            <input type="text" class="form-control" v-model="phone" placeholder="username">
            <span id="helpBlock2" class="error-block" ></span>
          </div>
          <div class="form-group">
            <input type="password" class="form-control" v-model="password" placeholder="Password">
            <span id="helpBlock2" class="help-block usertips" ></span>
          </div>
          <button type="submit" class="btn btn-success btn-lg" @click="register">Register</button>  
    </div>
</template>
<style type="text/css">
  #rbox{
    width: 300px;
    margin: 0 auto;
  }
</style>
<script>
  import http from '../../utils/httpClient.js'
  export default{
    data(){
      return{
        phone:'',
        password:'',
        regTime:function(){
          let date = new Date();

          let year = date.getFullYear();
          let month = date.getMonth()+1;
          let day = date.getDate();
          return `${year}-${month}-${day}`;
        }
      }
    },
    methods:{
      register(){
        http.post('userRegister',{phone:this.phone,password:this.password,time:this.regTime()}).then((res) => {

          if(res.data.state){

              window.localStorage.setItem('phone',res.data.data);

              this.$router.push({name:'userlogin'});
          } 
               
        })
      }
    }
  }
</script>