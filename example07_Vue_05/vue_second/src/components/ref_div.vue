<template>
    <div class="main_div">
        <h2 ref="part3_h2">ref Reference</h2>
        <button @click="changecolor">Change the color of the header</button>
        <p>The value in component ref_div.vue: {{ count }}</p>
        <button @click="count -= 1"> -1 </button>
        <button @click="reset">Reset value = 100</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 100
        };
    },

    methods: {
    changecolor() {
      this.$refs.part3_h2.style.color = 'red'
    },

    reset() {
        this.count = 100
    }
    },
};
</script>

<style lang="less" scoped>
.main_div{
    margin-top: 10px;
    padding: 10px;
    background-color: rgb(220, 217, 217);
    border: 2px solid gray;
}
</style>