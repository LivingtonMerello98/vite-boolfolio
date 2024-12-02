<script>
//componente da revisionare
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/navigation';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      // Dati dinamici per le card
      const cards = [
        {
          id: 1,
          image: 'https://via.placeholder.com/300x200',
          title: 'Card Title 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          buttonText: 'Learn More',
          buttonLink: '#',
        },
        {
          id: 2,
          image: 'https://via.placeholder.com/300x200',
          title: 'Card Title 2',
          description: 'Integer nec odio. Praesent libero. Sed cursus ante dapibus.',
          buttonText: 'View Details',
          buttonLink: '#',
        },
        {
          id: 3,
          image: 'https://via.placeholder.com/300x200',
          title: 'Card Title 3',
          description: 'Fusce nec tellus sed augue semper porta. Mauris massa.',
          buttonText: 'Contact Us',
          buttonLink: '#',
        },
      ];

      const onSwiper = (swiper) => {
        console.log(swiper);
      };

      const onSlideChange = () => {
        console.log('slide change');
      };

      return {
        cards,
        onSwiper,
        onSlideChange,
      };
    },
  };
</script>

<template>
  <section class="bg-image">
    <Swiper
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :slides-per-view="1"
      :space-between="10"
      loop
      navigation
    >
      <!-- Genera dinamicamente le card -->
      <SwiperSlide v-for="card in cards" :key="card.id">
        <div class="card">
          <img :src="card.image" :alt="card.title" />
          <h3>{{ card.title }}</h3>
          <p>{{ card.description }}</p>
          <a :href="card.buttonLink" class="btn">{{ card.buttonText }}</a>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style lang="scss" scoped>
/* Sfondo della sezione */
.bg-image {
  background-image: url('../graphics/hero-background-dsk.png');
  background-size: cover;
  background-position: center;
  padding: 20px 0;
}

/* Stile della card */
.card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  max-width: 300px;
  margin: 0 auto;
}

/* Immagine nella card */
.card img {
  width: 100%;
  border-radius: 8px 8px 0 0;
  margin-bottom: 10px;
}

/* Titolo della card */
.card h3 {
  margin: 10px 0;
  font-size: 1.5em;
  color: #333;
}

/* Testo nella card */
.card p {
  color: #666;
  margin: 0 0 20px;
  font-size: 1em;
}

/* Pulsante nella card */
.card .btn {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  text-decoration: none;
  display: inline-block;
}

.card .btn:hover {
  background-color: #0056b3;
}

/* Stile per i pulsanti di navigazione di Swiper */
.swiper-button-next,
.swiper-button-prev {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  padding: 10px;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
