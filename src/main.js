import Vue from 'vue';
import App from './App.vue';
import Vuelidate from 'vuelidate';
import router from './router';
import { firebase } from "@firebase/app";
import "@firebase/firestore";
import { firebaseConfig } from './firebase';
import { store } from './store/store';


Vue.use(Vuelidate);

Vue.config.productionTip = false;

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();

new Vue({
  store: store,
  router: router,
  render: h => h(App),
}).$mount('#app')
