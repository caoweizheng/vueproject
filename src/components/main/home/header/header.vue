<template>
  <header id="header-wrapper" class="h_header clear">
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

<script>
    import '../../../../assets/css/home.css';
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


