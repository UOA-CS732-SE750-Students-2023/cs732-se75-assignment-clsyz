<template>
    <div class="main_div">
        <h1>This is a test!</h1>
        <!--use this.$route.params-->
        <h2>Vue_intro.vue -> {{this.$route.params.id}}</h2>
        <!--Display different colors depending on the page being requested-->
        <!--use props-->
        <p v-if="id === '1'" style="color:red">Vue is a JavaScript framework for building user interfaces. It is built on standard HTML, CSS, and JavaScript, and provides a declarative, component-based programming model to help developers develop user interfaces efficiently.</p>
        <p v-else-if="id === '2'" style="color:blue">Vue is a JavaScript framework for building user interfaces. It is built on standard HTML, CSS, and JavaScript, and provides a declarative, component-based programming model to help developers develop user interfaces efficiently.</p>
        <p v-else style="color:green">Vue is a JavaScript framework for building user interfaces. It is built on standard HTML, CSS, and JavaScript, and provides a declarative, component-based programming model to help developers develop user interfaces efficiently.</p>
    </div>

</template>

<script>
export default {

    props: ['id'],
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
    background-color:aqua;
    padding: 5px;
}
</style>