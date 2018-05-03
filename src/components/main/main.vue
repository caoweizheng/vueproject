<template>
  <div id="ttgy">
    <div class="home_main">
      <router-view></router-view>
    </div>
    <div class="home_nav">
      <router-link to="/home"><i class='fa fa-home'></i>首页</router-link>
      <router-link to="/classify"><i class='fa fa-window-restore'></i>分类</router-link>
      <router-link to="/car"><i class='fa fa-cart-plus'></i>购物车</router-link>
      <router-link to="/my"><i class='fa fa-user'></i>我的果园</router-link>
    </div>
  </div>
</template>

<script>
  import '../../css/index.css'
  import router from '../../router/router.js';
  export default {
    mounted(){
      router.push({name:'home'});
    }
  }
</script>