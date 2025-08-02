<script>
export default {
  props: ["pageName", "link"],
};
</script>

<template>
  <a
    class="hover:underline decoration-fuchsia-300 duration-150 visited:underline"
    :href="link"
    >{{ pageName }}</a
  >
</template>
