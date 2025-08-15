<script>
import LinkApp from "./LinkApp.vue";
export default {
  data() {
    return { pages: JSON.parse(localStorage.getItem("pages")) };
  },
  components: {
    LinkApp,
  },
};
</script>
<template>
  <nav class="w-full lg:w-auto">
    <ul
      class="flex justify-between items-center lg:justify-normal lg:space-x-4 mb-8 lg:mb-auto text-sm "
    >
      <li v-for="page in pages">
        <LinkApp :pageName="page.name" :key="page.name" :link="page.link" />
      </li>
    </ul>
  </nav>
</template>
