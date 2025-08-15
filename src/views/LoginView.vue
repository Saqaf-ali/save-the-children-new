<script>
import HeaderApp from "@/components/HeaderApp.vue";
import InputForm from "@/components/inputForm.vue";
import { RouterLink } from "vue-router";
import SectionTitle from "@/components/SectionTitle.vue";

export default {
  components: {
    HeaderApp,
    SectionTitle,
    InputForm,
    RouterLink,
  },
  data() {
    return {
      title: "Login",
      loginInputs: JSON.parse(localStorage.getItem("forms")),
    };
  },
};
</script>

<template>
  <HeaderApp />
  <section class="relative flex flex-col items-center justify-center h-screen w-full">
    <!-- title -->
    <SectionTitle
      :content="title"
      :textSize="'text-3xl font-semibold'"
      :titleType="'h1'"
    />
    <form class=" bg-black/60 w-full max-w-sm rounded-md shadow-md p-6">
      <div class="mb-4">
        <!-- inputs -->

        <InputForm
          v-for="input in loginInputs['login']"
          :key="input.name"
          :label="input.label"
          :name="input.name"
          :type="input.type"
          :placeholder="input.placeholder"
          :required="input.required"
        />

        <!-- <h1>{{ loginInputs.login.name }}</h1> -->
 </div>
         <router-link
        to="/forgetPassword"
        class="text-xs text-red-600 hover:underline dark:text-red-400"
        >Forget Password?</router-link
      >
      <div class="mt-6">
        <button
          class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
        >
          Login
        </button>
      </div>
         <p
      class="mt-8 text-xs font-light text-center text-gray-700 dark:text-gray-400"
    >
      Don't have an account?
      <router-link
        to="/register"
        class="font-medium text-red-600 hover:underline dark:text-red-400"
        >Sign up</router-link
      >
      
    </p>
          
  
    </form>
 
  </section>

</template>
