<script>
export default{
    name: 'AppDevice',
    data(){
        return{
        }
    }
}
</script>

<template>
    <div class="container mb-5">
        <div class="row">
            <div class="col-12 text-center py-5">
              <h3 class="mb-3 z-index" style="font-size: 2rem; font-weight: bold;">UX and Responsive Design</h3>
              <p class="mb-3">
                The projects focus on putting the <strong style="color: #007BFF;">user</strong> first, ensuring seamless, responsive design across <br> all devices for the best user experience.
              </p>

            </div>
            <div class="col-12 d-flex justify-content-center">
                <div class="img-container">
                    <img src="../graphics/deliveboo.webp" class="laptop-tablet-smartphone">
                    <img src="../graphics/tablet.webp" class="tablet">
                    <img src="../graphics/mobile.webp" class="mobile">
                </div>
            </div>
            <div class="col-md-12 py-4 text-center">
              <a href="https://www.behance.net/merellodesigns" target="_blank" class="py-2 px-4 button">View My Designs on Behance</a>
            </div>

        </div>
    </div>
</template>

<style  lang="scss" scoped>
.img-container{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
}

.laptop-tablet-smartphone{
    display: block;
    width: 80%;
    height: auto;
    object-fit: cover;
}

.tablet{
    display: none;
}
.mobile{
    display: none;
}

.button{
    border: 1px solid #151D4C;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    color: #151D4C;
    background-color: white;
    transition: 0.4s ;
}
// forse da rimuovere
.button:hover{
    border: 1px solid #151d4c00 ;
    background-color: #151D4C;
    color: white;
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