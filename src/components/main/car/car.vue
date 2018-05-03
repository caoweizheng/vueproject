<template>
    <div id="car">
        <div id="car_header">
            <ul>
                <li class="first"><i class="fa fa-angle-left"></i></li>
                <li class="two"><p>购物车</p></li>
                <li class="three"><p>编辑</p></li>
            </ul>
        </div>
        <div id="car_main">
            <div class="main_site">
                <p>
                    <img src="../../../img/svg/wz.svg" />
                    <span>添加地址</span>
                </p>
                <!-- <div>
                    <h5>收货地址</h5>
                </div> -->
            </div>
            <div class="main_sp">
                <p>商品清单</p>
            </div>
            <div class="main_goods">
                <ul>
                    <li>
                        <a href="#">
                            <div class="main_goods1">
                                <img src="https://imgjd3.fruitday.com/images/product_pic/5194/1/1-370x370-5194-W6RHU78K.jpg" alt="" />
                            </div>
                            <div>
                                <p class="title">有机黑米</p>
                                <p class="volume">350g</p>
                                <p class="price">￥<span>22</span><input type="number"
                                value="1" min="1" /></p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div id="car_footer"></div>
    </div>
</template>

<script>
    import '../../../css/base.css';
    import '../../../css/car.css';
	export default{
        
	}
</script>
