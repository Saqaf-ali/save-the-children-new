<script>
export default{

  props: ['label','type','placeholder','name'],
};
</script>

<template>
  <div class="mb-4">
    <label
      :for="name"
      class="block text-sm font-semibold text-gray-800 dark:text-gray-200"
      >{{ label}}</label
    >
    <input
      :type="type"
      :placeholder="placeholder"
      :name="name"
      :id="name"
      class="block w-full  px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
    />
  </div>
</template>
