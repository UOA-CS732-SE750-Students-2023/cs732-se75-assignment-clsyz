<template>
  <div class="test_div">
    <h1>Vue-cli</h1>
    <p>Hello {{name}}, this is our first time using vue-cli!</p>
    <img src="./assets/logo.png">
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
export default {
  //Data must be a function,  data in a component must be a function, not a direct reference to a data object.
  data(){
    return{
      name: "LSZ",
      count: 0,
    }
  },
  methods: {
    add() {
      this.count = this.count + 1
    },
    sub() {
      this.count = this.count - 1
    },
  },

  components: {
    module1,
    module2,
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
</style>
