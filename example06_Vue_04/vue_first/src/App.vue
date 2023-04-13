<template>
  <div class="test_div">
    <h1>Vue-cli</h1>
    <p>Hello {{name}}, this is our first time using vue-cli!</p>
    <div>
      <div class="outline">
        <h2>Outline:</h2>
        <p>1. vue-cli</p>
        <p>2. vue Components</p>
        <p>By default, the App.vue component is used to render the page. 
          First, I made an attempt. I created a new component under src as vue_test.Vue.
           Vue is a front-end framework that supports component-based development. 
          The extension of the component is .vue.</p>
        <p>This project includes: component props, scoped attribute of style node, /deep/ style penetration and other knowledge points.</p>
      </div>
      <button @click="changstatus">Show logo</button>
      <logo v-if="status"></logo>
    </div>
    
    <div class="hr_div"></div>
    <div class="table_button">
      <div class="count_div">
      <p>{{ count }}</p>
      </div>
      <button @click="add"> +1 </button>
      <button @click="sub"> -1 </button>
      <button @click="count = 0"> 0 </button>
    </div>
    <div class="module">
    <module1></module1>
    <module2></module2>
    </div>
</div>
</template>

<script>
import module1 from '@/components/module1.vue'
import module2 from '@/components/module2.vue'
import logo from './components/logo.vue'
export default {
  //Data must be a function,  data in a component must be a function, not a direct reference to a data object.
  data(){
    return{
      name: "LSZ",
      count: 0,
      status: true,
      number: 0
    }
  },
  methods: {
    add() {
      this.count = this.count + 1
    },
    sub() {
      this.count = this.count - 1
    },
    changstatus() {
      if(this.number % 2 == 0){
        this.status = true
      }else{
        this.status = false
      }
      this.number += 1 
    }
  },

  components: {
    module1,
    module2,
    logo,
  }
}
</script>

<style>
.test_div {
  background-color: gainsboro;
  border: 2px solid #000;
}
.hr_div {
  width: 100%;
  height: 5px;
  background-color: white;
}
.count_div{
  margin: 5px;
  width: 100px;
  height: 20px;
  border: 2px;
  background-color: white;
}
.count_div > p {
  margin-top: 0px;
  margin-left: 45%;
}

.table_button {
  display: flex;
}

button {
  margin: 5px;
  height: 20px;
}
.module {
  display: flex;
}
.outline{
  margin: 3px;
  color: red;
  background-color: rgb(196, 194, 194);
  border: 2px solid black;
  padding-left: 10px;
}
</style>
