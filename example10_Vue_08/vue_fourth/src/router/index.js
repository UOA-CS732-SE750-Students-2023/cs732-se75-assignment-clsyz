//Importing packages：Vue 和 VueRouter
import Vue from 'vue'
import VueRouter from 'vue-router'


//import components
import router1 from '@/components/router1.vue'
import router2 from '@/components/router2.vue'
import router3 from '@/components/router3.vue'
import router4 from '@/components/router4.vue'
import router_children1 from '@/components/child/router_children1.vue'
import Vue_intro from '@/components/Vue_intro.vue';


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
        {path: '/router3', component: router3,
         //Through the children attribute, nested declaration of child routing rules
         children: [
            {path: 'router_children1', component: router_children1}
         ]},
        {path: '/router4', component: router4},
        //dynamic router
        //Open props
        {path: '/Vue_intro/:id', component: Vue_intro, props: true},
    ]
})

//Outward shared route instance object
export default router