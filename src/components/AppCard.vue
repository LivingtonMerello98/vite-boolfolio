<script>

import { store } from '../store';

export default {
    name: 'AppCard',

    data() {

        return {
            store
        }

    },

    props: {
        results: {
            type: Array,
            required: true,
        }
    },
}

</script>


<template>
    <div class="card me-3 mt-3" v-for="result in results" :key="result.id" style="width: 18rem;">
        <img :src="result.cover" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">{{ result.title }}</h5>
            <p class="fw-light">{{ result.description }}</p>
            <p class="fw-bold">{{ result.category.title }}</p>
            <ul v-for="technology in result.technologies" :key="technology.id">
                <li>{{ technology.name }}</li>
            </ul>

            <router-link :to="{ name: 'detail', params: { slug: result.slug } }">detail</router-link>

        </div>
    </div>
</template>


<style></style>