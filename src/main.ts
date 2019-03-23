import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
// import "swal.css";
require("./less/index.less");
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
