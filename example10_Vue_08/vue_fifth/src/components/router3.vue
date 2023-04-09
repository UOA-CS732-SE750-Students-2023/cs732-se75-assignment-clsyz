<template>
    <div class="main_div">
        <h1>This is photo3</h1>
        <img src="https://pic27.photophoto.cn/20130526/0035035943179791_b.jpg" alt="cat 1"><br>
        <button @click="nextPh">next photo - push</button>
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
        nextPh() {
            this.$router.push('/router4')
        }
    },
};
</script>

<style lang="less" scoped>
.main_div {
    background-color:aliceblue;
    padding: 5px;
}
.main_div > img{
    width: 300px;
    height: 300px;
}
</style>