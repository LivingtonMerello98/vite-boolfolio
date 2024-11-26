<script>

import AppHero from '../components/AppHero.vue';
import AppCard from '../components/AppCard.vue';
import AppAbout from '../components/AppAbout.vue';
import AppService from '../components/AppService.vue';

//importiamo axios e store
// import { store } from '../store';

export default {
    name: 'home',

    components: {
        AppHero,
        AppCard,
        AppAbout,
        AppService
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
    <div class="container py-5">
        <div class="row justify-content-center">
            <AppCard/>
            <div class="col-md-12 d-flex justify-content-between mt-3">

                <button class="btn bg-primary">
                    <span class="fw-light text-light">prev</span>
                </button>

                <button class="btn bg-primary" >
                    <span class="fw-light text-light">next</span>
                </button>

            </div>
        </div>
    </div>
</template>

<style></style>
