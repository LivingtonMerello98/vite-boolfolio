<script>
//importiamo axios e store
import { store } from '../store';

import AppHero from '../components/AppHero.vue';
import AppCard from '../components/AppCard.vue';
import AppAbout from '../components/AppAbout.vue';
import AppService from '../components/AppService.vue';
import AppDevices from '../components/AppDevices.vue';
import AppForm from '../components/AppForm.vue';
import AppSidebar from '../components/AppSidebar.vue';

export default {
    name: 'AppHome',

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

    <!-- certificates -->
    <AppAbout />


    <!--projects-->
    <AppService />


    <AppDevices/>

    <!-- get in touch -->
    <AppForm/>
</template>

<style></style>
