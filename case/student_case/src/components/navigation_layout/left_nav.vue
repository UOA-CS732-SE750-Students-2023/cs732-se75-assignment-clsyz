<template>
    <div class="left_main">
    <ul class="left_ul">
      <li class="left_li">
        <router-link to="/main_page/course">Course Description</router-link>
      </li>
      <li class="left_li">
        <router-link to="/main_page/student">Student Management</router-link>
      </li>
      <li class="left_li">
        <router-link to="/main_page/dis">Discussion</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'StudentCaseLeftNav',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="less" scoped>
.left_main {
    background-color: gray;
    border: 2px solid lightgrey;
    width:15%;
    height: fit-content;
}

.left_ul {
  list-style-type: none;
  height: 100%;
  background-color: whitesmoke;

}

.left_li {
    line-height: 60px;
    font-weight: bold;
    font-size: 14px;
    border: 1px solid lightgrey;
    flex: 1;
    &:hover {
      background-color: grey;
      cursor: pointer;
    }
}
.left_li a {
    text-decoration: none;
    display: block;
    text-align: center;
    color: black;
    &:hover {
       font-size: 15px;
    }
    }
</style>