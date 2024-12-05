<script>

import AppHero from '../components/AppHero.vue';
import AppCard from '../components/AppCard.vue';
import AppAbout from '../components/AppAbout.vue';
import AppService from '../components/AppService.vue';
import AppDevices from '../components/AppDevices.vue';
import AppForm from '../components/AppForm.vue';
import AppSidebar from '../components/AppSidebar.vue';


//importiamo axios e store
import { store } from '../store';

export default {
    name: 'home',

    components: {
        AppHero,
        AppCard,
        AppAbout,
        AppService,
        AppDevices,
        AppForm,
        AppSidebar
    },

    data() {
        return {
        
        }
    },

    computed: {
        showMenu() {
            // Accedi alla proprietà `showMenu` dal tuo store
            return store.showMenu;
        }
    },

    mounted(){
        console.log(store.showMenu)
    }
}
</script>

<template>
    <div v-if="showMenu"> 
        <AppSidebar/> 
    </div>
    <AppHero />
    <AppAbout />
    <AppService />
    <AppDevices/>
    <AppForm/>
</template>

<style></style>
