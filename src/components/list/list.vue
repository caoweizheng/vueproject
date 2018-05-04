<template>
	
	<div class="classify_list">
		<div class="list_header">
			<div class="classify_list_title">
				<i class="list_left fa fa-chevron-left" @click="goClassify"></i>
				<p class="list_title">{{lisData[$store.state.type]['title']}}</p>
				<i class="list_search fa fa-search"></i>
			</div>
			<div class="swiper-container menu-swiper swiper-container-horizontal">		
		        <ul class="swiper-wrapper list_tab">
		        	<li class="swiper-slide all" style="width: 1.093333rem;">
		        		<span>全部</span>
		        	</li>
		            <li class="swiper-slide" style="width: 1.093333rem;"  v-for="(item,idx) in (lisData[$store.state.type]['data'])">
		                <span>{{item}}</span>
		            </li>
		        </ul>		
			</div>
		</div>	
		

		<div class="listBox">
			<listDatagrid></listDatagrid>
		</div>

	</div>
</template>

<script type="text/javascript">
	import '../../css/classify_list.css';
	import '../../assets/css/swiper.min.css'
	import Swiper from '../../assets/js/swiper.min.js'

	import listDatagrid from '../list/listDatagrid.vue'
	export default{

		data(){
			return{
				lisData:{
					gyyx:{title:'果园优选',data:['奇异果','苹果','梨','橙柑橘柚','蓝莓/草莓','牛油果']},
					xxsg:{title:'新鲜水果',data:['奇异果','苹果','橙柑橘柚','梨','蓝莓/草莓','牛油果','热带水果','特色']},
					xxsp:{title:'休闲食品',data:['零食','坚果']},
					lygh:{title:'粮油干货',data:['五谷杂粮']},
					ctbj:{title:'冲调保健',data:['保健','麦片','咖啡']},
					jsyl:{title:'酒水饮料',data:[]},
					lhqk:{title:'礼盒券卡',data:['水果礼盒','组合套餐']}
					
				}
			}

		},
		mounted(){  
	         var swiper = new Swiper('.swiper-container', {
	        	lopper:true,
		      	slidesPerView: 5,
		      	slidesOffsetBefore : 100,
		      	pagination: {
			        el: '.swiper-pagination',
			        clickable: true
			      },
		    });
		},
		components:{
			listDatagrid
		},
		methods:{
			goClassify:function(){
				this.$router.push({name:'classify'});
			}
		}

	}
</script>