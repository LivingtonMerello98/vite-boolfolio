import { reactive } from 'vue';

export const store = reactive({
    current_page: 1,
    results: [],
    //dato cambiato realizzare check
    url: 'http://127.0.0.1:8000/',
    endPoint: 'api/projects'
})
