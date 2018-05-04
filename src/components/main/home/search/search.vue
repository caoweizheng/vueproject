<template>
    <div id="search-wrapper">
        <div class="sear-nav">
            <div class="s_back" @click="goHome">
                <i class="iconfont">&#xe648;</i>
                <span>返回</span>
            </div>
            <div class="sear_input">
                <i class="iconfont">&#xe60c;</i>
                <input type="text" placeholder="新鲜水果、生鲜">
            </div>
            <div class="sear_btn">搜索</div>
        </div>
        <div class="hot">
            <h5>热门搜索</h5>
            <div class="keyword">
                <a href="javascript:;">橙</a>
                <a href="javascript:;">提子</a>
                <a href="javascript:;">樱桃</a>
                <a href="javascript:;">苹果</a>
                <a href="javascript:;">苹果</a>
                <a href="javascript:;">瓜</a>
                <a href="javascript:;">羊蝎子</a>
                <a href="javascript:;">雪花鲳</a>
                <a href="javascript:;">苹果</a>
            </div>
        </div>
    </div>
</template>


<script>
    import '../../../../assets/css/home.css';
    export default {
        methods:{
            goHome:function(){
                this.$parent.$refs.indexBox.style.display = 'block';
                this.$parent.$refs.searchBox.style.display = 'none';
                this.$parent.$parent.$refs.footerNav.style.display = 'block';
                window.location.reload();
            }
        }
    }
</script>
