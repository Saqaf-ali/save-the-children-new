<script>
import BtnSecondary from "@/components/BtnSecondary.vue";

import HeaderApp from "@/components/HeaderApp.vue";
import HomeHero from "@/components/homeHero.vue";
import ParagraphPrimary from "@/components/ParagraphPrimary.vue";
import PrimaryImage from "@/components/PrimaryImage.vue";

import SectionTitle from "@/components/SectionTitle.vue";

export default {
  data() {
    return {
      aboutPage: JSON.parse(localStorage.getItem("aboutPage")),
    };
  },
  components: {
    HeaderApp,
    HomeHero,
    BtnSecondary,
    SectionTitle,
    ParagraphPrimary,
    PrimaryImage,
  },
};
</script>

<template>
  <headerApp />
  <HomeHero />

</template>