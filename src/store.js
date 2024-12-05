import axios from 'axios';
import { reactive } from 'vue';

export const store = reactive({

    showMenu: false,

    toggleMenu() {
        this.showMenu = !this.showMenu
    }

})







/*
export const store = reactive({
    current_page: 1,
    results: [],
    //dato cambiato realizzare check
    url: 'http://127.0.0.1:8000/',
    endPoint: 'api/projects',

    // chiamata api da store
    getProjects() {
        const apiUrl = `${this.url}${this.endPoint}`;

        axios.get(apiUrl)
            .then(response => {
                console.log('projects:', response.data);
                //chaining operator controlla se esiste la proprietà a cui vogliamo accedere
                this.results = response.data.results?.data || [];
                console.log('La chiamata è avvenuta con successo');
            })
            .catch(error => {
                console.error('Errore durante la chiamata', error);
            });
    },



    //buttons navigazione tra progetti
    nextPage() {
        this.current_page++;  // Incrementa la pagina corrente

        axios.get(`${this.url}${this.endPoint}?page=${this.current_page}`)
            .then(response => {
                this.results = response.data.results?.data || [];
                console.log('la chiamata è avvenuta con successo');
            }).catch(error => {
                console.error('errore durante la chiamata', error);
            });
    },


    prevPage() {
        if (this.current_page > 1) {  // non si può andare in una pagina inferiore a 1
            this.current_page--;

            axios.get(`${this.url}${this.endPoint}?page=${this.current_page}`)
                .then(response => {
                    this.results = response.data.results?.data || [];
                    console.log('la chiamata è avvenuta con successo');
                }).catch(error => {
                    console.error('errore durante la chiamata', error);
                });
        }
    },

    //funzione getter() pe ril recupero dell'immagine che unisce l'url con il nome del campo della cover f
    //fornito dall'api
    getImageUrl(cover) {
        return `${this.url}/${cover}`
    }

})
*/