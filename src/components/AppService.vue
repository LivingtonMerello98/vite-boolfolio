<script>

export default {
    data() {
        return {
            name: 'AppService',
            services: [
                {
                    id: 1,
                    icon: 'code',
                    title: 'Sviluppo Web',
                    description: 'Creiamo siti web su misura con le ultime tecnologie e pratiche.'
                },
                {
                    id: 2,
                    icon: 'paint-brush',
                    title: 'Design Grafico',
                    description: 'Progettiamo grafiche accattivanti e professionali per la tua brand identity.'
                },
                {
                    id: 3,
                    icon: 'rocket',
                    title: 'Innovazione',
                    description: 'Offriamo soluzioni innovative per aiutare il tuo business a crescere.'
                },
                {
                    id: 4,
                    icon: 'handshake',
                    title: 'Collaborazione',
                    description: 'Lavoriamo a stretto contatto con te per realizzare i tuoi obiettivi.'
                }
            ]
        }
    }
}


</script>

<template>
    <div class="container py-5">
        <!-- Sezione dei servizi -->
        <div class="row mb-4">
            <div class="col-md-12 text-center py-3">
                <h3 class="fw-bold text-light">Io sono il componente dedicato ai servizi</h3>
                <p class="fw-light text-light">Qui filtreremo delle categorie e le formatteremo in delle card</p>
            </div>
        </div>

        <!-- Box dei servizi -->
        <div class="row text-center mb-3">
            <div class="col-md-6 mb-4" v-for="service in services" :key="service.id">
                <div class="service-box">
                    <font-awesome-icon :icon="service.icon" class="service-icon" />
                    <h5 class="service-title">{{ service.title }}</h5>
                    <p class="service-description">{{ service.description }}</p>
                </div>
            </div>
        </div>
        <div class="col-md-12 text-center">
            <button class="btn text-bg-primary">Go to somewhere</button>
        </div>
    </div>
</template>


<style scoped>
.service-box {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    background-color: #f8f9fa;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    text-align: center;
}

.service-box:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
}

.service-icon {
    font-size: 3rem;
    color: #007bff;
    margin-bottom: 10px;
}

.service-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 10px;
}

.service-description {
    font-size: 1rem;
    color: #6c757d;
}
</style>
