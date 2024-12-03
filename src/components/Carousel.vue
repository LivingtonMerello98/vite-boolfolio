<script>
export default {
  name: 'CarouselComponent',
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      animationWidth: 0,
      sliderWidth: 0,
      slidesVisible: 0,
      speed: 0,
    };
  },
  mounted() {
    this.initSmoothScrolling();
  },
  methods: {
    initSmoothScrolling() {
      const container = this.$refs.animationContainer;

      // Calcolare la larghezza totale di tutte le immagini
      this.sliderWidth = 0;
      this.animationWidth = 0;
      const slides = container.children;

      // Calcolo dell'altezza slider
      const sliderHeight = slides[0].offsetHeight;

      // Calcolare la larghezza totale dell'animazione
      for (let slide of slides) {
        this.animationWidth += slide.offsetWidth;
      }

      // Numero di slide visibili
      this.slidesVisible = Math.ceil(this.$el.offsetWidth / slides[0].offsetWidth);

      // Copiare il numero di slide visibili per creare l'effetto loop
      for (let i = 0; i < this.slidesVisible; i++) {
        const clone = slides[i].cloneNode(true);
        container.appendChild(clone);
      }

      // Larghezza totale dopo aver aggiunto le slide clonate
      this.sliderWidth = Array.from(container.children).reduce((acc, slide) => acc + slide.offsetWidth, 0);

      // Imposta la larghezza e l'altezza del contenitore animato
      container.style.width = `${this.sliderWidth}px`;
      container.style.height = `${sliderHeight}px`;

      // Velocità di animazione (più immagini ci sono, più tempo serve)
      this.speed = this.images.length * 3;

      // Avviare l'animazione con CSS
      this.startAnimation();
    },
    startAnimation() {
      const animationName = 'smoothscroll';
      const animationDuration = `${this.speed}s`;
      const animationCSS = `
        @keyframes ${animationName} {
          0% { margin-left: 0px; }
          100% { margin-left: -${this.animationWidth}px; }
        }
        .animation {
          animation: ${animationName} ${animationDuration} linear infinite;
        }
      `;

      // Aggiungere lo stile dinamicamente
      const styleTag = document.createElement('style');
      styleTag.type = 'text/css';
      styleTag.innerHTML = animationCSS;
      document.head.appendChild(styleTag);
    },
  },
};
</script>

<template>
  <div class="block py-5">
    <div class="animation" ref="animationContainer">
      <div v-for="(image, index) in images" :key="index" class="slide">
        <img :src="image" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.block {
  overflow: hidden;
  width: 100%;
}

.animation {
  width: auto;
  height: 100px;
  white-space: nowrap;
}

.slide {
  display: inline-block;
  padding: 0 10px;
}

img {
  width: auto;
  height: 50px;
  margin-inline: 2rem;
}
</style>
