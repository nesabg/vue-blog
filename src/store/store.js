import Vue from "vue";
import Vuex from "vuex";
import { db } from '../main';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
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
  mutations: {
    updateUser(state, payload) {
        db.collection(`users`).doc(payload).get().then(res => {
            state.user = Object.assign({}, state.user, res.data());
        })
    },
    login(state) {
      state.isLoggedIn = true;
    }
  },
  actions: {
    login(context) {
      context.commit("login");
    },
    updateUser(context, payload) {
      context.commit("updateUser", payload);
    }
  }
});
