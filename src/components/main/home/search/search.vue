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

<style>
    #search-wrapper{
        width: 100%;
        height: 100%;
    }
    .sear-nav{
        width: 100%;
        height: auto;
        background-color: #fff;
        border-bottom: 1px solid #d8d8d8;
        padding: 0.133333rem 0; 
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .sear-nav i{
        display: inline-block;
        height: 0.333333rem;
        font-size: 0.266667rem;
    }
    .s_back{
        color: #64a131;
        font-size: 0.186667rem;
        width: auto;
        height: 0.426667rem;
        line-height: 0.426667rem;
        margin-right: 0.08rem;
    }
    .sear_input{
        flex: 1;
        box-sizing: border-box;
        position: relative;
        background-color: #eee;
        border-radius: 0.066667rem;
        color: #878787;
        font-size: 0.186667rem;
    }
    .sear_input i{
        margin: 0 0.066667rem;
    }
    .sear_input input{
        border: none;
        background: #eee;
    }
    .sear_btn{
        box-sizing: border-box;
        height: 0.426667rem;
        line-height: 0.426667rem;
        color: #64a131;
        font-size: 0.213333rem;
        padding: 0 0.08rem;
        white-space: nowrap;
    }
    .hot{
        margin-top: 0.706667rem;
        padding: 0 0.133333rem;
        height: auto;
        overflow: auto;
    }
    .hot h5{
        width: 100%;
        height: 0.56rem;
        line-height: 0.56rem;
        color: #878787;
        font-weight: 100;
    }
    .keyword a{
        color: #6c6c6c;
        display: inline-block;
        padding: 0.093333rem 0.106667rem;
        margin: 0.133333rem 0.053333rem 0;
        background-color: #f1f1f1;
        border-radius: 0.066667rem;
        max-width: 2.4rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>


<script>
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
