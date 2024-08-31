<script>
import { store } from './store';
import axios from 'axios';


import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {

  components: {
    AppHeader,
    AppFooter
  },

  data() {
    return {
      store
    }
  },

  created() {
    axios.get(this.store.apiUrl).then(response => {
      console.log('projects:', response.data);
      this.store.results = response.data.results.data;
      console.log('la chiamata è stata effettuata con successo');
    }).catch(error => {
      console.error('Errore nella chiamata:', error);
    });
  }
}

</script>

<template>
  <section class="bg-dark">
    <AppHeader />
    <router-view></router-view>
    <AppFooter />
  </section>
</template>

<style scoped lang="scss"></style>
