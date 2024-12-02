<script>
export default{
    name: 'AppDevice'
}
</script>

<template>
    <div class="container py-5">
        <div class="row">
            <div class="col-12 text-center py-5 mb-5">
                <h3 class="text-uppercase mb-3">Cosa Faccio...?</h3>
                <p class="">Non tengo solamente a un codice ben strutturato ma a elaborare un esperienza utente il più piacevole <br>
                possibile per l'utente</p>
            </div>
            <div class="col-12 d-flex justify-content-center">
                <div class="img-container">
                    <img src="../graphics/devices.svg" class="devices">
                </div>
            </div>
        </div>
    </div>
</template>

<style  lang="scss" scoped>
.img-container{
    width: 80%;
    height: auto;

    .devices{
        display: block;
        width: 100%;
        height: auto;
        object-fit: cover;
    }
}
</style>