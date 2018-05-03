<template>
  <header id="header-wrapper" class="header clear">
      <div class="position clear">
          <div class="logo">
              <img src="../../../../assets/home_img/ci_gz1.png">
          </div>
          <div id="map" class="map">兴华街道</div>
          <i class="iconfont">&#xe60a;</i>
      </div>
    <div class="h_search">
        <i class="iconfont">&#xe60c;</i>
    </div>
  </header>
</template>
<style>
    .header{
        width: 100%;
        height: .38rem;
        line-height: .38rem;
        border-bottom: .02rem solid #c8cac7;
        background: #fff;
    }
    .position {
        float: left;
        width: 70%;
        padding: 0 .15rem;
        color: #65a032;
        white-space: nowrap;
    }
    .position .logo{float: left}
    .position .logo img {
        display: inline-block;
        width: .51rem;
        height: .14rem;
        margin-right: .05rem;
    }
    .position .map{float: left}
    .position i{font-size: .24rem;display: inline-block;height: .24rem;}
    .h_search{float:right;padding: 0 .15rem;}
    .h_search i{font-size: .24rem;display: inline-block;height: .24rem;}
</style>
<script>
    export default {

    }
</script>


