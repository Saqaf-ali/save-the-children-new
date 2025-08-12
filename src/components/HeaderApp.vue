<script>
import IconsHeader from "./icons/IconsHeader.vue";
import LogoBrand from "./LogoBrand.vue";
import NavHeader from "./NavHeader.vue";
import DarkModeToggle from "./DarkModeToggle.vue";

export default {
  components: {
    LogoBrand,
    NavHeader,
    IconsHeader,

  },
};
</script>

<template>
  <header
    class="header light:bg-white border-b border-fuchsia-200 shadow-lg dark:bg-gray-900 dark:border-gray-700 "
  >
    <div
      class="container flex flex-col lg:flex-row lg:justify-between items-center p-4 mx-auto lg:py-8"
    >
<!-- logo brand -->
 <LogoBrand/>
<!-- nav links -->
 <NavHeader/>
<!-- icons -->
<!-- <div class="flex items-center gap-4"> -->
 <IconsHeader/>
 <DarkModeToggle/>

<!-- </div> -->

</div>
  </header>
</template>
