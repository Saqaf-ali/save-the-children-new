<script>
import FigurePrimary from "./FigurePrimary.vue";

export default {
  props: ["heroTitle", "heroImgs"],
  components: {
    FigurePrimary,
  },
};
</script>

<template>
  <!-- Start hero -->
  <div class="hero container mx-auto p-4 rounded-2xl leading-8">
    <h1 class="heroTitle text-3xl font-bold my-4"> {{ heroTitle }}</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-t-3xl">
      <figure-primary
        v-for="img in heroImgs"
        :src="img.src"
        :alt="img.alt"
        :figcaption="img.figcaption"
        :key="img.id"
      />
    </div>
  </div>
</template>
