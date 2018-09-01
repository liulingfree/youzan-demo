// import './member_base.css'
// import './member.css'

import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let routes=[{
    path:'/',
    components: require('./components/member.vue')
},{
    path:'/address',
    components:require('./components/address.vue'),
    children:[{
        path:'',
        redirect: 'all'
    },{
        path:'all',
        components:require('./components/all.vue')
    },{
        path:'form',
        name:'form',
        components:require('./components/form.vue')
    }]
}]

let router=new Router({
    routes
})

let view=new Vue({
    el:'#app',
    router
})