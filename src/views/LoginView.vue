<script>

</script>

<template>
  <section class="relative flex flex-col items-center justify-center h-screen">
    <div
      class="w-full p-6 bg-white rounded-md shadow-md lg:max-w-lg dark:bg-gray-700"
    >
      <h1
        class="text-3xl font-semibold text-center text-red-700 dark:text-red-400"
      >
        Login
      </h1>
      <form class="mt-6">
        <div class="mb-4">
          <label
            for="email"
            class="block text-sm font-semibold text-gray-800 dark:text-gray-200"
            >Email</label
          >
          <input
            type="email"
            class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
          />
        </div>
        <div class="mb-2">
          <label
            for="password"
            class="block text-sm font-semibold text-gray-800 dark:text-gray-200"
            >Password</label
          >
          <input
            type="password"
            class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
          />
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
      </form>
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
    </div>
  </section>
</template>
