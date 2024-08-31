import { reactive } from 'vue';

export const store = reactive({
    current_page: 1,
    results: [],
    apiUrl: 'http://127.0.0.1:8000/api/projects',
})
