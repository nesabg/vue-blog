<template>
  <div id="main-app">
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
.wrapper {
  width: 1280px;
  margin: 0 auto;
}
a {
  text-decoration: none;
  color: black;
}
#edit {
  width: 40%;
  margin: 10px 30px 10px 0;
  padding: 7px 40px;
  border: none;
  display: inline-block;
  background-color: #42b983;
  color: white;
  font-size: 16px;
  cursor: pointer;
}
#delete {
  width: 40%;
  margin: 10px 0;
  padding: 7px 40px;
  border: none;
  display: inline-block;
  background-color: #c41b1b;
  color: white;
  font-size: 16px;
  cursor: pointer;
}
.single-post {
  -webkit-clip-path: polygon(85% 0, 100% 13%, 100% 100%, 15% 100%, 0 86%, 0 0);
  clip-path: polygon(85% 0, 100% 13%, 100% 100%, 15% 100%, 0 86%, 0 0);
}
</style>>

