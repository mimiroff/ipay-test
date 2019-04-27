import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.filter("USD", value => {
  if (!value) {
    return "";
  }
  value = value.toString();
  return `$${value}`;
});

new Vue({
  render: h => h(App)
}).$mount("#app");
