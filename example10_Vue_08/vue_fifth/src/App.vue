<template>
  <div class="main_div">
  <div class="outline">
    <h1>Vue fifth</h1>
    <P>Programmatic Navigation API</P>
  </div>

  <div class="photo_box"> 
    <h2>Part1: Programmatic Navigation API</h2>
    <router-link to="/router1">photo1</router-link>
    <router-link to="/router2">photo2</router-link>
    <router-link to="/router3">photo3</router-link>
    <router-link to="/router4">photo4</router-link>
  </div>
  
  <div class="photo_box">
    <router-view></router-view>
  </div>
  <div>
    <!--Control backward, forward-->
    <button @click="$router.back()">back</button>
    <button @click="$router.forward()">forward</button>
  </div>
  <hr>
  <div>
    <h2>Part2: Navigation guard</h2>
    <hr>
    <router-link to="/main">Main page</router-link>
    <P>When I click on the Main page, I'm taken to the login.vue display.</P>
    <router-view></router-view>

  </div>
  </div>
</template> 

<script>
import router1 from './components/router1.vue';
import router2 from './components/router2.vue';
import router3 from './components/router3.vue';
import router4 from './components/router4.vue';
import main from './components/main.vue';

export default {

    data() {
      return {
      }
    },
    components: {
      router1,
      router2,
      router3,
      router4,
      main
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
</style>
