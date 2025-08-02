<script>
import Icons from "./Icons.vue";

export default {
  components: {
    Icons,
  },
  props: ["iconTag", "link"],
  data() {
    return { iconsHeader: JSON.parse(localStorage.getItem("iconsHeader")) };
  },
};
</script>
<template>
  <div
    class="icons flex w-full justify-between lg:w-auto lg:justify-normal lg:space-x-4"
  >
    <Icons
      v-for="icon in iconsHeader"
      :iconTag="icon.iconTag"
      :link="icon.link"
      :key="icon.name"
    />
  </div>
</template>
