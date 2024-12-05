<script>
//componente da revisionare
import ProjectsGallery from './ProjectsGallery.vue';

  export default {
    data(){
      return{
        projects:[
          {
            name:'Skysense ',
            image:'/covers/weather-cover.webp',
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
            image:'/covers/clarity-cover.webp',
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
            image:'/covers/proloco-cover.webp',
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
            image:'/covers/quickwind-cover.webp',
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
            image:'/covers/boolzapp-cover.webp',
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
            image:'/covers/netflix-cover.webp',
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
  <section class="bg-image mb-5">
    <div class="container py-5">
      <div class="row">
        <!-- Titolo -->
        <div class="col-12 py-4">
          <h3 class="text-white  mb-3">
            Projects Showcase
          </h3>
          <p class="text-white">
            The projects I showcase reflect a continuous learning journey,<br> experimenting with new technologies and integrating APIs to <br>enhance the solutions provided.
          </p>
        </div>
      </div>
    </div>

    <!-- Progetti -->
    <ProjectsGallery :projects="projects" />

    <div class="container">
        <div class="col-12 text-end py-5">
          <a href="https://github.com/LivingtonMerello98" target="_blank">
            <button class="button py-2 px-4">
                explore the projects
            </button>
          </a>
        </div>
    </div>

  </section>
</template>


<style lang="scss" scoped>
/* Sfondo della sezione */
.bg-image {
  background-image: url('../graphics/hero-background-dsk.webp');
  background-size: cover;
  background-position: center;
  padding: 20px 0;
  border-top-left-radius: 1.5rem; /* Arrotonda l'angolo inferiore sinistro */
  border-top-right-radius: 1.5rem; /* Arrotonda l'angolo inferiore destro */
  border-bottom-left-radius: 1.5rem; /* Arrotonda l'angolo inferiore sinistro */
  border-bottom-right-radius: 1.5rem; /* Arrotonda l'angolo inferiore destro */
}

.button{
    border: 1px solid #ffffff;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    background-color: rgba(255, 255, 255, 0);
    font-size: 14px;
    color: #ffffff;
    transition: all 0.3s ease; /* Animazione fluida per l'hover */
}
.button:hover{
  border: 0px; /* Rimuove il bordo */
  background: linear-gradient(45deg, #5653FF, #A2A89F, #F0FF3E); /* Gradiente sui tre colori */
  background-size: 200% 200%; /* Per creare un effetto più dinamico */
  animation: gradient-animation 4s ease infinite; /* Animazione del gradiente */
  transform: scale(1.05); /* Ingrandisce leggermente la card (5% più grande) */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
