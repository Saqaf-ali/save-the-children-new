<script>
export default {
  props: ["success"],
  computed: {
    killedAlert() {
      setTimeout(() => {
        this.success = null;
      }, 3000);
    },
  },
};
</script>
