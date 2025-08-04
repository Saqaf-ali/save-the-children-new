<script>
export default {
  data() {
   return {
    isVisible: true,
   }
  },
 
    props: ["success"],
  };
</script>

<template>
  <div role="alert" class="alert alert-success relative" v-if="success && isVisible">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 shrink-0 stroke-current"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    
    <!-- success message -->
    <span>{{ success }}</span>
    <!-- close button --> 
       <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" @click="isVisible = false ">✕</button>
  

  </div>
</template>
