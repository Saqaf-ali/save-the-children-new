<script>
export default{

  props: ['widthAndHeight','src','alt'],
};
</script>

<template>
    <img :class="widthAndHeight + ' rounded-lg shadow-md align-center'"
          :src="src"
          :alt="alt"
        loading="lazy"
        />
</template>