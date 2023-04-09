//Import the vue package to get the vue constructor
import Vue from 'vue'
//Import the App.vue root component, which we will use to render the template structure in our HTML page
import App from './App.vue'
//Try importing a new component
//import test from './vue_test.vue'

//Import and create global components
import module3 from '@/components/module3.vue'
Vue.component('mymodule3',module3)

Vue.config.productionTip = false
//Create a vue instance object
new Vue({
  //Renders the component specified by the render function into the HTML page
  render: h => h(App),
  //New Components:
  //render: h => h(test),
}).$mount('#app')//Equivalent to the "el" property



