import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import home from '../components/main/home/home.vue';
import car from '../components/main/car/car.vue';
import classify from '../components/main/classify/classify.vue';
import detail from '../components/detail/detail.vue';
import my from '../components/main/my/my.vue';
import login from '../components/Backstage/login/login.vue';
import manager from '../components/Backstage/manager/manager.vue';
import main from '../components/main/main.vue';
import users from '../components/Backstage/manager/userlist.vue';
import goodslist from '../components/Backstage/manager/goodslist.vue';

import userlogin from '../components/login/userlogin.vue'

import register from '../components/register/register.vue'

import classifyDatagrid from '../components/main/classify/classifyDatagrid.vue';



import classifyDatagrid2 from '../components/main/classify/classifyDatagrid2.vue';

const router = new VueRouter({
	routes:[
		// 后端登录
		{path:'/mlogin',component:login,name:'mlogin'},
		// 前端登录
		{path:'/userlogin',component:userlogin,name:'userlogin'},

		{path:'/detail',component:detail,name:'detail'},

		// 注册
		{path:'/register',component:register,name:'register'},
		// 后台管理
		{path:'/manager',component:manager,name:'manager',children:[
			{path:'/userlist',component:users,name:'users'},
			{path:'/goodslist',component:goodslist,name:'goodslist'}
		]},
		{path:'/',component:main,name:'main',children:[
			{path:'/home',component:home,name:'home'},
			{path:'/car',component:car,name:'car'},
			{path:'/classify',component:classify,name:'classify',children:[

				{path:'/',component:classifyDatagrid},
				{path:'/classify/:data',component:classifyDatagrid},

			]},
			{path:'/my',component:my,name:'my'}

		]},
		{path:'/inClassify',component:classifyDatagrid2}
	]
})

export default router;