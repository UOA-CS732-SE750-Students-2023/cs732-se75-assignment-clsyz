<template>
    <div class="main_div">
        <h1>This is photo4</h1>
        <img src="https://img2.woyaogexing.com/2020/05/27/06739695c4b04086b3c58a721a3570b5!1242x9999.jpeg" alt="cat 1"><br>
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
            this.$router.push('/router1')
        }
    },
};
</script>

<style lang="less" scoped>
.main_div {
    background-color:aquamarine;
    padding: 5px;
}
.main_div > img{
    width: 300px;
    height: 300px;
}
</style>