import { createRouter, createWebHistory } from "vue-router";

import All from './views/All.vue';

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            component: All,
            name:"Все картины",
            meta:{
                title:"Все картины галлереи"
            }
        },
    ]
})

export default router;