import Vue from 'vue'
import App from './App.vue'
import MyPannel from "@/components/Mypannel.vue";

Vue.component('MyPannelOne', MyPannel)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
