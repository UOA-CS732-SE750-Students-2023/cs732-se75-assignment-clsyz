<template>
<div class="main_div">
  <div class="outline">
    <h1>Vue second</h1>
    <P>1. 组件的生命周期 -> Lifecycle_testing.vue</P>
    <P>2. 组件之间的数据共享</P>
    <P>3. ref 引用</P>
  </div>
  <h1>Part 1:</h1>
  <lifecycle></lifecycle>
  <hr>
  <h1>Part 2:</h1>
  <h2>Data sharing between components</h2>
  <p style="color:hotpink">The child component shares the value of data to the parent component: {{countfromson}}</p>
  <div class="first_div">
    <first_div1 :content="content" :user="user"></first_div1>
  </div>
  <hr>
  <div class="second_div">
    <second_div :content="content2" @fromson="newCount"></second_div>
  </div>
  <hr>
  <h1>Part 3:</h1>
  <p>Observe "The value in component ref_div.vue: 100" in the rendered page below. When we subtract one from the value, we can reset the value. The button below can complete this operation.</p>
  <button @click="resetValue">Reset the value in component ref_div.vue</button>
  <ref_div ref="com_ref_div"></ref_div>
  <hr>
  
  <div class="input_div">
    <h2>Realize the on-demand display of the text box</h2>
    <p v-if="see_input" style="color: yellowgreen;">Use this.$nextTick(cb) method and focus()</p>
    <input type="text" v-if="see_input" @blur="Sbutton" ref="focus_input">
    <button v-else @click="Sinput">Show the input field</button>
  </div>
</div>
</template>

<script>
import lifecycle from '@/components/Lifecycle_testing.vue';
import first_div1 from './components/first_div1.vue';
import second_div from './components/second_div.vue';
import ref_div from '@/components/ref_div.vue';

export default {
  data() {
    return {
      content: "Data sharing between parent and child components; Parent -> child",
      content2: "Data sharing between parent and child components; Child -> Parent pass value",
      user: {
        name: 'Lsz',
        age: '22',
        native_place: 'China'
      },
      //Define countfromson to receive the data passed by the child component
      countfromson: 0,
      see_input: false
    }

  },


  methods: {
    newCount(value) {
      this.countfromson = value
    },


     resetValue() {
      this.$refs.com_ref_div.reset()
     },

     Sinput() {
      this.see_input = true


      this.$nextTick(() => {
        this.$refs.focus_input.focus()
      })
     },

     Sbutton() {
      this.see_input = false
     },


  },

  components: {
    lifecycle,
    first_div1,
    second_div,
    ref_div
  }
};
</script>

<style lang="less" scoped>
.outline{
  margin: 3px;
  color: red;
  background-color: rgb(196, 194, 194);
  border: 2px solid black;
  padding-left: 10px;
}

.input_div{
  margin-top: 10px;
    padding: 10px;
    background-color: rgb(220, 217, 217);
    border: 2px solid gray;
}



</style>