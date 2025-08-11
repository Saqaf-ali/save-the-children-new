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
    DarkModeToggle,
  },
};
</script>

<template>
  <header
    class="header bg-black/60 text-white border-b border-fuchsia-200 shadow-lg  "
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
 

<!-- </div> -->

</div>
  </header>
</template>
