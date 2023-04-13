//Importing packages：Vue 和 VueRouter
import Vue from 'vue'
import VueRouter from 'vue-router'


//import components
import router1 from '@/components/router1.vue'
import router2 from '@/components/router2.vue'
import router3 from '@/components/router3.vue'
import router4 from '@/components/router4.vue'
import login from '@/components/login.vue'
import main from '@/components/main.vue'


//Call vue.use () to install VueRouter as a global plugin for Vue
Vue.use(VueRouter)

//Creating an instance Object
const router = new VueRouter({
    //routers is an array that simply holds hashes and calls between components.
    routes: [
        //Route redirection
        {path: '/', redirect: './router1'},
        //standard format
        {path: '/router1', component: router1},
        {path: '/router2', component: router2},
        {path: '/router3', component: router3},
        {path: '/router4', component: router4},
        {path: '/login', component: login},
        {path: '/main', component: main},
    ]
})


//Declare a global fronting navigation guard
//Whenever a route transition occurs, the callback function specified in beforeEach fires
router.beforeEach(function(to, from, next) {
    const value = localStorage.getItem('token')
    if(to.path === '/main'){
        if (value) {
            next()
        }else {
            next('/login')
        }
    }else{
        next()
    }

})

//Outward shared route instance object
export default router