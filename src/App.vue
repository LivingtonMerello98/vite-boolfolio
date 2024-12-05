<script>
import { store } from './store';
import AppFooter from './components/AppFooter.vue';
import AppSplashPage from './components/AppSplashPage.vue'

export default {
  data() {
    return {
      overflowHidden: 'hidden',
      flag: true,
    };
  },
  name:'AppVue',
  components: {
    AppFooter,
    AppSplashPage
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
  },
  mounted(){
    setTimeout(()=>{
      this.flag = false;
    },1000) //1 secondo
  }
};
</script>


<template>
  <section>
    <div v-if="flag" class="overflowHidden">
      <AppSplashPage/>
    </div>
    <router-view></router-view>
    <AppFooter />
  </section>
</template>

<style lang="scss" scoped>
.overflowHidden{
  overflow-y: hidden;
}

</style>

