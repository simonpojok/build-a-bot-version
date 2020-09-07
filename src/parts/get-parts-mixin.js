export default {
  created() {
    this.$store.dispatch('getParts').then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  },
  computed: {
    parts() {
      return this.$store.state.parts || {
        heads: [],
        arms: [],
        torsos: [],
        bases: [],
      };
    },
  },
};
