<script>
export default {
    name: 'AppSplashPage',
    data() {
        // Array di frasi a tema spaziale
        const phrases = [
            "To the moon and back!",
            "Exploring the universe, one line of code at a time.",
            "Code is my rocket fuel.",
            "Building galaxies, one app at a time.",
            "The universe is the limit for full-stack developers.",
            "Developing beyond the stars.",
            "Innovation takes us to new heights!",
            "Let's launch your next project into the stratosphere.",
            "Coding through the stars.",
            "Space may be infinite, but your potential is limitless!"
        ];

        return {
            // Seleziona una frase casuale
            randomPhrase: phrases[Math.floor(Math.random() * phrases.length)]
        };
    }
}
</script>

<template>
    <div class="splashPage">
        <div class="container d-flex justify-content-center align-items-center content">
            <!-- Razzo -->
            <img src="../graphics/rocket2.webp" class="rocket" alt="Rocket">
            <!-- Frase casuale sotto il razzo -->
            <span class="text-white random-phrase">{{ randomPhrase }}</span>
            <!-- Spinner -->
            <div class="spinner mt-4"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.splashPage {
    position: fixed;
    z-index: 999;
    background: linear-gradient(to bottom, #0f1435, #1B2562);
    height: 100vh;
    width: 100vw;
    overflow: hidden; /* Evita scrollare la splash page */
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Aggiungi queste regole per impedire lo scroll globale */
body {
    overflow: hidden; /* Disabilita lo scroll della pagina intera */
}

/* Spinner styling */
.spinner {
    width: 50px;
    height: 50px;
    border: 5px solid rgba(255, 255, 255, 0.3); /* Cerchio trasparente */
    border-top: 5px solid white; /* Linea visibile */
    border-radius: 50%;
    animation: spin 1s linear infinite; /* Rotazione infinita */
    margin-bottom: 20px; /* Distanza dal razzo */
}

/* Animazione dello spinner */
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.rocket {
    width: 200px;
    height: auto;
    animation: float 1s ease-in-out infinite; /* Animazione infinita */
}

/* Aggiungi la definizione dell'animazione 'float' */
@keyframes float {
    0% {
        transform: translateY(0); /* Posizione iniziale */
    }
    50% {
        transform: translateY(-30px); /* Spostamento verso l'alto */
    }
    100% {
        transform: translateY(0); /* Torna alla posizione iniziale */
    }
}

/* Styling per il testo della frase */
.random-phrase {
    font-size: 14px;
    font-weight: thin;
    color: white;
    margin-top: 20px; /* Aggiunge un margine sopra la frase */
}

/* Content styling per disporre gli elementi in colonna */
.content {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centra verticalmente il contenuto */
    align-items: center; /* Centra orizzontalmente */
}
</style>
