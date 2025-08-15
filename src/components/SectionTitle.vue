<script>
export default{

  props: ['titleType','textSize','content'],
};
</script>

<template>
 <!-- component the tag name is dynamic -->
  <component :is="titleType"
  :class="textSize +' w-fit mx-auto  font-bold text-center mb-8 border-b-2 border-red-300'"
  >
    {{ content }}
  </component>
</template>

<!-- text-3xl md:text-4xl -->