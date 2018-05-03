<template>
	
	<div class="classify">
		<div class="search">
			<span><i class="fa fa-search"></i>奇异果</span>
		</div>
		<main class="classify_main">
			<div class="classify_left">
				<ul>
					<li>
						<router-link to="/gyyx/gyyx" class="first">果园优选</router-link>
					</li>
					<li>
						<router-link to="/gyyx/gyyx">新鲜水果</router-link>
					</li>
					<li>
						<router-link to="/gyyx/yxsp">休闲食品</router-link>
					</li>
					<li>
						<router-link to="/gyyx/gyyx">粮油干货</router-link>
					</li>
					<li>
						<router-link to="/gyyx/gyyx">冲调保健</router-link>
					</li>
					<li>
						<router-link to="/gyyx/gyyx">酒水饮料</router-link>
					</li>
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
			return{

			}
		},
		mounted(){

		}
	}
</script>