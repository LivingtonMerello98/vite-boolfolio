<script>
import axios from 'axios';
import { store } from './store'

export default {
  name: 'vite-boolfolio',


  data() {
    return {
      store
    }
  },

  created() {
    axios.get(this.store.apiUrl).then(response => {
      console.log('Projects:', response.data);
    });
  }
}

</script>

<template>
  ciao mondo
</template>

<style scoped lang="scss"></style>
