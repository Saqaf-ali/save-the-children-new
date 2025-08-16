<script>
import HeaderApp from "@/components/HeaderApp.vue";
import EditRout from "@/components/icons/EditRout.vue";
import Model from "@/components/notifications/Model.vue";
import AlertSuccess from "@/components/notifications/AlertSuccess.vue";
import SuccessTimeOut from "@/components/notifications/SuccessTimeOut.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import { ref } from "vue";

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
    SectionTitle,
    SuccessTimeOut,
    Model

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
    // ============
    updateContent(event, item, field) {
      const newValue =
        event.target
          .innerText; /*target is property of event parameter contain of more propers  */
      // console.log(event);  /* innerText and inner html is property of target contain the value of element */
      item[field] = newValue;
      console.log(this.pageContent);
      localStorage.setItem(
        this.getPage.primaryName,
        JSON.stringify(this.pageContent)
      );
      this.success = "successfully updated"; 
      setTimeout(() => {
        this.success = null;
      }, 3000);
      
      
    
    },
    // ----------
    deletePage(item) {
      console.log(item);
      let deletedItem = this.pageContent.heroImgs.splice(
        this.pageContent.heroImgs.indexOf(item),
        1
      );
      console.log(deletedItem);
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

  <SectionTitle :title-type="'h1'" :text-size="'text-2xl md:text-3xl my-8'" :content="'Edit '+ getPage.name"/>
  <div class="container p-4 mx-auto" >
  <div class="overflow-x-auto ">
    <table class="table table-zebra  bg-black/60 mt-8 mb-2">
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
          <th>
            <div class="avatar">
              <div
                class="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2"
              >
                <img :src=" item.src" alt="hero image" />
              </div>
            </div>
          </th>
          <th
            :data-original="item.alt"
            contenteditable="true"
            class="cursor-pointer hover:bg-black/5 focus:outline-cyan-800/40 transition delay-75"
            @blur="updateContent($event, item, 'alt')"
            
          >
            {{ item.alt }}
          </th>
          <th
            contenteditable="true"
            @blur="updateContent($event, item, 'figcaption')" 
            :data-original="item.figcaption"
            class="cursor-pointer hover:bg-black/5 focus:outline-cyan-800/40 transition delay-75"
          >
            {{ item.figcaption }}
          </th>
          <th class="flex justify-start gap-4 items-center">
            <!-- delete icon -->

            <i
              title="Deleted"
              class="fa-solid fa-trash text-red-400 cursor-pointer"
              :idPage="item.id"
              @click="deletePage(item)"
            ></i>
            <!-- edit icon -->

            <!-- <EditRout :path="'/pageEdit'" :id="item.id" /> -->

           <Model />

          </th>
        </tr>
      </tbody>
    </table>
 
  </div>
     <!--instruction for use  -->
     
    <ul class="list-disc list-inside text-sm bg-black/60 p-4 mx-auto ">
      <p class="mb-2 font-bold">instruction for use</p>
      <li> To edit the content, click on the element and start typing</li>
      <li> To delete the content, click on the delete icon </li>
      <li> To add new element, click on the add icon </li>
      <li>To save the changes, click out side the element </li>
      
    </ul>
  </div>
</template>
