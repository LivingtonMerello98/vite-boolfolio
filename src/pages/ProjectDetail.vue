<script>

import AppHeader from '../components/AppHeader.vue'


//importiamo axios e store
import { store } from '../store';
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
        // Chiama il metodo getProjects dello store
        store.getProjects();

        //watch per monitorare i cambiamenti in store.results
        this.$watch(
            () => store.results,
            (newResults) => {
                if (newResults.length > 0) {
                    this.project = newResults[0];
                }
            },
            { immediate: true }  // Il watcher viene eseguito immediatamente
        );
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
                        <img :src="project.cover ? store.getImageUrl(project.cover) : ''" class="card-img-top"
                            style="width:500px; height: auto;" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{ project.title }}</h5>
                            <p class="card-title">{{ project.description }}</p>
                            <p class="card-title">{{ project.category.title }}</p>
                            <ul v-for="technology in project.technologies" :key="technology.id">
                                <li>{{ technology.name }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>