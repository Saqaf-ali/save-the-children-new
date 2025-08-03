<script>
export default {
  props: ["src", "alt", "figcaption"],
};
</script>

<template>
  <figure class="bg-black/60 border-b-2 border-fuchsia-200 rounded-t-3xl text-white ">
    <img class="w-full rounded-t-3xl h-48" :src="src" :alt="alt" />
    <figcaption class="p-4">
      {{ figcaption }}
    </figcaption>
  </figure>
</template>
