<template>
  <main id="app">
    <HomePage />
  </main>
</template>

<script>
import HomePage from './components/HomePage.vue';

export default {
  name: 'App',
  components: {
    HomePage,
  },
};
</script>

<style>
body {
  background: linear-gradient(to bottom, #555, #999) fixed;
}
main {
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  width: 1024px;
  min-height: 300px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
