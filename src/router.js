import VueRouter from 'vue-router';
import Home from "./core/Home.vue";
import Register from "./auth/Register.vue";
import Login from "./auth/Login.vue";
import UserDetail from "./auth/UserDetail.vue";
import CreateTopic from "./core/CreateTopic.vue";
import EditTopic from "./core/EditTopic.vue";

export default new VueRouter({
    mode: 'history',
    routes: [
      { path: '/', component: Home },
      { path: '/register', component: Register },
      { path: '/login', component: Login },
      { path: '/user-detail', component: UserDetail },
      { path: '/create-topic', component: CreateTopic },
      { path: '/edit-topic', component: EditTopic }
    ]
  })