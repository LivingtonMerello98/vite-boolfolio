import { reactive } from 'vue';

export const store = reactive({
    results: [],
    //da qui efettuiamo la chiamata
    apiUrl: 'http://127.0.0.1:8000/api/projects'
})


