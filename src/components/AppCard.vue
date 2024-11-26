<script>

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
    <div class="container">
        <!-- Titolo della sezione -->
        <div class="row mb-3">
            <div class="col-md-12">
                <h2 class="text-light fw-bold text-center mb-3">Alcuni progetti</h2>
            </div>
        </div>
        <!-- Card -->
        <div class="row">
            <div class="col-md-4 mb-3" v-for="result in results" :key="result.id">
                <div class="card bg-dark text-white card-hover">
                    <img src="" >
                    <div class="card-img-overlay overlay-content">
                        <h5 class="card-title">lorem ipsum</h5>
                        <p class="card-text description">lorem ipsum</p>
                        <p class="card-text"><small>lorem ipsum</small></p>
                        <!-- <router-link :to="{ name: 'detail', params: { slug: result.slug } }"
                            class="btn btn-light">Dettagli</router-link> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.card-img {
    height: 100%;
    object-fit: cover;
}

/* Hover Effect */
.card-hover {
    position: relative;
    overflow: hidden;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.card-hover:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
}

.overlay-content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.5s ease;
}

.card-hover:hover .overlay-content {
    opacity: 1;
}

.overlay-content .description {
    display: none;
}

.card-hover:hover .description {
    display: block;
}
</style>
