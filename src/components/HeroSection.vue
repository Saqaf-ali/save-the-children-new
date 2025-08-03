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
    <div class=" rounded-t-3xl p-4">
    <h1 class="heroTitle text-3xl  md:text-4xl font-bold my-4"> {{ heroTitle }}</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-t-3xl bg-black/60 border-b-2 border-fuchsia-200">
      <figure-primary
        v-for="img in heroImgs"
        :src="img.src"
        :alt="img.alt"
        :figcaption="img.figcaption"
        :key="img.id"
      />
    </div>
  </div>
  </div>
  <!-- End hero -->
</template>
