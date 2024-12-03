<script>
//componente da revisionare
import ProjectsGallery from './ProjectsGallery.vue';

  export default {
    data(){
      return{
        projects:[
          {
            name:'Skysense ',
            image:'/covers/weather-cover.png',
            description:'Nel video puoi vedere SkySense in funzione, con il suo design intuitivo e responsivo. Dalla visualizzazione delle condizioni meteo in tempo reale alla gestione delle città preferite, ogni dettaglio è pensato per rendere l esperienza semplice e veloce.',
            link:'',
            languages:[
              'vue.js',
              'scss',
              'tailwind.css'
            ]
          },
          {
            name:'Website 2',
            image:'../graphics/nike.webp',
            description:'Lorem Ipsum Dolor Sit Amet Consectetur. Gravida Dolor Tristique Sit Donec Tempor Ac Nunc Fermentum Lectus.',
            link:'',
          },
          {
            name:'Website 3',
            image:'../graphics/nike.webp',
            description:'Lorem Ipsum Dolor Sit Amet Consectetur. Gravida Dolor Tristique Sit Donec Tempor Ac Nunc Fermentum Lectus.',
            link:'',
          },
          {
            name:'Website 4',
            image:'../graphics/nike.webp',
            description:'Lorem Ipsum Dolor Sit Amet Consectetur. Gravida Dolor Tristique Sit Donec Tempor Ac Nunc Fermentum Lectus.',
            link:'',
          },
          {
            name:'Website 5',
            image:'../graphics/nike.webp',
            description:'Lorem Ipsum Dolor Sit Amet Consectetur. Gravida Dolor Tristique Sit Donec Tempor Ac Nunc Fermentum Lectus.',
            link:'',
          },
          {
            name:'Website 6',
            image:'../graphics/nike.webp',
            description:'Lorem Ipsum Dolor Sit Amet Consectetur. Gravida Dolor Tristique Sit Donec Tempor Ac Nunc Fermentum Lectus.',
            link:'',
          }
        ]
      }
    },
    components: {
      ProjectsGallery
    },
  };
</script>

<template>
  <section class="bg-image">
    <div class="container py-5">
      <div class="row">
        <!-- Titolo -->
        <div class="col-12">
          <h3 class="text-white text-uppercase mb-5">
            Project ShowCase
          </h3>
          <p class="text-white">
            lorem ipsum ipsum dolor lorem ipsum ipsum dolor lorem ipsum ipsum dolor <br>
            lorem ipsum ipsum dolor lorem ipsum ipsum dolor <br>
            lorem ipsum ipsum dolor
          </p>

          <!-- <img src="/languages/html.svg" alt="" style="width: 300px; height: 300px;"> -->
        </div>
      </div>
    </div>

    <!-- Progetti -->
    <ProjectsGallery :projects="projects" />

  </section>
</template>


<style lang="scss" scoped>
/* Sfondo della sezione */
.bg-image {
  background-image: url('../graphics/hero-background-dsk.png');
  background-size: cover;
  background-position: center;
  padding: 20px 0;
  border-top-left-radius: 1.5rem; /* Arrotonda l'angolo inferiore sinistro */
  border-top-right-radius: 1.5rem; /* Arrotonda l'angolo inferiore destro */
  border-bottom-left-radius: 1.5rem; /* Arrotonda l'angolo inferiore sinistro */
  border-bottom-right-radius: 1.5rem; /* Arrotonda l'angolo inferiore destro */
}
</style>
