<script>
export default {
  name: 'AppAbout',
  data() {
    return {
      courses: [
        { name: 'Udemy', year: 'Ongoing...', certificate: 'MERN Stack' },
        { name: 'Boolean', year: '2024', certificate: 'Fullstack Development' },
        { name: 'Learn', year: '2023', certificate: 'UX Design' },
        { name: 'Learn', year: '2023', certificate: 'Webflow/Web-Design' },
      ],
      hoverIndex: null, // Stato per il card attualmente in hover
      cardColors: ['#FF5733', '#33FF57', '#5733FF', '#F3FF33'], // Colori corrispondenti alle card
    };
  },
};
</script>

<template>
    <div class="container py-5">
        <div class="row">
            <!-- Immagine a sinistra -->
            <div class="col-md-4 py-5 d-flex align-items-center justify-content-end">
                <div class="img-container">
                    <!-- img da sostituire con i div colorati diversamente quando si va in hover sulle card -->
                    <img src="../graphics/rocket.webp" alt="robot-developer" class="rocket" />
                </div>
            </div>

            <div class="col-md-8 d-flex align-items-center py-3">
                
                <div class="col-md-12 content">
                    <div class="mb-5">
                        <h3 class="mb-3">In continuous learning and development of new technologies</h3>
                        <p>I have always strived to give my best in every field I embrace, aiming to achieve a high level of professional competence</p>
                    </div>

                    <!--card-->
                    <div class="col-md-12 py-1 my-3 custom-card d-flex justify-content-center align-items-center px-3" v-for="(course,index) in courses" :key="index">

                        <div class="col-3 text-center py-2">
                            <span>{{course.name}}</span>
                        </div>
                        <div class="col-2 text-center py-2">
                            <span>{{course.year}}</span>
                        </div>
                        <div class="col-7 text-center py-2">
                            <span>{{ course.certificate }}</span>
                        </div>

                    </div>

                    <div class="col-12 mt-5 d-flex justify-content-end">
                        <button class="button py-2 px-4">
                            linkedin
                        </button>
                    </div>

                </div>

            </div>

        </div>
    </div>
</template>


<style lang="scss" scoped>
.img-container {
    position: relative;
    width: 500px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    .rocket {
        display: block;
        width: 100%;
        height: auto;
        object-fit: cover;
    }
}

.custom-card {
  display: flex; /* Imposta Flexbox */
  justify-content: center; /* Allinea orizzontalmente i figli */
  align-items: center; /* Allinea verticalmente al centro */
  border: 1px solid #151D4C;
  border-radius: 1.5rem;
  transition: all 0.3s ease; /* Animazione fluida per l'hover */
  background-color: transparent; /* Sfondo di default */
}

.custom-card span {
  color: #151D4C; /* Colore del testo di default */
  font-weight: normal; /* Peso del testo di default */
  transition: color 0.3s ease, font-weight 0.3s ease; /* Transizione su colore e peso */
}

.custom-card:hover {
  border: 0px; /* Rimuove il bordo */
  background: linear-gradient(45deg, #5653FF, #A2A89F, #F0FF3E); /* Gradiente sui tre colori */
  background-size: 200% 200%; /* Per creare un effetto più dinamico */
  animation: gradient-animation 4s ease infinite; /* Animazione del gradiente */
  transform: scale(1.05); /* Ingrandisce leggermente la card (5% più grande) */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.custom-card:hover span {
  color: #FFFFFF; /* Colore del testo al passaggio del mouse */
  font-weight: bold; /* Grassetto al passaggio del mouse */
}

/* Animazione del gradiente */
@keyframes gradient-animation {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.button{
    border: 1px solid #151D4C;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    color: #151D4C;
    background-color: white;
    transition: 0.4s ;
}
// forse da rimuovere
.button:hover{
    border: 1px solid #151d4c00 ;
    background-color: #151D4C;
    color: white;
}
</style>

