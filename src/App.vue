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
