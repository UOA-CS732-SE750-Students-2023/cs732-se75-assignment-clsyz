<template>
  <div class="main_div">
  <div class="outline">
    <h1>Vue forth</h1>
    <P>1. Concept and principle of front-end routing</P>
    <P>2. Basic use of vue-router</P>
    <P>3. Common uses of vue-router</P>
  </div>
  <hr>


  <div class="Cr">
    <h1>Part 1:</h1>
    <h2>Concept and principle of front-end routing</h2>
  </div>
  <hr>


  <div class="router">
    <h1>Part 2:</h1>
    <h2>Basic use of vue-router</h2>
    <div class="a_div">
      <!--Instead of using the a tag, you can use router-link-->
      <router-link to="/router1">Router1 - introduction</router-link><br/>
      <a href="#/router2">Router2 - present the picture</a>
    </div>
    <hr>
    <!--router-view is a placeholder that can be used as long as vue-router is configured in your project.-->
    <router-view></router-view>
  </div>
  <hr>



  <div class="common_use">
    <h1>Part 3:</h1>
    <h2>Common uses of vue-router</h2>
    <hr>
    <div class="use">
      <h2>1. Route redirection:</h2>
      <p>Implement it in index.js file</p>
      <hr>
      <h2>2. Nested routing:</h2>
      <router-link to="/router3">Router3</router-link><br/>
      <router-link to="/router4">Router4</router-link>
      <router-view></router-view>
      <hr>
      <h2>3. dynamic routing:</h2>
      <p>Check out the implementation code in index.js!</p>
      <router-link to="/Vue_intro/1">1.Introduction to Vue</router-link><br/>
      <router-link to="/Vue_intro/2">2.Introduction to Vue</router-link><br/>
      <router-link to="/Vue_intro/3">3.Introduction to Vue</router-link>
      <router-view></router-view>
    </div>
  </div>
  </div>
</template> 

<script>
import router1 from './components/router1.vue';
import router2 from './components/router2.vue';

export default {

    data() {
      return {
      }
    },
    components: {
      router1,
      router2
    },

    methods: {
    },
}
</script>

<style lang="less">
.outline{
  margin: 3px;
  color: red;
  background-color: rgb(196, 194, 194);
  border: 2px solid black;
  padding-left: 10px;
}

.Cr{
  margin: 3px;
  background-color: rgb(196, 194, 194);
  border: 2px solid black;
  padding-left: 10px;
}

.router{
  margin: 3px;
  background-color: rgb(196, 194, 194);
  border: 2px solid black;
  padding-left: 10px;
}

.common_use {
  margin: 3px;
  background-color: rgb(196, 194, 194);
  border: 2px solid black;
  padding-left: 10px;
}
.use{
  margin: 3px;
  background-color: rgb(236, 235, 235);
  padding: 10px;
}
</style>
