<template>
	<div class="mangerMain">
		<div class="head">
			<h3>天天果园后台管理系统</h3>
		</div>
		<div class="container">
			<div class="nav">
				<ul>
					<li>
						<router-link to="userlist">用户管理</router-link>	
					</li>
					<li>
						<router-link to="goodslist">商品列表</router-link>	
					</li>

				</ul>
			</div>

			<div class="content">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import '../../../css/manager.css'
	export default{
		
	}
</script>