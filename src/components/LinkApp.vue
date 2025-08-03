<script>
export default {
  props: ["pageName", "link"],
};
</script>

<template>
  <RouterLink
    :to="link"
    class="hover:underline decoration-fuchsia-300 duration-150 visited:underline"
 
    > {{ pageName }}
  </RouterLink>
</template>
