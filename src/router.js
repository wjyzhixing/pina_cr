import VueRouter from 'vue-router'

import pineapplesContainer from './components/tabbar/pineapplesContainer.vue'
import pineSelect from './components/tabbar/pineSelect.vue'
import pineDenoising from './components/tabbar/pineDenoising.vue'
import pineRegister from './components/tabbar/pineRegister.vue'
import durianContainer from './components/tabbar/durianContainer.vue'
import durianSelect from './components/tabbar/durianSelect.vue'
import durianDenoising from './components/tabbar/durianDenoising.vue'
import durianRegister from './components/tabbar/durianRegister.vue'

var router = new VueRouter({
	routes: [ //配置路由规则
		{
			path:'/',
			redirect:'/pineapplesContainer'
		},
		{
			path: '/pineapplesContainer',
			component: pineapplesContainer
		},
		{
			path:'/pineSelect',
			component:pineSelect
		},
		{
			path:'/pineDenoising',
			component:pineDenoising
		},
		{
			path:'/pineRegister',
			component:pineRegister
		},
		{
			path:'/durianContainer',
			component:durianContainer
		},
		{
			path:'/durianSelect',
			component:durianSelect
		},
		{
			path:'/durianDenoising',
			component:durianDenoising
		},
		{
			path:'/durianRegister',
			component:durianRegister
		}
	]
	// linkActiveClass: 'mui-active' //覆盖默认路由高亮的类，默认的类是router-link-active
})

// 把路由对象暴露出去
export default router