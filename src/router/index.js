import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ('../pages/index.vue'),
    },
    {
        path: '/Concert',
        name: 'Concert',
        component: () =>
            import ('../pages/Concert.vue'),
    },
    // {
    //     // path: '/concerts',
    //     // name: 'Concerts',
    //     // component: () =>
    //     //     import ('../pages/concerts.vue'),
    // },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;