<template>
    <div class="main_div">
       <p>2. Vue provides a built-in component specifically for dynamic component rendering.</p>
       <P>counter: {{count2}}</P>
       <button @click="SUB_count">Counter - 1</button>
    </div>
</template>

<script>
export default {

    data() {
        return {
            count2: 100,
            
        };
    },
    methods: {
        SUB_count() {
            this.count2 = this.count2 - 1
        }
    },
};
</script>

<style lang="less" scoped>
.main_div{
    background-color: aquamarine;
    width: 50%;
    border: 2px solid black;
    padding-left: 10px;
    flex: 1;
}


</style>