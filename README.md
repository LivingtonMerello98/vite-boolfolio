card:



            <!-- Card Vitrea -->
            <div class="col-md-6 py-5 d-flex align-items-center">
                <div class="glass-card p-5">
                    <h5 class="font-weight-bold presentation mb-3">
                        Ciao! Io non sono un robot in realtà...<br />
                        ma questo è il mio Avatar e ti accompagnerà in tutto il sito.
                    </h5>
                    <p class="mb-5">
                        Ma prima mi presento! Sono un jr.Frontend developer,<br />
                        appassionato di programmazione <br> e attento al design UX/UI.
                    </p>
                    <!-- Griglia delle competenze -->
                    <div class="skills-grid mt-4 mb-4">
                        <div v-for="(skill, index) in skills" :key="index" class="skill-card">
                            <span class="skill-name">{{ skill.name }}</span>
                            <div class="progress-bar">
                                <div
                                    class="progress-fill"
                                    :style="{ width: skill.progress + '%' }"
                                ></div>
                            </div>
                        </div>
                    </div>
                 
                </div>
            </div>




            .presentation {
    font-weight: 600;
    line-height: 1.5rem;
}

.glass-card {
    background-image: url('../graphics/hero-background-dsk.png');
    background-size: cover;
    color: white;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 20px;
    max-width: 100%;
    position: relative; // Importante per posizionare il riflesso
    overflow: hidden; // Nasconde gli elementi fuori dai bordi
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    // Effetto riflesso
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -150%; // Partenza fuori dai bordi a sinistra
        width: 100%;
        height: 100%;
        background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 0%, // Trasparente all'inizio
            rgba(255, 255, 255, 0.3) 50%, // Luminoso al centro
            rgba(255, 255, 255, 0) 100% // Trasparente alla fine
        );
        transform: skewX(-30deg); // Inclinazione dell'effetto riflesso
        animation: shine 4s infinite; // Animazione ciclica infinita
    }
}

@keyframes shine {
    0% {
        left: -150%; // Inizia fuori dal bordo sinistro
    }
    50% {
        left: 50%; // Attraversa la card
    }
    100% {
        left: 150%; // Esce dal bordo destro
    }
}

.skills-grid {
    display: grid; 
    grid-template-columns: repeat(2, 1fr); // Due colonne
    gap: 20px; // Spaziatura tra le skill
    margin-top: 20px;

    .skill-card {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

        .skill-name {
            font-size: 1rem;
            font-weight: bold;
            margin-bottom: 8px;
            color: white;
        }

        .progress-bar {
            width: 100%;
            height: 8px;
            background-color: rgba(255, 255, 255, 0.2); // Sfondo barra
            border-radius: 5px;
            overflow: hidden;

            .progress-fill {
                height: 100%;
                background-color: #ffffff; // Colore della barra avanzata
                border-radius: 5px 0 0 5px;
                transition: width 0.5s ease-in-out;
            }
        }
    }
}