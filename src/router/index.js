import { createWebHashHistory,createRouter } from "vue-router";
const routes = [
    {
        path: '/',
        redirect:'/dashBoard',
        name: 'layout',
        component: () => import('@/views/layout/index.vue'),
        children:[
            {
                path:'/dashBoard',
                name:'dashBoard',
                component:() => import('@/views/dashBoard/index.vue')
            }
        ]
    },
    {
        path: '/demo',
        name: 'demo',
        component: () => import('@/views/demo/index.vue'),
    }
]
// 创建 vueRouter 实例
const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  export default router