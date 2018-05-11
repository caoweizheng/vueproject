<template>
  <header id="header-wrapper" class="header clear">
      <div class="position clear" @click="positionShow">
          <div class="logo">
              <img src="../../../../assets/home_img/ci_gz1.png">
          </div>
          <div id="map" class="map">兴华街道</div>
          <i class="iconfont">&#xe60a;</i>
      </div>
    <div class="h_search" @click="searchBoxShow">
        <i class="iconfont">&#xe60c;</i>
    </div>
  </header>
</template>
<style>
    .header{
        width: 100%;
        height: 0.506667rem;
        line-height: 0.506667rem;
        box-shadow:0 0.026667rem 0.026667rem 0.026667rem #ccc;
        background: #fff;
        margin-bottom: 0.04rem;
    }
    .position {
        float: left;
        width: 70%;

        padding: 0 .0.002rem;

        color: #65a032;
        white-space: nowrap;
        margin-left:0.213333rem;
    }
    .position .logo{float: left;}
    .position .logo img {
        display: inline-block;
        margin-bottom: 0.106667rem;
        width: 0.68rem;
        height: 0.186667rem;
        margin-right: 0.066667rem;
    }
    .position .map{float: left;font-size:13px;}
    .position i{font-size: 0.32rem;display: inline-block;height: 0.32rem;}
    .h_search{float:right;padding: 0 0.2rem;}
    .h_search i{font-size: 0.32rem;display: inline-block;height: 0.32rem;}

</style>
<script>
    export default {
        methods:{
            positionShow:function(){
                this.$parent.$refs.indexBox.style.display = 'none';
                this.$parent.$refs.locationBox.style.display = 'block';
                this.$parent.$parent.$refs.footerNav.style.display = 'none';
            },
            searchBoxShow:function(){
                this.$parent.$refs.indexBox.style.display = 'none';
                this.$parent.$refs.searchBox.style.display = 'block';
                this.$parent.$parent.$refs.footerNav.style.display = 'none';
            }
        }
    }
</script>


