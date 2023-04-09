import Vue from 'vue'
import VueRouter from 'vue-router'


//Import component
import teacherlogin from "../components/teacherlogin.vue";
import main_page from "../components/main_page.vue"
import course from "@/components/child_components/course.vue"
import dis from "@/components/child_components/dis.vue"
import student from "@/components/child_components/student.vue"


Vue.use(VueRouter)

const router = new VueRouter({

    //routing rules
    routes:[
        //redirect
        { path: '/', redirect: '/teacherlogin' },
        { path: '/teacherlogin', component: teacherlogin },
        {path: '/main_page', 
        component: main_page,
        redirect: '/main_page/course',
        children: [
            { path: 'course', component: course },
            { path: 'student', component: student },
            { path: 'dis', component: dis },
        ]
    }
    ]
})

//Global Front Guard
router.beforeEach(function(to, from, next) {
    if(to.path === '/main_page/course'){
        const token = localStorage.getItem('token')
        if(token) {
            next()
        }else{
            next('/teacherlogin')
        }
    }else{
        next()
    }
})

export default router