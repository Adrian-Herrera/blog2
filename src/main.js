import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import firebase from "firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.min.css";
import "@/styles/mystyles.scss";

Vue.use(BootstrapVue);

var firebaseConfig = {
  apiKey: "AIzaSyDK9Eaio_GTUp38rNjG8OU4KDG-8YanYBo",
  authDomain: "riesgo-financiero.firebaseapp.com",
  databaseURL: "https://riesgo-financiero.firebaseio.com",
  projectId: "riesgo-financiero",
  storageBucket: "riesgo-financiero.appspot.com",
  messagingSenderId: "768730723126",
  appId: "1:768730723126:web:580b02666a71aeb3163997"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
