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

  <!-- Start about section -->
  <section class="py-12 md:py-20">
    <div class="container mx-auto px-4">
      <!-- title -->
      <SectionTitle
        :content="aboutPage.title"
        :textSize="'text-3xl md:text-4xl'"
        :titleType="'h1'"
      />

      <article class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- image -->
        <PrimaryImage widthAndHeight:="'w-full h-full'"
        :src="aboutPage.imgSection[0].src " :alt="aboutPage.imgSection[0].src
        "/>
        <div class="textContent md:text-left">
          <ParagraphPrimary :paragraph="aboutPage.description" />
          <BtnSecondary :buttonName="'More'"   :link="'/about'" />
        </div>
          <div class="textContent md:text-left">
          <ParagraphPrimary :paragraph="aboutPage.description" />
          <BtnSecondary :buttonName="'More'"  :link="'/about'"  />
        </div>
         <!-- image -->
        <PrimaryImage widthAndHeight:="'w-full h-full'"
        :src="aboutPage.imgSection[1].src " :alt="aboutPage.imgSection[1].src
        "/>
      </article>
    </div>
  </section>
  <!-- End about section -->
</template>
