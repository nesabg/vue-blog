import Vue from "vue";
import VueRouter from "vue-router";
import { store } from "./store/store";
import Home from "./core/Home.vue";
import Register from "./auth/Register.vue";
import Login from "./auth/Login.vue";
import UserDetail from "./auth/UserDetail.vue";
import CreatePost from "./core/CreatePost.vue";
import EditPost from "./core/EditPost.vue";
import ReactPosts from "./core/ReactPosts.vue";
import SinglePost from "./core/SinglePost.vue";
import AngularPosts from "./core/AngularPosts.vue";
import VuejsPosts from "./core/VuejsPosts.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    {
      path: "/register",
      component: Register,
      beforeEnter: (to, from, next) => {
        if (!store.state.isLoggedIn) {
          next(true);
        } else {
          next("/");
        }
      }
    },
    {
      path: "/login",
      component: Login,
      beforeEnter: (to, from, next) => {
        if (!store.state.isLoggedIn) {
          next(true);
        } else {
          next("/");
        }
      }
    },
    {
      path: "/user-detail",
      component: UserDetail,
      beforeEnter: (to, from, next) => {
        if (store.state.isLoggedIn) {
          next(true);
        } else {
          next("/login");
        }
      }
    },
    {
      path: "/create-post",
      component: CreatePost,
      beforeEnter: (to, from, next) => {
        if (store.state.isLoggedIn) {
          next(true);
        } else {
          next("/login");
        }
      }
    },
    {
      path: "/edit-post/:id",
      component: EditPost,
      beforeEnter: (to, from, next) => {
        if (store.state.isLoggedIn) {
          next(true);
        } else {
          next("/login");
        }
      },
      props: true
    },
    { path: "/react-posts", component: ReactPosts },
    { path: "/angular-posts", component: AngularPosts },
    { path: "/vuejs-posts", component: VuejsPosts },
    { path: "/single-post/:id", component: SinglePost, props: true }
  ]
});
