import Vue from "vue";
import Vuex from "vuex";
import { db } from "@/main";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    posts: [],
    user: {
      uid: "",
      publicName: "",
      email: "",
      imgUrl: "",
      phone: "",
      description: ""
    },
    isLoggedIn: false
  },
  getters: {
    getCategoryPost: (state) => (technology) => {
      return state.posts.filter(p => p.category === technology);
    },
    getUserInfo: (state) => {
      return state.user;
    },
    getSinglePost: (state) => (value) => {
      return state.posts.filter(post => post.uid == value)[0]
  },
},
  mutations: {
    updateUser(state, payload) {
      state.user = Object.assign({}, state.user, payload);
    },
    login(state) {
      state.isLoggedIn = true;
    },
    getPost(state, posts) {
      state.posts = posts;
    }
  },
  actions: {
    login(context) {
      context.commit("login");
    },
    updateUser({ commit }, payload) {
      db.collection(`users`)
        .doc(payload)
        .onSnapshot(res => {
          commit("updateUser", res.data());
        });
    },
    fetchPosts({ commit }) {
      db.collection("categories").onSnapshot(querySnapshot => {
        let posts = [];
        querySnapshot.forEach(doc => {
          let data = doc.data();
          data.uid = doc.id;
          posts.push(data);
        });
        commit("getPost", posts);
      });
    }
  }
});
