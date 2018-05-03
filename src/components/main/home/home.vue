<template>
  <div id="home_wrapper">
      <div class="indexBox">
            <hd></hd>
            <slide></slide>
            <items></items>
            <recommend></recommend>
            <!-- <ft></ft> -->
      </div>
      <div class="locationBox">
          <local></local>
      </div>
        <div class="searchBox">
            <search></search>
        </div>
  </div>
</template>
<style>
    .indexBox{
        display: block;
    }
    .locationBox{
        display: none;
    }
    .searchBox{
        display: none;
    }
</style>

<script>
import hd from './header/header.vue';
import slide from './slide/slide.vue';
import items from './items/items.vue';
import recommend from './recommend/recommend.vue';
// import ft from './footer/footer.vue';
import local from './loacation/location.vue';
import search  from './search/search.vue';
    export default {
        components:{
            hd,
            slide,
            items,
            recommend,
            // ft,
            local,
            search

        }
    }
</script>
