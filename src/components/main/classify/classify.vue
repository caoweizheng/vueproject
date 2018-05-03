<template>
	
	<div class="classify">
		<div class="search">
			<input type="text" />
		</div>
		<main>
			<div class="classify_left">
				<ul>
					<li>
						<router-link to="/gyyx">果园优选</router-link>
					</li>
					<li>
						<router-link to="/xxsg">新鲜水果</router-link>
					</li>
					<li>
						<router-link to="/xxsp">休闲食品</router-link>
					</li>
					<li>
						<router-link to="/lygh">粮油干货</router-link>
					</li>
					<li>
						<router-link to="/ctbj">冲调保健</router-link>
					</li>
					<li>
						<router-link to="/jsyl">酒水饮料</router-link>
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
		
	}
</script>