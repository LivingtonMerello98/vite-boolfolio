<script>

import AppHero from '../components/AppHero.vue';
import AppCard from '../components/AppCard.vue';
import AppAbout from '../components/AppAbout.vue';
import AppService from '../components/AppService.vue';
import AppDevices from '../components/AppDevices.vue';
import AppForm from '../components/AppForm.vue';

//importiamo axios e store
// import { store } from '../store';

export default {
    name: 'home',

    components: {
        AppHero,
        AppCard,
        AppAbout,
        AppService,
        AppDevices,
        AppForm
    },

    data() {
        return {
        
        }
    },

    created() {
    }
}
</script>

<template>
    <AppHero />
    <AppAbout />
    <AppService />
    <AppDevices/>
    <AppForm/>
</template>

<style></style>
