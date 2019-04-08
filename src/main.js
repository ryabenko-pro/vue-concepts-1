import Vue from 'vue/dist/vue.js'
import App from './App.vue'

Vue.config.productionTip = false

const FromJS = Vue.component('FromJS', {
  template: '<h1>Component From Javascript</h1>',
});

new Vue({
  components: {FromJS},
  render: h => h(App),
  data: {
    form: {
      horizontal: true,
    },
  },
}).$mount('#app')
