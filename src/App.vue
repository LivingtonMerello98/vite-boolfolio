<script>

import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios';
import { store } from './store';

export default {
  name: 'vite-boolfolio',
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
      this.store.results = response.data.results;
      console.log('Projects:', this.store.results);
    });
  }
}

</script>

<template>
  <AppHeader />
  <router-view></router-view>
  <AppFooter />
</template>

<style scoped lang="scss"></style>
