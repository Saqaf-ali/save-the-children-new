<template>
  <form class="mt-6">
    <div class="mb-4">
      <label
        for="Image"
        class="block text-sm font-semibold text-gray-800 dark:text-gray-200"
        >Image</label
      >
      <input
        type="file"
        class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
      />
    </div>
    <div class="mb-2">
      <label
        for="Alt"
        class="block text-sm font-semibold text-gray-800 dark:text-gray-200"
        >Alt</label
      >
      <input
        type="text"
        class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
      />
    </div>
    <div class="mb-2">
      <label
        for="Figcaption"
        class="block text-sm font-semibold text-gray-800 dark:text-gray-200"
        >Figcaption</label
      >
<textarea placeholder="Enter  figcaption image here...
" name="message" rows="4" cols="50" class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600">
</textarea>


      
 
    </div>

    <div class="mt-6">
      <button
        class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
      >
        Login
      </button>
    </div>
  </form>
</template>

<script>
export default {};
</script>
