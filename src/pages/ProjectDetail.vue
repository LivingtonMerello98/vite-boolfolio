<script>

import AppHeader from '../components/AppHeader.vue'


//importiamo axios e store
// import { store } from '../store';
import axios from 'axios';

export default {
    name: 'Project-detail',

    components: {
        AppHeader
    },

    data() {
        return {
            store,
            project: null, // variabile per memorizzare i progetti
        }
    },

    methods: {

    },

    created() {
    }

}

</script>

<template>
    <AppHeader />
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="col-md-12" v-if="project">
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">lorem ipsum</h5>
                            <p class="card-title">lorem ipsum</p>
                            <p class="card-title">lorem ipsum</p>
                            <ul>
                                <li>lorem ipsum</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>