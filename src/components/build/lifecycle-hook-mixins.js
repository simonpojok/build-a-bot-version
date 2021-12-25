export default {
  beforeCreate() { console.log('BeforeCreate'); },
  created() { console.log('Created'); },
  beforeMount() { console.log('BeforeMount'); },
  mounted() { console.log('Mounted'); },
  beforeUpdate() { console.log('BeforeUpdate'); },
  updated() { console.log('Updated'); },
  beforeUnmount() { console.log('BeforeUnmount'); },
  unmounted() { console.log('Unmounted'); },
};
