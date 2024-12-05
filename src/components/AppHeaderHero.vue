<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { store } from '../store';

export default {
  name: 'AppHeader',
  data(){
    return{
        anchors: store.anchors
    }
  },
  setup() {
    const currentTime = ref(new Date().toLocaleTimeString());

    const updateTime = () => {
      currentTime.value = new Date().toLocaleTimeString();
    };

    // Esegui updateTime ogni secondo
    onMounted(() => {
      const interval = setInterval(updateTime, 1000);
      // Pulisci l'intervallo quando il componente viene smontato
      onUnmounted(() => clearInterval(interval));
    });

    return {
      currentTime,

    };
  },

  methods:{
    toggleMenu(){
        store.toggleMenu()
    }
  }
};
</script>


<template>
    <section>
        <div class="container py-4">
        <div class="row align-items-center">
            <!-- Colonna  -->
            <div class="col-lg-12 row flex-wrap">

                <!-- item 1 -->
                <div class="col-6 d-none d-sm-flex align-items-center">
                    <!-- Navigazione -->
                    <ul class="nav box py-2 px-4">
                        <li><a href="/" class="link px-2" v-for="(anchor, index) in anchors" :key="index">{{ anchor.name }}</a></li>
                    </ul>
                    <!-- Ora -->
                    <div class="time-box ms-3">
                    <p class="mb-0">{{ currentTime }}</p>
                    </div>
                </div>

                <!-- item 2 -->
                <div class="col-6 d-flex justify-content-end">
                    <!-- Icone Social visibili solo su dispositivi medi e grandi -->
                    <div class="d-none d-sm-flex align-items-center">
                    <a href="https://www.linkedin.com/in/livington-merello-765b1a215/" target="_blank">
                        <img src="/socials/linkedin.svg" class="social-icon" alt="linkedin">
                    </a>
                    <a href="https://github.com/LivingtonMerello98" target="_blank">
                        <img src="/socials/github.svg" class="social-icon" alt="github">
                    </a>
                    <a href="https://www.behance.net/merellodesigns" target="_blank">
                        <img src="/socials/behance.svg" class="social-icon" alt="github">
                    </a>
                    </div>
                </div>

            </div>

            <!-- Tasto Menu visibile solo su dispositivi piccoli -->
            <div class="col-12 d-sm-none d-flex justify-content-end">
                <font-awesome-icon @click="toggleMenu()" :icon="['fas', 'bars']" style="color: white;" class="px-3" />
            </div>
        </div>
        </div>
    </section>
</template>



<style lang="scss" scoped>
.box {
    background-color: white;
    color: #12183E;
    width: fit-content;
    border-radius: 2rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.link {
    color: #12183E;
    text-decoration: none; 
    font-size: smaller;
}

.link:hover {
    font-weight: 700; 
}

.social-icon {
    width: 30px;
    margin-right: 20px;
}

.time-box {
    font-size: 1rem; 
    color: #ffffff;
    padding: 0.5rem 1rem; 
    border-radius: 0.5rem; /* Arrotondamento */
    text-align: center; /* Centra il testo */
}

p {
    margin: 0; /* Evita spaziature extra */
}



</style>
