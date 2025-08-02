<script>
import FigurePrimary from './FigurePrimary.vue';

export default{
    data(){
        return {
homePage:JSON.parse(localStorage.getItem('homePage'))
        }

    },

    components:{
        FigurePrimary

    },

  
}


</script>

<template>
  <!-- Start hero -->
  <div class="hero container mx-auto p-4 rounded-2xl leading-8">
    <h1 class="heroTitle font-bold my-4">Yemen Save the Children</h1>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-t-3xl bg-gray-800"
    >
   <figure-primary v-for="img in homePage.heroImgs" :src="img.src" :alt="img.alt" :figcaption="img.figcaption" :key="img.id" />

</div>
  </div>
</template>
