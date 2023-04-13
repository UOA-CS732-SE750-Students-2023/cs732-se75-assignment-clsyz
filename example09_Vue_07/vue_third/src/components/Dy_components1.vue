<template>
    <div class="main_div">
       <p>1. Concept: A dynamic component is a component that dynamically switches between showing and hiding</p>
       <P>counter: {{count}}</P>
       <button @click="ADD_count">Counter + 1</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        };
    },


    methods: {
        ADD_count() {
            this.count = this.count + 1
        }
    },
};
</script>

<style lang="less" scoped>
.main_div {
    margin-top: 10px;
    background-color: aqua;
    width: 50%;
    border: 2px solid black;
    padding-left: 10px;
    flex: 1
}

</style>