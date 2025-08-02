<script>
export default {
  props: ["src", "alt", "figcaption"],
};
</script>

<template>
  <figure>
    <img class="w-full rounded-t-3xl h-48" :src="src" :alt="alt" />
    <figcaption class="p-4">
      {{ figcaption }}
    </figcaption>
  </figure>
</template>
