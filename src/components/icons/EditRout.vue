<script>
export default {
  props: ["path", "id"],
};
</script>

<template>
  <RouterLink
      :to="{
      path: path + '/' + id
      
     
    }"
  >
    <i

      title="Edit"
      class="fa-solid fa-pen-to-square text-gray-500 cursor-pointer"
    ></i>
    
  </RouterLink>
</template>
