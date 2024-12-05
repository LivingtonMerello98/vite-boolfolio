<script>
import { store } from '../store';

export default{
    data(){
        return{
            name: 'AppSiderbar'
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
            <button class="btn text-white" @click="toggleMenu()">X</button>
        </div>
        
        <div class="col-md-12 px-3">

            <ul class="py-3">
                <li class="mb-3"><a href="/" >Certificates</a></li>
                <li class="mb-3"><a href="/about" >Projects</a></li>
                <li class="mb-3"><a href="/contacts" >Get In Touch</a></li>
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