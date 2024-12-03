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
            link:'https://skysense.netlify.app/',
            languages:[
              '/languages/vue.svg',
              '/languages/sass.svg',
              '/languages/bootstrap.svg',
              '/languages/api.svg'
            ]
          },
          {
            name:'Clarity',
            image:'/covers/clarity-cover.png',
            description:'Lorem Ipsum Dolor Sit Amet Consectetur. Gravida Dolor Tristique Sit Donec Tempor Ac Nunc Fermentum Lectus.',
            link:'https://clarity-task-hub.netlify.app/',
            languages:[
            '/languages/react.svg',
            '/languages/sass.svg',
            '/languages/tailwind.svg'
            ]
          },
          {
            name:'Proloco ICR',
            image:'/covers/proloco-cover.png',
            description:'Lorem Ipsum Dolor Sit Amet Consectetur. Gravida Dolor Tristique Sit Donec Tempor Ac Nunc Fermentum Lectus.',
            link:'https://prolocoisolacaporizzuto.it/',
            languages:[
              '/languages/vue.svg',
              '/languages/bootstrap.svg',
              '/languages/sass.svg'
            ]
          },
          {
            name:'Quickwind',
            image:'/covers/quickwind-cover.png',
            description:'Lorem Ipsum Dolor Sit Amet Consectetur. Gravida Dolor Tristique Sit Donec Tempor Ac Nunc Fermentum Lectus.',
            link:'https://quickwind-web.netlify.app/',
            languages:[
            '/languages/vue.svg',
            '/languages/bootstrap.svg',
            '/languages/sass.svg'
            ]
          },
          {
            name:'Boolzapp',
            image:'/covers/boolzapp-cover.png',
            description:'Lorem Ipsum Dolor Sit Amet Consectetur. Gravida Dolor Tristique Sit Donec Tempor Ac Nunc Fermentum Lectus.',
            link:'https://boolzapp-message-hub.netlify.app/',
            languages:[
            '/languages/vue.svg',
            '/languages/bootstrap.svg',
            '/languages/sass.svg'
            ]
          },
          {
            name:'Netflix',
            image:'/covers/netflix-cover.png',
            description:'Lorem Ipsum Dolor Sit Amet Consectetur. Gravida Dolor Tristique Sit Donec Tempor Ac Nunc Fermentum Lectus.',
            link:'https://streaming-hub.netlify.app/',
            languages:[
              '/languages/vue.svg',
              '/languages/sass.svg',
              '/languages/bootstrap.svg',
              '/languages/api.svg'
            ]
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
          <h3 class="text-white  mb-3">
            Projects Showcase
          </h3>
          <p class="text-white">
            The projects I showcase reflect a continuous learning journey,<br> experimenting with new technologies and integrating APIs to <br>enhance the solutions provided.
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
