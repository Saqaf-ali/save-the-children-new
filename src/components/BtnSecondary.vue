<script>
export default {
  props: ["buttonName", "link"],
};
</script>

<template>
  <RouterLink
    :to="link"
    class="py-1 px-6 my-5 border border-transparent rounded-2xl cursor-pointer bg-black/40 hover:border-cyan-900"
    >{{ buttonName }}</RouterLink
  >
</template>
