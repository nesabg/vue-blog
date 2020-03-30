<template>
  <div id="app">
    <app-navigation></app-navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "./shared/Navigation.vue";

export default {
  name: "App",

  components: {
    AppNavigation: Navigation
  },

  data: () => ({
    //
  })
};
</script>
<style>
</style>
