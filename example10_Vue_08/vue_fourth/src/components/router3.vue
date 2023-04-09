<template>
    <div class="main_div">
        <h1>This is a test!-> Nested routing:</h1>
        <h2>router3.vue</h2>
        <hr>
        <!--sub-routing links-->
        <router-link to="/router3/router_children1"> router_children1 </router-link>
        <hr>
        <!--sub-routing router-view-->
        <router-view></router-view>

    </div>
</template>

<script>
export default {
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
.main_div {
    background-color: aliceblue;
    padding: 5px;
}
</style>