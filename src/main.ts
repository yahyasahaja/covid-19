import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./fonts";
import { BASE_URL } from "./config";

Vue.config.productionTip = false;

// console.log(BASE_URL);
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers["Accept"] = "application/json";
axios.defaults.headers["Content-Type"] = "application/json";

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
