<template>
    <div id="location-wraper">
        <nav class="l_nav">
            <div class="head">
                <a href="javascript:;" class="back" @click="goHome">
                    <i class="iconfont">&times;</i>
                </a>
                <h3>选择收货地址</h3>
                <a href="#" class="next">新增地址</a>
            </div>
            <div class="l_search">
                <div class="l_searchBox">
                    <i class="iconfont">&#xe60c;</i>
                    <input type="text" placeholder="请输入收货地址">
                </div>
                <span>
                    <em>广州</em>
                    <i class="iconfont">&#xe60a;</i>
                </span>
            </div>
        </nav>
        <div class="addressList">
            <div class="curr">
                <h5>当前地址</h5>
                <div class="c_address c_item">
                    <div id="local-address" class="local-address">广东省广州市天河区兴华街道广州大道北284号地铁三号线梅花园站拆迁安置房</div>
                    <span class="relocation">
                        <i class="iconfont">&#xe620;</i>
                        重新定位
                    </span>
                </div>
            </div>
            <div class="near">
                <h5>附近地址</h5>
                <div class="c_item">黄猄坳燃气便民服务部</div>
                <div class="c_item">嘉缘公寓</div>
                <div class="c_item">地铁三号线梅花园站拆迁安置房</div>
                <div class="c_item">常德米粉(怡新路店)</div>
                <div class="c_item">匠心之作蛋糕</div>
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
                this.$parent.$refs.locationBox.style.display = 'none';
                this.$parent.$parent.$refs.footerNav.style.display = 'block';
                window.location.reload();

            }
        }
    }

</script>
