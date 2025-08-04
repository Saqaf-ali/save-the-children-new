<script>
import HeaderApp from '@/components/HeaderApp.vue';

export default {
  data() {
    return { pages: JSON.parse(localStorage.getItem("pages")) };
  },
  components: {
    HeaderApp,
  },
  computed:{
  deletePage(page){ 
    this.pages.splice(this.pages.indexOf(page), 1);
    localStorage.setItem("pages", JSON.stringify(this.pages));
  }
  },
};
</script>

<template>
  <HeaderApp/>
  <div class="overflow-x-auto">
    <table class="table table-zebra">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Source</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="page in pages" :key="page.id">
          <th>{{ page.id }}</th>
          <th>{{ page.name }}</th> 
          <th>{{ page.link }}</th>
          <th class="flex justify-start gap-4 items-center   ">
            <!-- fountwosam icon -->
            <!-- delete icon -->

            <i class="fa-solid fa-trash" style="color: #ff0000" :idPage="page.id" @click="deletePage(page)"></i>
            <!-- edit icon -->
            <i class="fa-solid fa-pen-to-square" style="color: #000000"></i>
            <!-- add icon -->
            <i class="fa-solid fa-plus" style="color: #000000"></i>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
