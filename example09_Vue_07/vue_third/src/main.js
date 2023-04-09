import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = true


//声明全局自定义指令：
Vue.directive('wholecolor', {
  bind(el, binding) {
    el.style.color = binding.value
  },
  update(el, binding) {
    el.style.color = binding.value
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
