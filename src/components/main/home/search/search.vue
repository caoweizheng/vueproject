<template>
    <div id="search-wrapper">
        <div class="sear-nav">
            <div class="s_back">
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
        display: none;
        width: 100%;
        height: 100%;
    }
    .sear-nav{
        width: 100%;
        height: auto;
        background-color: #fff;
        border-bottom: 1px solid #d8d8d8;
        padding: .1rem 0; 
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
        height: .25rem;
        font-size: .2rem;
    }
    .s_back{
        color: #64a131;
        font-size: .14rem;
        width: auto;
        height: .32rem;
        line-height: .32rem;
        margin-right: .06rem;
    }
    .sear_input{
        flex: 1;
        box-sizing: border-box;
        position: relative;
        background-color: #eee;
        border-radius: .05rem;
        color: #878787;
        font-size: .14rem;
    }
    .sear_input i{
        margin: 0 .05rem;
    }
    .sear_input input{
        border: none;
        background: #eee;
    }
    .sear_btn{
        box-sizing: border-box;
        height: .32rem;
        line-height: .32rem;
        color: #64a131;
        font-size: .16rem;
        padding: 0 .06rem;
        white-space: nowrap;
    }
    .hot{
        margin-top: .53rem;
        padding: 0 .1rem;
        height: auto;
        overflow: auto;
    }
    .hot h5{
        width: 100%;
        height: .42rem;
        line-height: .42rem;
        color: #878787;
        font-weight: 100;
    }
    .keyword a{
        color: #6c6c6c;
        display: inline-block;
        padding: .07rem .08rem;
        margin: .1rem .04rem 0;
        background-color: #f1f1f1;
        border-radius: .05rem;
        max-width: 1.8rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>


<script>
    export default {

    }
</script>
