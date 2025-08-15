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
  
 <div class="hero bg-[var(--bg-color)] text-black border-b-2 border-brand-red  shadow-2xl ">

    <div class=" w-full mx-auto p-4">
              <h1 class="heroTitle text-2xl  md:text-3xl font-bold my-4 text-center"> {{ heroTitle }}</h1>


    <div class="grid grid-cols sm:grid-cols-2  gap-4 p-4 grid-rows-2">
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
