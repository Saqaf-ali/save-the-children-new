<script>
export default {
  props: ["iconTag", "link"],
};
</script>
<template>
  <a :href="link" class="text-white hover:text-gray-400"
      ><i :class="iconTag"></i
    ></a>
    
</template>
