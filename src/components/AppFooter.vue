<script>
export default {
  name: "AppFooter",
  data(){
    return{
        links:[
            'certificates',
            'projects',
            'contacts'
        ]
    }
  }
};
</script>

<template>
  <footer class="py-4">
    <div class="container">
      <div class="row text-white">
        <!-- Frase di chiusura -->
        <div class="col-md-12 text-start py-5">
          <h4 class="mb-4">Thank you for visiting my web-site. <br> Let's connect!</h4>
          <p class="thin">Every great project starts with a conversation. If you have an idea or need help with your next venture, <br> let's talk and make it happen.</p>
        </div>

        <!-- Link: Certificates, Projects, Contacts -->
        <div class="col-md-3 mb-3">
          <ul class="list-unstyled" v-for="(link, index) in links" :key="index">
            <li><a href="#certificates" class="text-decoration-none text-capitalize">{{link}}</a></li>
          </ul>
        </div>

        <!-- Colonna vuota -->
        <div class="col-md-3 mb-3"></div>

        <!-- Mail, telefono, GitHub e LinkedIn -->
        <div class="col-md-3 mb-5 text-md-start">
          <!-- Mail -->
          <p class="mb-3">
            <font-awesome-icon :icon="['fas', 'envelope']" class="mx-2" style="color: white;" />
            <a href="mailto:livington.merello@gmail.com" class="text-decoration-none text-white">livington.merello@gmail.com</a>
          </p>

          <!-- Telefono -->
          <p class="mb-3">
            <font-awesome-icon :icon="['fas', 'phone']" class="mx-2" style="color: white;" />
            +39 346 3146 831
          </p>

          <!-- GitHub e LinkedIn -->

          <div class="">
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

        <div class="col-md-3 d-flex justify-content-center mb-3">
            <div class="img-container">
                <img src="../graphics/astronaut.webp" alt="robot-developer" class="robot" />
            </div>
        </div>

      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: #303030;

}

p {
    margin: 0;
    font-size: 14px;
  }

a {
    color: #ffffff;
    font-size: 14px;
}
a:hover {
    font-weight:700;
}

li{
    font-size: 14px;
    color: #ffffffc3;
}

.social-icon {
    width: 30px;
    margin-right: 20px;
}

.img-container {
    position: relative;
    width: 200px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    .robot {
        display: block;
        width: 100%;
        height: auto;
        object-fit: cover;
        z-index: 2;
        animation: float 3s ease-in-out infinite; // Animazione infinita
    }

    .planet {
        position: absolute;
        width: 100px;
        height: auto;
        left: 0px;
        bottom: 0px;
    }
}
</style>
