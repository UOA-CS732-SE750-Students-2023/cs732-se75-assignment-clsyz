<template>
    <div class="main_div">
        <h1>This is photo1</h1>
        <img src="https://th.bing.com/th/id/R.cc5dc85a0dd359a7f1351e669ee8c1ae?rik=A34HXCjvO3MqNA&pid=ImgRaw&r=0" alt="cat 1"><br/>
        <!--Programmatic Navigation API-->
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
            this.$router.push('/router2')
        }
    },
};
</script>

<style lang="less" scoped>
.main_div {
    background-color:aqua;
    padding: 5px;
}
.main_div > img{
    width: 300px;
    height: 300px;
}
</style>