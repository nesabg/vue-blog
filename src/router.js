import Vue from "vue";
import VueRouter from "vue-router";
import { store } from "./store/store";
import Home from "./components/core/Home.vue";
import Register from "./components/auth/Register.vue";
import Login from "./components/auth/Login.vue";
import UserDetail from "./components/auth/UserDetail.vue";
import EditUser from "./components/auth/EditUser.vue";
import CreatePost from "./components/core/CreatePost.vue";
import EditPost from "./components/core/EditPost.vue";
import ReactPosts from "./components/core/ReactPosts.vue";
import SinglePost from "./components/core/SinglePost.vue";
import AngularPosts from "./components/core/AngularPosts.vue";
import VuejsPosts from "./components/core/VuejsPosts.vue";

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
      },
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
      },
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
      },
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
      },
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
      props: true,
    },
    { path: "/react-posts", component: ReactPosts },
    { path: "/angular-posts", component: AngularPosts },
    { path: "/vuejs-posts", component: VuejsPosts },
    { path: "/single-post/:id", component: SinglePost, props: true },
    {
      path: "/edit-user/",
      component: EditUser,
      beforeEnter: (to, from, next) => {
        if (store.state.isLoggedIn) {
          next(true);
        } else {
          next("/login");
        }
      },
    },
  ],
});
