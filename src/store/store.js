import Vue from "vue";
import Vuex from "vuex";
import { db } from "../main";

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
  getters:{

  },
  mutations: {
    updateUser(state, payload) { 
      db.collection(`users`)
        .doc(payload)
        .get()
        .then(res => {
          state.user = Object.assign({}, state.user, res.data());
        });
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
    updateUser(context, payload) {
      context.commit("updateUser", payload);
    },
    fetchPosts({ commit }) {
      db.collection("categories")
        .onSnapshot(querySnapshot => {
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

//store.dispatch("fetchPosts");
