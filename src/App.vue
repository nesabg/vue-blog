<template>
  <div id="main-app">
    <app-navigation></app-navigation>
    <transition name="nesa">
    <router-view></router-view>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navigation from "./components/shared/Navigation.vue";
import Footer from "./components/shared/Footer.vue";

export default {
  name: "App",

  components: {
    AppNavigation: Navigation,
    AppFooter: Footer
  },

  data: () => ({
    //
  }),
  created() {
    this.$store.dispatch("fetchPosts");
  }
};
</script>
<style>
.nesa-enter-active, .nesa-leave-active {
  transition: all .5s;
}

.nesa-enter, .nesa-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.nesa-enter-to, .nesa-leave {
  transform: translateX(0);
  opacity: 1;
}
.wrapper {
  width: 1280px;
  margin: 0 auto 150px auto;
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
  width: 100%;
  height: 200px;
  display: inline-block;
  margin: 10px auto;
  padding: 30px;
  background-color: white;
  text-align: left;
  vertical-align: top;
  box-shadow: 0 0 10px -6px #000000;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  -webkit-clip-path: polygon(85% 0, 100% 13%, 100% 100%, 15% 100%, 0 86%, 0 0);
  clip-path: polygon(85% 0, 100% 13%, 100% 100%, 15% 100%, 0 86%, 0 0);
}
.singlePost:hover {
  transform: scale(1.01);
}
.singlePost h2 a {
  color: #42b983;
}
.content {
  width: 60%;
  padding: 20px 40px;
  display: inline-block;
  vertical-align: top;
}
.author {
    float: right;
    color: grey; 
}
</style>>

