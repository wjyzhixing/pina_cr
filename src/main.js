import Vue from 'vue'
import app from './App.vue'

import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.min.js'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './router.js'

import VueResource from 'vue-resource'
Vue.use(VueResource)


$(function(){
	console.log("123");
})

var vm = new Vue({
	el: '#app',
	render:c => c(app),
	router
})