<script>
import AppCard from '../components/AppCard.vue'

export default {
    name: 'AppHome',
    props: {
        results: {
            type: Array,
            required: true,
        }
    },
    components: {
        AppCard
    },
}
</script>

<template>
    <div class="container py-5">
        <div class="row">
            <AppCard :results="results" />
        </div>
    </div>
</template>

<style></style>
