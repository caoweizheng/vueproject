<template>
	
	<div class="classify">
		<div class="c_search">
			<div>
				<i class="iconfont">&#xe60c;</i>
				奇异果
			</div>
		</div>
		<main class="c_menu">
			<div class="classify_left">
				<ul>
					<li v-for="obj in menus" :key="obj.path">
						<router-link :to="obj.path">{{obj.text}}</router-link>
					</li>
					<!-- <li>
						<router-link to="/classify/gyyx">果园优选</router-link>
					</li>
					<li>
						<router-link to="/classify/xxsg">新鲜水果</router-link>
					</li>
					<li>
						<router-link to="/classify/xxsp">休闲食品</router-link>
					</li>
					<li>
						<router-link to="/classify/lygh">粮油干货</router-link>
					</li>
					<li>
						<router-link to="/classify/ctbj">冲调保健</router-link>
					</li>
					<li>
						<router-link to="/classify/jsyl">酒水饮料</router-link>
					</li> -->
				</ul>
			</div>
			<div class="classify_right">
				<router-view>
					
				</router-view>
			</div>
		</main>
		
	</div>
</template>

<script>
	import '../../../css/classify.css'
	export default{
		data(){
            return {
                menus : [
                    {path: '/classify/gyyx', text: '果园优选'},
					{path:'/classify/xxsg', text:'新鲜水果'},
					{path: '/classify/xxsp', text: '休闲食品'},
					{path:'/classify/lygh', text:'粮油干货'},
					{path: '/classify/ctbj', text: '冲调保健'},
					{path:'/classify/jsyl', text:'酒水饮料'}
					
                ]
            }
        }
	}
</script>