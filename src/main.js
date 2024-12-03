import { createApp } from 'vue';
import './style.scss';

import router from './router';
import * as bootstrap from 'bootstrap';

import App from './App.vue';

// FontAwesome e il componente VueFontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faCode, faPaintBrush, faRocket, faHandshake, faBars } from '@fortawesome/free-solid-svg-icons';

// Aggiunta delle icone alla libreria
library.add(faCode, faPaintBrush, faRocket, faHandshake, faBars);

// Importazione del CSS di FontAwesome
import '@fortawesome/fontawesome-svg-core/styles.css';

// Creazione e montaggio dell'applicazione Vue
const app = createApp(App);

// Registrazione del componente FontAwesomeIcon globalmente
app.component('font-awesome-icon', FontAwesomeIcon);

// Uso del router
app.use(router);

// Montaggio dell'applicazione
app.mount('#app');



