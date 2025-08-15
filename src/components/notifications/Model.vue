  <template>
  <i title="Add"  @click="showModal" class="fa-solid fa-plus text-gray-500 cursor-pointer"> </i>
  <!-- <button class="btn" @click="showModal">open modal</button> -->
  <dialog id="myModel" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box bg-gradient-to-br  border border-cyan-400/40 " >
      <h3 class="text-lg font-bold">New Element!</h3>
       <div class="relative flex flex-col items-center justify-center ">
          <FormModel /></div>

      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn ">Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>
<script>
import FormModel from '../FormModel.vue';

export default {
  components:{
    FormModel,
  },
  methods: {
    showModal() {
      document.getElementById("myModel").showModal();
    },
  },
};
</script>
