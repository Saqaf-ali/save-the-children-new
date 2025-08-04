
<script>
export default {
  props: ["id"],
  data(){
    return{pages: JSON.parse(localStorage.getItem("pages")),
        page:null,
    }
  },
  computed:{
    getPageContent() {
      return this.pages.find(p => p.id == this.id);
    }
    },
  
}
//   let p=this.getPageContent();
//   console.log(p);
  

// console.log(id);

</script>

<template>
   {{ getPageContent}}
     rrrrrrrrrrrrr
</template>