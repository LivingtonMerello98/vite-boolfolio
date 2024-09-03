<script>

import AppHeaderHero from './AppHeaderHero.vue';

export default {
    components: {
        AppHeaderHero,
    },

    data() {
        return {
            name: 'AppHero',
            stringAnimated: [
                ' Web-Desinger',
                'Full-stack Developer'
            ],
            currentString: '',
            currentIndex: 0
        }
    },

    methods: {
        animateText() {
            // Cambia il testo ogni 3 secondi
            setInterval(() => {
                this.currentString = this.stringAnimated[this.currentIndex];
                this.currentIndex = (this.currentIndex + 1) % this.stringAnimated.length;
            }, 3000);
        }
    },
    created() {
        this.animateText();
    }

}
</script>

<template>
    <section class="section">
        <AppHeaderHero />
        <video class="background " autoplay muted loop>
            <source src="https://videos.pexels.com/video-files/6071387/6071387-uhd_2560_1440_30fps.mp4" type="video/mp4">
        </video>
        <div class="container jumbotron">
            <div class="row">
                <div class="col-md-12 text-center mb-3">
                    <p class="text-light fs-3 d-inline">Ciao sono Livington e sono un<br><span
                            class="text-light fw-bolder fs-2 d-inline archivo-black">{{ currentString }}</span>
                    </p>
                </div>
                <div class="col-md-12 text-center">
                    <button class="btn btn-danger">
                        Esplora i progetti
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.section {
    position: relative;
    height: 80vh;

    .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1;
    }

    .background::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgb(0, 0, 0), rgb(0, 0, 0));
        /* Da nero semi-trasparente a trasparente */
        z-index: 3;
        /* Sopra l'immagine ma sotto il contenuto */
    }

    .jumbotron {
        position: absolute;
        top: 40%;
        left: 0;
        right: 0;
        z-index: 3;
    }

    .d-inline {
        display: inline;
    }

    .archivo-black {
        font-family: 'Archivo Black', sans-serif;
    }
}
</style>