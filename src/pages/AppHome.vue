<script>

import AppCard from '../components/AppCard.vue';

//importiamo axios e store
import { store } from '../store';
import axios from 'axios';



export default {
    name: 'home',

    components: {
        AppCard
    },

    data() {
        return {
            results: [],
            store
        }
    },

    methods: {

        getProjects() {

            const apiUrl = `${this.store.url}${this.store.endPoint}`;

            axios.get(apiUrl).then(response => {
                console.log('projects:', response.data);
                this.results = response.data.results.data;
                console.log('la chiamata è stata effettuata con successo');
            }).catch(error => {
                console.error('Errore nella chiamata:', error);
            });
        },


        nextPage() {
            store.current_page++

            //chiamata axios
            axios.get(`${store.url}${this.store.endPoint}?page=${store.current_page}`)
                .then(response => {
                    this.results = response.data.results.data;
                    //aggiorno la pagina corrente
                    store.current_page = response.data.results.current_page;
                    console.log('next')
                })
                .catch(error => {
                    console.error('Errore nella chiamata:', error);
                });
        },
        prevPage() {
            store.current_page--

            //chiamata axios
            axios.get(`${store.url}${this.store.endPoint}?page=${store.current_page}`)
                .then(response => {
                    this.results = response.data.results.data;
                    //aggiorno la pagina corrente
                    this.current_page = response.data.results.current_page;
                    console.log('prev')
                })
                .catch(error => {
                    console.error('Errore nella chiamata:', error);
                });
        }
    },

    created() {

        this.getProjects()

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
