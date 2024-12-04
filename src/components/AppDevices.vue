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
                <h3 class=" mb-3 z-index" >UX and Responsive Design</h3>
                <p class="">The projects also reflect a commitment to put the user at the center.</p>
            </div>
            <div class="col-12 d-flex justify-content-center">
                <div class="img-container">
                    <img src="../graphics/deliveboo.webp" class="laptop-tablet-smartphone">
                    <img src="../graphics/tablet.webp" class="tablet">
                    <img src="../graphics/mobile.webp" class="mobile">
                </div>
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