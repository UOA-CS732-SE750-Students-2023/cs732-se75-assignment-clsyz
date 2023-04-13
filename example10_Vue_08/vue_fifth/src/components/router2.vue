<template>
    <div class="main_div">
        <h1>This is photo2</h1>
        <img src="https://img2.woyaogexing.com/2020/09/05/4a804b37a518450f933b8358fc88e694!1242x9999.jpeg" alt="cat 1"><br>
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
            this.$router.push('/router3')
        }
    },
};
</script>

<style lang="less" scoped>
.main_div {
    background-color:antiquewhite;
    padding: 5px;
}
.main_div > img{
    width: 300px;
    height: 300px;
}
</style>