<script>
import { store } from './store';
import AppFooter from './components/AppFooter.vue';

export default {
  data() {
    return {
      overflowHidden: 'hidden',
    };
  },
  name:'AppVue',
  components: {
    AppFooter
  },
  computed: {
    showMenu() {
      // Accedi alla proprietà `showMenu` dal tuo store
      return store.showMenu;
    }
  },
  watch: {
    showMenu(newValue) {
      if (newValue) {
        // Blocca lo scroll verticale
        document.body.style.overflow = 'hidden';
      } else {
        // Ripristina lo scroll
        document.body.style.overflow = '';
      }
    }
  }
};
</script>


<template>
  <section>
    <router-view></router-view>
    <AppFooter />
  </section>
</template>

