<script>

import AppCard from '../components/AppCard.vue';

//importiamo axios e store
import { store } from '../store';
import axios from 'axios';



export default {
    name: 'home',

    props: {
        results: {
            type: Array,
            required: true
        }
    },
    components: {
        AppCard
    },

    methods: {
        nextPage() {
            store.current_page++

            //chiamata axios
            axios.get(`${store.apiUrl}?page=${store.current_page}`)
                .then(response => {
                    store.results = response.data.results.data;
                    //aggiorno la pagina corrente
                    store.current_page = response.data.results.current_page;
                })
                .catch(error => {
                    console.error('Errore nella chiamata:', error);
                });
        },
        prevPage() {
            store.current_page--

            //chiamata axios
            axios.get(`${store.apiUrl}?page=${store.current_page}`)
                .then(response => {


                    store.results = response.data.results.data;

                    //aggiorno la pagina corrente
                    store.current_page = response.data.results.current_page;
                })
                .catch(error => {
                    console.error('Errore nella chiamata:', error);
                });
        }
    }
}
</script>

<template>
    <div class="container py-5">
        <div class="row justify-content-center">
            <AppCard :results="results" />
            <div class="col-md-12 d-flex justify-content-between mt-3">

                <button class="btn bg-primary" @click="prevPage()">
                    <span class="fw-light text-light">prev</span>
                </button>

                <button class="btn bg-primary" @click="nextPage()">
                    <span class="fw-light text-light">next</span>
                </button>

            </div>
        </div>
    </div>
</template>

<style></style>
