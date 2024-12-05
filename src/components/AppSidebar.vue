<script>
import { store } from '../store';

export default{
    data(){
        return{
            name: 'AppSiderbar',
            anchors: store.anchors
        }
    },
    methods:{
        toggleMenu(){
        store.toggleMenu()
        }
    }
}
</script>

<template>
    <div class="sidebar d-flex
    flex-column">
        <div>
            <font-awesome-icon @click="toggleMenu()" :icon="['fas', 'close']" style="color: white;" class="px-3 py-3" />
        </div>
        
        <div class="col-md-12 px-3">

            <ul class="py-3">
                <li v-for="(anchor, index) in anchors" :key="index" class="mb-3" @click="toggleMenu()">
                    <a :href="anchor.link" class="link px-2" style="display: inline-block;">
                        {{ anchor.name }}
                    </a>
                </li>
            </ul>

            <hr class="text-white">

            <a href="https://www.linkedin.com/in/livington-merello-765b1a215/" target="_blank">
                <img src="/socials/linkedin.svg" class="social-icon" alt="linkedin">
            </a>
            <a href="https://github.com/LivingtonMerello98" target="_blank">
                <img src="/socials/github.svg" class="social-icon" alt="github">
            </a>
            <a href="https://www.behance.net/merellodesigns" target="_blank">
                <img src="/socials/behance.svg" class="social-icon" alt="github">
            </a>

        </div>


    </div>
</template>

<style lang="scss" scoped>
.sidebar{
    background-color: #12183E;
    position: fixed;
    height: 100vh;
    width: 300px;
    right: 0;
    z-index: 999;
}

ul{
    li{
        a{
            color: white;
        }
    }
}

.social-icon {
    width: 30px;
    margin-right: 20px;
}


@media only screen and (max-width: 768px) {
  .laptop-tablet-smartphone {
    display: none;
  }
  .tablet {
    display: block;
  }
  .mobile {
    display: none;
  }
}

@media only screen and (max-width: 375px) {
  .laptop-tablet-smartphone {
    display: none;
  }
  .tablet {
    display: none;
  }
  .mobile {
    display: block;
  }
}

</style>