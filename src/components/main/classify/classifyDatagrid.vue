<template>
	<div>
		<h3 v-for="obj in (titArr[$route.params.data || 'gyyx'])" :key="obj.name">
			<span>{{obj.name}}</span>
			<router-link to="/list">
				全部
				<i class="iconfont">&#xe649;</i>
			</router-link>
		</h3>
		<li v-for="(obj,idx) in (fenlei[$route.params.data || 'gyyx'])" :key="idx">
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
				titArr:{
					gyyx:[{name:'果园优选'}],
					xxsg:[{name:'新鲜水果'}],
					xxsp:[{name:'休闲食品'}],
					lygh:[{name:'粮油干货'}],
					ctbj:[{name:'冲调保健'}],
					jsyp:[{name:'酒水饮料'}]
					},
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
						img:'https://imgqn8.fruitday.com/images/2018-01-10/de617cf9998865337ab754e930874615.jpg'
					},
					{
						name:'牛油果',
						img:'https://imgqn9.fruitday.com/images/2017-09-19/19926bcc7ea89d625b544939942d228e.png'
					}],
					// xxsg['奇异果','苹果','橙柑橘柚','梨','蓝莓/草莓','牛油果','热带水果','新鲜水果'],
					xxsg:[
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
						img:'https://imgqn8.fruitday.com/images/2018-01-10/de617cf9998865337ab754e930874615.jpg'
					},
					{
						name:'牛油果',
						img:'https://imgqn9.fruitday.com/images/2017-09-19/19926bcc7ea89d625b544939942d228e.png'
					},
					{
						name:'蓝莓/草莓',
						img:'https://imgqn9.fruitday.com/images/2018-01-12/cb3c518ce33d7600bf4cc5c20115d3a3.jpg'
					},
					{
						name:'热带水果',
						img:'https://imgjd4.fruitday.com/images/2017-02-22/e2d0a1a8bef94a00b968b21539b01b95.png'
					},
					{
						name:'新鲜水果',
						img:'https://imgqn9.fruitday.com/images/2017-03-04/3fc525e4eb1f27622f2d59b75ea69bd7.jpg'
					}
					],
					xxsp:[
					{
						name:'食品',
						img:'https://imgjd1.fruitday.com/images/2018-01-13/432e10e11b347a61006e0fbf90623357.jpg'
					},
					{
						name:'坚果',
						img:'https://imgqn9.fruitday.com/images/2018-01-13/ee660d8ca3942572d0a693f04eca83ea.jpg'
					}],
					// lygh:['五谷杂粮'],
					lygh:[
					{
						name:'五谷杂粮',
						img:'https://imgjd4.fruitday.com/images/2017-03-09/0577e2356d1dedbfef905e1fe97e53e6.jpg'
					}],
					// cjbj:['保健','麦片','咖啡'],
					ctbj:[
					{
						name:'保健',
						img:'https://imgjd1.fruitday.com/images/2018-02-26/b0a89e429e15a77b9bcdd14a02a02d95.jpg'
					},
					{
						name:'麦片',
						img:'https://imgqn8.fruitday.com/images/2018-02-24/fa3ee8770c324ac50a133ff3d815b9de.jpg'
					},
					{
						name:'咖啡',
						img:'https://imgjd7.fruitday.com/images/2018-02-24/8cf9599d7ab9d34c63412415da871e44.jpg'
					}],
					// jsyl:[]
					jsyp:[]
				
					
				}
			}
		},
		mounted(){
			// for(var i=0;i<this.titArr.length;i++){
				// if($route.params.data == 'gyyx'){
				// 	this.title = '果园优选';
				// }else{
				// 	this.title = 'pp';
				// }
			// }
			// console.log($route.params.data);
		}
	}
</script>