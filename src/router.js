//router
import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';

const routes = [
    {
        name: 'home',
        path: '/',
        component: AppHome,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;