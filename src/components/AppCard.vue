<script>
import { store } from '../store';

export default {
    name: 'AppCard',

    props: {
        results: {
            type: Array,
            required: true,
        }
    },

    data() {
        return {
            store
        }
    },

}
</script>

<template>
    <!-- titolo della sezione -->
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2 class="text-light fw-bold text-center mb-3">Alcuni progetti</h2>
            </div>
        </div>
    </div>
    <!-- card -->
    <div class="card me-3 mt-3" v-for="result in results" :key="result.id" style="width: 18rem;">
        <img :src="this.store.getImageUrl(result.cover)" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">{{ result.title }}</h5>
            <p class="fw-light">{{ result.description }}</p>
            <p class="fw-bold">{{ result.category.title }}</p>
            <!-- <ul v-for="technology in result.technologies" :key="technology.id">
                <li>{{ technology.name }}</li>
            </ul> -->
            <router-link :to="{ name: 'detail', params: { slug: result.slug } }">detail</router-link>
        </div>
    </div>
</template>
