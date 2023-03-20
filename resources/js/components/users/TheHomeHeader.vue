<template>
    <!-- Header Start -->
  <div class="container-fluid header bg-white p-0">
      <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
          <intro></intro>
          <div class="col-md-6 animated fadeIn">
            <owl-carousel></owl-carousel>
          </div>
      </div>
  </div>
  <!-- Header End -->
</template>
<script>
import OwlCarousel from './OwlCarousel.vue';
import Intro from './Intro.vue';
export default {
  name: "TheHomeHeader",
  components: {
      OwlCarousel,
      Intro,
  },
  computed: {
    getNumber() {
      return Math.floor(Math.random() * 100);
    }
  }
}
</script>