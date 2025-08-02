<script>
import IconsHeader from "./icons/IconsHeader.vue";
import LogoBrand from "./LogoBrand.vue";
import NavHeader from "./NavHeader.vue";

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
    class="header bg-gray-900 text-white border-b border-fuchsia-200 shadow-lg lg:p-4"
  >
    <div
      class="container flex flex-col lg:flex-row lg:justify-between items-center p-4 mx-auto lg:py-8"
    >
<!-- logo brand -->
 <LogoBrand/>
<!-- nav links -->
 <NavHeader/>
<!-- icons -->
 <IconsHeader/>

</div>
  </header>
</template>
