import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);


import home from '../components/home/home.vue';
import car from '../components/car/car.vue';
import classify from '../components/classify/classify.vue';
import my from '../components/my/my.vue';

const router = new VueRouter({
	routes:[
		{path:'/home',component:home,name:'home'},
		{path:'/car',component:car,name:'car'},
		{path:'/classify',component:classify,name:'classify'},
		{path:'/my',component:my,name:'my'}
	]
})

export default router;