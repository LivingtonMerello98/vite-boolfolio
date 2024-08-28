import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';

//importiamo lo store dove si trova apiUrl
import { store } from './store';

const routes = [
    {
        name: 'home',
        path: '/',
        component: AppHome,

        //passiamo i dati come props direttamente alla rotta
        props: route => ({ results: store.results })
    },
    {
        name: 'about',
        path: '/about',
        component: AppAbout,
        props: route => ({ results: store.results })
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;