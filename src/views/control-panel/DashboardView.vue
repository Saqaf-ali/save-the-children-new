<script>
import HeaderApp from "@/components/HeaderApp.vue";
import EditRout from "@/components/icons/EditRout.vue";
import AlertSuccess from "@/components/notifications/AlertSuccess.vue";
import SectionTitle from "@/components/SectionTitle.vue";

export default {
  data() {
    return {
      pages: JSON.parse(localStorage.getItem("pages")),
      deletedPages: JSON.parse(localStorage.getItem("deletedPages")),

      success: null,
    };
  },
  components: {
    HeaderApp,
    AlertSuccess,
    EditRout,
    SectionTitle
  },
  methods: {
    deletePage(page) {
      // console.log(page);
      
      let deletedItem = this.pages.splice(this.pages.indexOf(page), 1);
      localStorage.setItem("pages", JSON.stringify(this.pages));
      this.deletedPages.push(deletedItem);
      // trash
      localStorage.setItem("deletedPages", JSON.stringify(this.deletedPages));
      this.success = "successfully deleted";
      console.log("successfully deleted");

      setTimeout(() => {
        this.success = null;
      }, 3000);
    },
  },
};
</script>

<template>
  <AlertSuccess :success="success" />
  <HeaderApp />

  <!-- trash icon -->
  <!-- <div class="flex justify-end px-10">
    <RouterLink to="/control-panel/trash">
      <i class="fa-solid fa-trash text-red-400 text-2xl"></i>
    </RouterLink>
  </div> -->

      <!-- title -->

  <div class=" container mx-auto px-4 overflow-x-auto bg-black/60 my-8 " v-if="pages.length > 0">
          <SectionTitle
        :content="'Pages'"
        :textSize="'text-3xl md:text-4xl'"
        :titleType="'h1'"
      />
    <table class="table table-zebra my-8">
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
          <th class="flex justify-start gap-4 items-center">
            <!-- delete icon -->

            <i
              title="Deleted"
              class="fa-solid fa-trash text-red-400 cursor-pointer"
              :idPage="page.id"
              @click="deletePage(page)"
            ></i>
            <!-- edit icon -->

      <EditRout :path="'/pageEdit'" :id="page.id" />     

         


            <!-- add icon -->
            <i title="Add" class="fa-solid fa-plus text-gray-500  cursor-pointer"></i>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
