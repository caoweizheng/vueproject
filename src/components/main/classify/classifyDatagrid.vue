<template>
	<div>
		<li v-for="(obj,idx) in (fenlei[$route.params.data])">
			<router-link to="/list">
				<img :src="obj.img" alt="" />
				<span>{{obj.name}}</span>
			</router-link>
			
		</li>
	</div>
</template>

<script>
	
	export default{
		data(){
			return{
				cld:'',
				fenlei:{
					gyyx:[
					{
						name:'奇异果',
						img:'https://imgjd5.fruitday.com/images/2017-09-19/2e7463ed7ab392af0fd3370586cad765.png'
					},
					{
						name:'苹果',
						img:'https://imgjd6.fruitday.com/images/2017-09-19/315492971f93b7c3be196e3a7607dfae.png'	
					},
					{
						name:'橙柑橘柚',
						img:'https://imgjd7.fruitday.com/images/2017-09-19/c24ec3729633a5a5ede075ebcb12fb7b.png'
					},
					{
						name:'蓝莓/草莓',
						img:'https://imgjd7.fruitday.com/images/2017-09-19/c24ec3729633a5a5ede075ebcb12fb7b.png'
					},
					{
						name:'牛油果',
						img:'https://imgjd7.fruitday.com/images/2017-09-19/c24ec3729633a5a5ede075ebcb12fb7b.png'
					}],
					// xxsg['奇异果','苹果','橙柑橘柚','梨','蓝莓/草莓','牛油果','热带水果','新鲜水果'],
					yxsp:[
					{
						name:'食品',
						img:'https://imgjd1.fruitday.com/images/2018-01-13/432e10e11b347a61006e0fbf90623357.jpg'
					},
					{
						name:'坚果',
						img:'https://imgqn9.fruitday.com/images/2018-01-13/ee660d8ca3942572d0a693f04eca83ea.jpg'
					}]
					// lygh:['五谷杂粮'],
					// cjbj:['保健','麦片','咖啡'],
					// jsyl:[]
				}
			}
		},
		props:['clData']
	}
</script>