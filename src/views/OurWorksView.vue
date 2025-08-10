<template>
  <HeaderApp />
  <div class="relative h-screen">
    <video
      :src="currentVideo"
      autoplay
      loop
      muted
      class="absolute top-0 left-0 w-full h-full object-cover"
    ></video>
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div
      class="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4"
    >
      <h1 class="text-4xl md:text-6xl font-bold mb-4">
        Help Us Save the Children
      </h1>
      <p class="text-lg md:text-2xl">
        Your support can make a world of difference.
      </p>
    </div>
  </div>
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
          <BtnSecondary :buttonName="'More'" :link="'/about'" />
        </div>
        <div class="textContent md:text-left">
          <ParagraphPrimary :paragraph="aboutPage.description" />
          <BtnSecondary :buttonName="'More'" :link="'/about'" />
        </div>
        <!-- image -->
        <PrimaryImage widthAndHeight:="'w-full h-full'"
        :src="aboutPage.imgSection[1].src " :alt="aboutPage.imgSection[1].src
        "/>
      </article>
    </div>
  </section>
  <!-- End about section -->

  <!-- Start about section -->
  <section class="py-12 md:py-20">
    <div class="container mx-auto px-4">
      <!-- title -->
      <SectionTitle
        :content="'Our Mission'"
        :textSize="'text-2xl md:text-3xl'"
        :titleType="'h2'"
      />

      <article class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <!-- image -->

        <PrimaryImage class="md:col-span-2" widthAndHeight:="'w-full h-full'"
        :src="aboutPage.imgsSection2[4].src "
        :alt="aboutPage.imgsSection2[4].alt " />
        <div class="textContent md:text-left">
          <ParagraphPrimary :paragraph="aboutPage.description" />
          <BtnSecondary :buttonName="'More'" :link="'/about'" />
        </div>
      </article>
    </div>
  </section>
  <!-- End about section -->
   <FooterApp/>
</template>

<script>
import BtnSecondary from "@/components/BtnSecondary.vue";
import FooterApp from "@/components/FooterApp.vue";
import HeaderApp from "@/components/HeaderApp.vue";
import ParagraphPrimary from "@/components/ParagraphPrimary.vue";
import PrimaryImage from "@/components/PrimaryImage.vue";
import SectionTitle from "@/components/SectionTitle.vue";

export default {
  data() {
    return {
      currentVideo: "",
      videos: ["/video1.mp4", "/video2.mp4", "/video3.mp4"],
      aboutPage: JSON.parse(localStorage.getItem("aboutPage")),
    };
  },
  mounted() {
    // Set initial video when component is mounted
    this.currentVideo =
      this.videos[Math.floor(Math.random() * this.videos.length)];
  },

  components: {
    HeaderApp,
    BtnSecondary,
    SectionTitle,
    ParagraphPrimary,
    PrimaryImage,
    FooterApp
  },
};
</script>
