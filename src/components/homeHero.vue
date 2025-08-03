<script>
import HeroSection from "./HeroSection.vue";


export default {
  data() {
    return {
      homePage: JSON.parse(localStorage.getItem("homePage")),
    };
  },

  components: {
    HeroSection,
  },
};
</script>
<template>
    <section class="">
  <HeroSection :heroTitle="homePage.heroTitle" :heroImgs="homePage.heroImgs" />
  </section>
</template>
