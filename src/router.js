import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import ProjectDetail from './pages/ProjectDetail.vue';

//importiamo lo store dove si trova apiUrl
import { store } from './store';

const routes = [
    {
        name: 'home',
        path: '/',
        component: AppHome,

        //passiamo i dati come props direttamente alla rotta
        props: route => ({ results: store.results, count: store.count })
    },
    {
        name: 'about',
        path: '/about',
        component: AppAbout,
        props: route => ({ results: store.results })
    },
    {
        name: 'detail',
        path: '/Project-detail/:slug',
        component: ProjectDetail,
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;