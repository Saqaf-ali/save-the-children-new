<script>
import BtnSecondary from "./BtnSecondary.vue";
import ParagraphPrimary from "./ParagraphPrimary.vue";
import PrimaryImage from "./PrimaryImage.vue";
import SectionTitle from "./SectionTitle.vue";

export default {
  data() {
    return {
      aboutPage: JSON.parse(localStorage.getItem("aboutPage")),
    };
  },
  props: [],
  components: {
    BtnSecondary,
    ParagraphPrimary,
    PrimaryImage,
    SectionTitle,
  },
};
</script>

<template>
  <!-- Start about section -->
  <section class="py-12 md:py-20 dark:bg-gray-700">
    <div class=" mx-auto px-4">
      <!-- title -->
      <SectionTitle
        :content="aboutPage.title"
        :textSize="'text-3xl md:text-4xl'"
        :titleType="'h1'"
      />

      <article class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-700">
        <!-- image -->
        <PrimaryImage widthAndHeight:="'w-full h-auto'"
        :src="aboutPage.imgSection[0].src " :alt="aboutPage.imgSection[0].src
        "/>
        <div class="textContent md:text-left">
          <ParagraphPrimary :paragraph="aboutPage.description" />
          <BtnSecondary :buttonName="'More'" :link="'/'" />
        </div>
      </article>
    </div>
  </section>
  <!-- End about section -->
</template>
