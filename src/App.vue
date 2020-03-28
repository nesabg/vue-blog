<template>
  <div id="app">
    <app-register></app-register>
  </div>
</template>

<script>
import Register from "./auth/Register.vue";

export default {
  name: "App",

  components: {
    AppRegister: Register
  },

  data: () => ({
    //
  })
};
</script>
<style>

#app {
  width: 1280px;
  margin: 0 auto;
  font-family: 'Courier New', Courier, monospace;
}


</style>
