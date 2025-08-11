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
  
 <div class="hero  bg-black/60 text-white border-b-2 border-brand-red my-20 shadow-2xl ">

    <div class=" container mx-auto p-4">
              <h1 class="heroTitle text-3xl  md:text-4xl font-bold my-4 text-white"> {{ heroTitle }}</h1>


    <div class="grid grid-cols-1 sm:grid-cols-2  gap-4 p-4">
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
