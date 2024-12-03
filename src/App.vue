<script>
// import { store } from './store';
import axios from 'axios';

import AppFooter from './components/AppFooter.vue';

export default {

  components: {
    AppFooter
  },

}

</script>

<template>
  <section>
    <!-- <AppHeader /> -->
    <router-view></router-view>
    <AppFooter />
  </section>
</template>

<style scoped lang="scss"></style>
