<script>
import { store } from './store';
import axios from 'axios';


import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  props: [

  ],
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
      this.store.results = response.data.results;
      console.log('la chiamata è stata efettuata con successo')
    })
  }
}

</script>

<template>
  <AppHeader />
  <router-view></router-view>
  <AppFooter />
</template>

<style scoped lang="scss"></style>
