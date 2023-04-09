<template>
    <div class="main_div">
        <head_nav></head_nav>
        <div class="main">
            <left_nav></left_nav>
            <div class="right_body">
            <keep-alive>
            <router-view></router-view>
            </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>

import head_nav from '@/components/layout/head_layout.vue'
import left_nav from '@/components/navigation_layout/left_nav.vue'

export default {
    name: 'StudentCaseMainPage',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    components: {
        head_nav,
        left_nav,
    }
};
</script>

<style lang="less" scoped>
.main_div {
  height: 100%;
  flex-direction: column;
  display: flex;

.main {
    height: 100%;
    display: flex;
}
.right_body {
      margin-top: 0.5px;
      margin-left: 10px;
      padding: 15px;
      flex: 1;
      border: 2px solid grey;
      height: max-content;
}
}
</style>