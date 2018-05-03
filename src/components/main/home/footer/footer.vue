<template>
    <ul id="footer" class="footer">
        <li>
            <a href="#">
                <i class="iconfont">&#xe628;</i>
                <span>首页</span>
            </a>
        </li>
        <li>
            <router-link to="/classify">
                <i class="iconfont">&#xe641;</i>
                <span>分类</span>
            </router-link>
            <!-- <a href="classify" @click="goClassify">
                
            </a> -->
        </li>
        <li>
            <a href="car">
                <i class="iconfont">&#xe600;</i>
                <span>购物车</span>
            </a>
        </li>
        <li>
            <a href="mine">
                <i class="iconfont">&#xe66b;</i>
                <span>我的</span>
            </a>
        </li>
    </ul>
</template>

<style>
    .footer{
        width: 100%;
        height:0.56rem;
        border-top:0.04rem solid #d6d6d6;
        background: #fff;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 9;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .footer a{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .footer a i{
        display: block;
        font-size:0.293333rem;
        height: 0.32rem;
    }
    .footer a span{
        font-size:0.16rem;
    }
</style>


<script>
    export default {
        data(){
            return {

            }
        },
        methods:{
            goClassify(){
                this.$router.push({name:'classify'});
            }
        }
    }
</script>
