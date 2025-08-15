<script>
import { RouterView } from 'vue-router';
import DarkModeToggle from './components/DarkModeToggle.vue';

export default {
   components: {
    RouterView,

  },
}
</script>

<template>
 
    <DarkModeToggle class="absolute top-4 right-4" />
    <RouterView />
</template>
