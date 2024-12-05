<script>
import AppHeaderHero from './AppHeaderHero.vue';
import CarouselContainer from './CarouselContainer.vue';

export default {
    components: {
        AppHeaderHero,
        CarouselContainer
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
        }, 600); // Ritardo di 300ms
    },
};
</script>

<template>
    <section class="liquid-bg">
        <AppHeaderHero :class="{ 'fade-in': isLoaded }"/>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12  d-flex align-items-center" :class="{ 'fade-in': isLoaded }">
                    <div>
                        <h3 class="text-white text-uppercase mb-3">
                            Hi! my name is Livington
                        </h3>
                        <h1 class="text-white text-uppercase">
                            Jr.Fullstack Developer and UX/UI Designer
                        </h1>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 py-5 d-flex justify-content-center" :class="{ 'fade-in': isLoaded }">
                    <div class="img-container">
                        <img src="../graphics/astronaut.webp" alt="robot-developer" class="robot" />
                        <img src="../graphics/planet.webp" alt="planet" class="planet" />
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12">
            <CarouselContainer :class="{ 'fade-in': isLoaded }"/>
        </div>
    </section>
</template>


<style lang="scss" scoped>

section {
  background-image: url('../graphics/hero-background-dsk.webp');
  background-size: cover;
  border-bottom-left-radius: 1.5rem; /* Arrotonda l'angolo inferiore sinistro */
  border-bottom-right-radius: 1.5rem; /* Arrotonda l'angolo inferiore destro */
  overflow: hidden; /* Assicura che il contenuto rispetti i bordi arrotondati */
}

.img-container {
    position: relative;
    width: 400px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    .robot {
        display: block;
        width: 100%;
        height: auto;
        object-fit: cover;
        z-index: 2;
        animation: float 3s ease-in-out infinite; // Animazione infinita
    }

    .planet {
        position: absolute;
        width: 200px;
        height: auto;
        left: 0px;
        bottom: 0px;
    }
}

// Definizione dell'animazione
@keyframes float {
    0%, 100% {
        transform: translateY(0); // Posizione iniziale e finale
    }
    50% {
        transform: translateY(-40px); // Movimento verso l'alto
    }
}

.carousel {
        position: absolute;
        bottom: 20px; 
        left: 0;
        width: 100%; 
        z-index: 2; 
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
