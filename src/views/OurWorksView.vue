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
 
  <!-- End about section -->

  <!-- Start about section -->
  <section class="py-12 md:py-20">
    <div class=" mx-auto px-4">
      <!-- title -->
      <SectionTitle
        :content="'Our Mission'"
        :textSize="'text-2xl md:text-3xl'"
        :titleType="'h2'"
      />

      <article class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
        <!-- image -->
<div class="flex justify-center gap-2 items-center">
        <PrimaryImage class="" widthAndHeight=" w-1/2"
        :src="aboutPage.imgsSection2[4].src "
        :alt="aboutPage.imgsSection2[4].alt " />
        <div class="textContent md:text-left">
          <ParagraphPrimary :paragraph="aboutPage.description" />
          <BtnSecondary :buttonName="'More'" :link="'/about'" />
        </div>
      </div>
   
        <!-- image -->
<div class="flex justify-center gap-2 items-center">
        <PrimaryImage class="" widthAndHeight=" w-1/2"
        :src="aboutPage.imgsSection2[4].src "
        :alt="aboutPage.imgsSection2[4].alt " />
        <div class="textContent md:text-left">
          <ParagraphPrimary :paragraph="aboutPage.description" />
          <BtnSecondary :buttonName="'More'" :link="'/about'" />
        </div>
      </div>
        <!-- image -->
<div class="flex justify-center gap-2 items-center">
        <PrimaryImage class="" widthAndHeight=" w-1/2"
        :src="aboutPage.imgsSection2[4].src "
        :alt="aboutPage.imgsSection2[4].alt " />
        <div class="textContent md:text-left">
          <ParagraphPrimary :paragraph="aboutPage.description" />
          <BtnSecondary :buttonName="'More'" :link="'/about'" />
        </div>
      </div>
        <!-- image -->
<div class="flex justify-center gap-2 items-center">
        <PrimaryImage class="" widthAndHeight=" w-1/2"
        :src="aboutPage.imgsSection2[4].src "
        :alt="aboutPage.imgsSection2[4].alt " />
        <div class="textContent md:text-left">
          <ParagraphPrimary :paragraph="aboutPage.description" />
          <BtnSecondary :buttonName="'More'" :link="'/about'" />
        </div>
      </div>
      </article>
    </div>
  </section>
  <!-- End about section -->
   <!-- Start Our Partners Section -->
  <section class="py-12 md:py-20">
    <div class="w-full mx-auto px-4">
      <SectionTitle
        :content="'Our Partners'"
        :textSize="'text-2xl md:text-3xl'"
        :titleType="'h2'"
      />
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
        <div v-for="partner in partners" :key="partner.name" class="flex justify-center">
          <img :src="partner.logo" :alt="partner.name" class="h-16" />
        </div>
      </div>
    </div>
  </section>
  <!-- End Our Partners Section -->
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
      aboutPage: JSON.parse(localStorage.getItem("aboutPage")) || {
        title: "",
        description: "",
        imgSection: [
          {
            src: "",
            alt: "",
          },
          {
            src: "",
            alt: "",
          },
        ],
        imgsSection2: [
          {
            src: "",
            alt: "",
          },
          {
            src: "",
            alt: "",
          },
          {
            src: "",
            alt: "",
          },
          {
            src: "",
            alt: "",
          },
          {
            src: "",
            alt: "",
          },
        ],
      },
      partners: [
        {
          name: "Red Cross",
          logo: "https://tse2.mm.bing.net/th/id/OIP.amI6poGLXySW2td2qxc3owHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        },
        {
          name: "UNICEF",
          logo: "https://www.clipartmax.com/png/middle/480-4805590_humanitarian-aid-international-humanitarian-aid-organization.png",
        },
        {
          name: "Doctors Without Borders",
          logo: "https://th.bing.com/th/id/OIP.HNL-cEsZoFh4hiPzCbw8WAHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        },
        {
          name: "UNHCR",
          logo: "https://th.bing.com/th/id/R.3ceae48531b092a6b584b84ec31f7eb1?rik=9NxkTP0FriAUuw&pid=ImgRaw&r=0",
        },
        {
          name: "Word",
          logo: "https://th.bing.com/th/id/OIP.d-JgpXNgafgdhgFVNkL48AHaHu?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        },
        {
          name: "UNHCR",
          logo: "https://th.bing.com/th/id/R.3ceae48531b092a6b584b84ec31f7eb1?rik=9NxkTP0FriAUuw&pid=ImgRaw&r=0",
        },
        {
          name: "UNHCR",
          logo: "https://th.bing.com/th/id/R.3ceae48531b092a6b584b84ec31f7eb1?rik=9NxkTP0FriAUuw&pid=ImgRaw&r=0",
        },
          {
          name: "UNICEF",
          logo: "https://www.clipartmax.com/png/middle/480-4805590_humanitarian-aid-international-humanitarian-aid-organization.png",
        },
        {
          name: "Doctors Without Borders",
          logo: "https://th.bing.com/th/id/OIP.HNL-cEsZoFh4hiPzCbw8WAHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        },
          {
          name: "UNICEF",
          logo: "https://www.clipartmax.com/png/middle/480-4805590_humanitarian-aid-international-humanitarian-aid-organization.png",
        },
        {
          name: "Doctors Without Borders",
          logo: "https://th.bing.com/th/id/OIP.HNL-cEsZoFh4hiPzCbw8WAHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        },  {
          name: "UNICEF",
          logo: "https://www.clipartmax.com/png/middle/480-4805590_humanitarian-aid-international-humanitarian-aid-organization.png",
        },
        {
          name: "Doctors Without Borders",
          logo: "https://th.bing.com/th/id/OIP.HNL-cEsZoFh4hiPzCbw8WAHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        },
      ],
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
