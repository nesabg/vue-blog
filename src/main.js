import Vue from 'vue';
import App from './App.vue';
import Vuelidate from 'vuelidate';
import VueRouter from 'vue-router';
import router from './router';
//import VueFirestore from 'vue-firestore';
import { firebase } from "@firebase/app";
import "@firebase/firestore";
import { firebaseConfig } from './firebase';


Vue.use(VueRouter);
Vue.use(Vuelidate);
//Vue.use(VueFirestore);

Vue.config.productionTip = false;

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
