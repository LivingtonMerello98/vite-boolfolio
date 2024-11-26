<script>
import AppHeaderHero from './AppHeaderHero.vue';

export default {
    components: {
        AppHeaderHero,
    },

    data() {
        return {
            name: 'AppHero',
            isLoaded: false, // Stato per attivare l'animazione
        };
    },

    mounted() {
        // Ritarda l'attivazione per assicurarsi che la pagina sia pronta
        setTimeout(() => {
            this.isLoaded = true;
        }, 300); // Ritardo di 300ms
    },
};
</script>

<template>
    <section class="section">
        <AppHeaderHero />
        <div class="container jumbotron text-start d-flex">
            <div class="row">
                <div 
                    class="col-lg-6 col-md-12 col-sm-12 py-3 d-flex align-items-center" 
                    :class="{ 'fade-in': isLoaded }"
                >
                    <div>
                        <h3 class="text-white text-uppercase mb-3">
                            Hi! my name is Livington
                        </h3>
                        <h1 class="text-white text-uppercase">
                            Jr.Frontend Developer and UX/UI Designer
                        </h1>
                    </div>
                </div>
                <div 
                    class="col-lg-6 col-md-12 col-sm-12 py-3 d-flex justify-content-center" 
                    :class="{ 'fade-in': isLoaded }"
                >
                    <img src="/rocket.webp" alt="" style="width: 400px; height: auto;">
                </div>
            </div>
        </div>
        <div class="border-top border-bottom border-white py-4 carousel"></div>
    </section>
</template>


<style lang="scss" scoped>
.section {
    position: relative;
    background-image: url('hero-background-dsk.png');
    background-size: cover;
    min-height: 105vh; 

    .jumbotron {
        position: absolute;
        top: 20%;
        left: 0;
        right: 0;
        z-index: 3;
        height: auto;
    }

    .carousel {
        position: absolute;
        bottom: 30px; 
        left: 0;
        width: 100%; 
        z-index: 2; 
    }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px); /* Effetto scorrimento */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 1.5s ease-out forwards;
}
</style>
