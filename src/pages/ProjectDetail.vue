<script>

//importiamo axios e store
import { store } from '../store';
import axios from 'axios';

export default {
    name: 'Project-detail',

    data() {
        return {
            store,
            project: null, // variabile per memorizzare i progetti
        }
    },

    methods: {

        getProjectDetail() {

            //costruisco la query per la chiamata
            const getDetail = `${this.store.url}${this.store.endPoint}/${this.$route.params.slug}`

            //chiamata con axios 
            axios.get(getDetail)
                .then(response => {
                    console.log('project:', response.data.results)
                    this.project = response.data.results
                    console.log('la chiamata è stata effettuata con successo')
                })
                .catch(error => {
                    console.error('Errore durante il recupero dei dettagli del progetto:', error);
                });
        },

        getImageUrl(cover) {
            const imageUrl = `${store.url}/${cover}`;
            console.log(`url dell'immagine: ${imageUrl}`);
            return imageUrl;
        }


    },

    created() {
        this.getProjectDetail()
    }

}

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="col-md-12" v-if="project">
                    <div class="card mb-3">
                        <img :src="getImageUrl(project.cover)" class="card-img-top" style="width:500px; height: auto;"
                            alt="...">
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