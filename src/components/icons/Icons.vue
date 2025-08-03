<script>
import { RouterLink } from "vue-router";

export default {
  props: ["iconTag", "link"],
};
</script>
<template>
  <RouterLink :to="link" class="text-white hover:text-gray-400"
    ><i :class="iconTag"></i
  ></RouterLink>
</template>
