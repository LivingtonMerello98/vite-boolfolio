<script>
export default {
  name: "ProjectsGallery",
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isDragging: false, // Stato del trascinamento
      startX: 0, // Posizione iniziale del mouse
      scrollLeft: 0, // Scroll orizzontale iniziale
    };
  },
  methods: {
    startDrag(e) {
      this.isDragging = true;
      this.startX = e.pageX - this.$refs.scrollContainer.offsetLeft; // Salva la posizione del mouse
      this.scrollLeft = this.$refs.scrollContainer.scrollLeft; // Salva lo scroll iniziale
    },
    onDrag(e) {
      if (!this.isDragging) return;
      const x = e.pageX - this.$refs.scrollContainer.offsetLeft; // Posizione corrente del mouse
      const walk = x - this.startX; // Calcola la distanza trascinata
      this.$refs.scrollContainer.scrollLeft = this.scrollLeft - walk; // Aggiorna la posizione di scroll
    },
    stopDrag() {
      this.isDragging = false; // Arresta il trascinamento
    },
  },
};
</script>
  
<template>
    <!-- Progetti -->
    <div class="col-12">
        <div
        class="scroll-container"
        ref="scrollContainer"
        @mousedown="startDrag"
        @mousemove="onDrag"
        @mouseup="stopDrag"
        @mouseleave="stopDrag"
        >
        <!-- Card singole -->
        <div
            v-for="(project, index) in projects"
            :key="index"
            class="card-container mx-3"
        >
            <!-- Immagine di sfondo -->
            <div class="background-image"
            :style="{ backgroundImage: `url(${project.image})` }"></div>

            <!-- Top Bar -->
            <div class="top-bar my-3">
              <span class="box px-3 py-1" style="z-index: 3;">lorem ipsum + views</span>
              <button class="expand-button px-2 py-1">
                  <i class="icon">⤢</i>
              </button>
            </div>

            <!-- Content Section -->
            <div class="content py-5 mt-5">
              <!-- <h2 class="title text-uppercase mb-3">{{ project.name }}</h2> -->
              <!-- <p class="description">
                  {{project.description}}
              </p> -->
            </div>

        </div>
        </div>
    </div>
</template>
  

<style lang="scss" scoped>

.box {
    background-color: white;
    color: #12183E;
    width: fit-content;
    border-radius: 0.2rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

/* Card */
.card-container {
  position: relative;
  min-width: 360px; /* Dimensione minima per il layout orizzontale */
  height: 600px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  color: #ffffff;
  background-color: rgba(20, 33, 61, 0.9); /* Sfondo leggermente trasparente */
}
/* Aggiungi l'immagine di sfondo */
.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: 0; /* Dietro al contenuto */
  opacity: 0.8;  /*Trasparenza dell'immagine */
}


.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  font-size: 14px;
  color: #FFFFFF;
  z-index: 3; /* Sopra l'immagine */
}

.expand-button {
  background-color: white;
  color: #12183E;
  width: fit-content;
  border: 0px;
  border-radius: 0.2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-size: 18px;
  cursor: pointer;
  z-index: 3;
}

.content {
  padding: 20px;
  position: relative;
  z-index: 1; /* Sopra l'immagine */
}

.title {
  font-size: 20px;
  font-weight: bold;
  color: #FFFFFF;
}

.description {
  font-size: 14px;
  font-weight: 300;
  line-height: 1.5;
}

.scroll-container {
  display: flex; /* Layout orizzontale */
  gap: 20px; /* Spaziatura tra le card */
  overflow-x: auto; /* Abilita lo scroll orizzontale */
  padding-bottom: 10px; /* Spazio per lo scroll */
  cursor: grab; /* Cursore a mano */
  scrollbar-width: thin; /* Larghezza ridotta della scrollbar */
  scrollbar-color: #1B2562 transparent; /* Colore della scrollbar */
}

/* Durante il trascinamento */
.scroll-container:active {
  cursor: grabbing; /* Cursore durante il trascinamento */
}

/* Scrollbar per browser Webkit */
.scroll-container::-webkit-scrollbar {
  height: 8px; /* Altezza della scrollbar */
}

.scroll-container::-webkit-scrollbar-thumb {
  background: #1B2562; /* Colore del "pollice" */
  border-radius: 4px; /* Arrotondamento */
}

.scroll-container::-webkit-scrollbar-track {
  background: transparent; /* Sfondo */
}

/* Per i browser basati su Webkit (Chrome, Safari, Edge) */
.scroll-container::-webkit-scrollbar {
  height: 8px; /* Altezza della scrollbar */
}

.scroll-container::-webkit-scrollbar-thumb {
  background: #1B2562; /* Colore del "pollice" della scrollbar */
  border-radius: 4px;
}

.scroll-container::-webkit-scrollbar-track {
  background: transparent; /* Sfondo della scrollbar */
}

</style>