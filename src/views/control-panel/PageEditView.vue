<script>
import HeaderApp from '@/components/HeaderApp.vue';
import EditRout from '@/components/icons/EditRout.vue';
import AlertSuccess from '@/components/notifications/AlertSuccess.vue';

export default {
  props: ["id"],
  data() {
    return {
      pages: JSON.parse(localStorage.getItem("pages")),
      pageContent: null,
      success: null,
    };
  },
  components: {
    HeaderApp,
    AlertSuccess,
    EditRout,
  },
  computed: {
    getPage() {
      return this.pages.find(
        (page) => page.id == this.id
      ); /* find function is search the item in array*/
    },
  },

  methods: {
    loadPageContent() {
      if (this.getPage && this.getPage.primaryName) {
        this.pageContent = JSON.parse(
          localStorage.getItem(this.getPage.primaryName)
        );
      }
    },
    // ----------
    deletePage(item) {
      let deletedItem = this.pageContent.splice(
        this.pageContent.indexOf(item),
        1
      );
      localStorage.setItem(
        this.getPage.primaryName,
        JSON.stringify(this.pageContent)
      );
      this.success = "successfully deleted";
      console.log("successfully deleted");

      setTimeout(() => {
        this.success = null;
      }, 3000);
    },
  },
  created() {
    this.loadPageContent();
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

  <div class="overflow-x-auto" >
    <table class="table table-zebra">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
    
          <th>Img</th>
          <th>Alt</th>
          <th>figcaption</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in pageContent.heroImgs" :key="item.id">
          <th>{{ item.id }}</th>
          <th><div class="avatar">
  <div class="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2"> 
    <img :src="item.src"  alt="hero image" />
  </div>
</div></th>
          <th>{{ item.alt }}</th>
          <th>{{ item.figcaption }}</th>
          <th class="flex justify-start gap-4 items-center">
            <!-- delete icon -->

            <i
              title="Deleted"
              class="fa-solid fa-trash text-red-400 cursor-pointer"
              :idPage="item.id"
              @click="deletePage(item)"
            ></i>
            <!-- edit icon -->

            <EditRout :path="'/pageEdit'" :id="item.id" />

            <!-- add icon -->
            <i
              title="Add"
              class="fa-solid fa-plus text-gray-500 cursor-pointer"
            ></i>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
