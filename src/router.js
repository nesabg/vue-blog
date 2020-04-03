import Vue from "vue";
import VueRouter from "vue-router";
import { store } from "./store/store";
import Home from "./core/Home.vue";
import Register from "./auth/Register.vue";
import Login from "./auth/Login.vue";
import UserDetail from "./auth/UserDetail.vue";
import CreateTopic from "./core/CreateTopic.vue";
import EditTopic from "./core/EditTopic.vue";

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
      path: "/create-topic",
      component: CreateTopic,
      beforeEnter: (to, from, next) => {
        if (store.state.isLoggedIn) {
          next(true);
        } else {
          next("/login");
        }
      }
    },
    {
      path: "/edit-topic",
      component: EditTopic,
      beforeEnter: (to, from, next) => {
        if (store.state.isLoggedIn) {
          next(true);
        } else {
          next("/login");
        }
      }
    }
  ]
});
