<script>
export default {
  props: ["src", "alt", "figcaption"],
};
</script>

<template>
  <figure class="bg-[#1a332f7a] border-b-2 border-fuchsia-200 rounded-t-3xl text-white shadow-2xs p-1 ">
    <img class="w-full rounded-t-3xl h-48" :src="src" :alt="alt" />
    <figcaption class="p-4">
      {{ figcaption }}
    </figcaption>
  </figure>
</template>
