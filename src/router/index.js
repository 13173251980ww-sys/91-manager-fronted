import {createRouter, createWebHistory} from "vue-router";
import index from '@/views/index.vue'
import users from '@/views/users.vue'
import chickens from '@/views/chickens.vue'

const router =createRouter({
    // 创建路由历史记录
    history:createWebHistory(import.meta.env.BASE_URL),
    //定义path和component对应关系的位置
    routes:[
        {path:'/',redirect:'/index'},
        {
            path:'/index',
            component:index,
            children:[
                {path:'users',component:users},
                {path:'chickens',component:chickens}
            ]
        }
    ]
})

export default router;

