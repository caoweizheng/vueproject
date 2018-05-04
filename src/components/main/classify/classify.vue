<template>
	
	<div class="classify">
		<div class="menuBox">
			<div class="c_search">
				<span><i class="fa fa-search"></i>奇异果</span>
			</div>
			<main class="classify_main">
				<div class="classify_left">
					<ul>

						<li v-for="obj in menus" :key="obj.path">
							<router-link :to="obj.path">{{obj.text}}</router-link>
						</li>					

					</ul>
				</div>
				<div class="classify_right">
					<router-view>
						
					</router-view>
				</div>
			</main>
		</div>
		<div class="listBox">
			<list></list>
		</div>		
	</div>
</template>
<script>
	import '../../../css/classify.css'
	import list from './list.vue';
	export default{
		data(){
            return {
                menus : [
                    {path: '/classify/gyyx', text: '果园优选'},
					{path:'/classify/xxsg', text:'新鲜水果'},
					{path: '/classify/xxsp', text: '休闲食品'},
					{path:'/classify/lygh', text:'粮油干货'},
					{path: '/classify/ctbj', text: '冲调保健'},
					{path:'/classify/jsyp', text:'酒水饮料'}	
                ]
            }
        },
		mounted(){

		},
		components:{
			list
		}
	}
</script>