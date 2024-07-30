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
      this.store.results = response.data.results;
      console.log('Projects:', this.store.results);
    });
  }
}

</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <h1 class="mb-5">BoolFolio</h1>
        <div class="d-flex justify-content-center flex-wrap">
          <div class="card mx-3" v-for="(result, index) in store.results">
            <img class="card-img-top" :src='result.cover' alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">{{ result.title }}</h5>
              <p class="card-text">{{ result.description }}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
