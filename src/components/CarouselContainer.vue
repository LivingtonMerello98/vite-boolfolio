<script>
//contenitore padre carosello
import CarouselComponent from './Carousel.vue';

export default {
    name: 'CarouselContainerComponent',

    data() {
        return {
            images: [
                '/languages/html.svg',
                '/languages/css.svg',
                '/languages/javascript.svg',
                '/languages/sass.svg',
                '/languages/tailwind.svg',
                '/languages/bootstrap.svg',
                '/languages/vue.svg',
                '/languages/react.svg',
                '/languages/figma.svg',
                '/languages/webflow.svg',
            ],
        };
    },
    components: {
        CarouselComponent
    }
}
</script>

<template>
    <CarouselComponent :images="images" class=" py-4 mt-5"/>
</template>
<style lang="scss" scoped>
</style>
