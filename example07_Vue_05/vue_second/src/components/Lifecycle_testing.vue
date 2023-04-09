<template>
    <div>
        <h2>Lifecycle test</h2>
        <p>The number of count is {{ count }}</p>
        <button @click="count += 1">+1</button>
    </div>
</template>

<script>

export default {
    props: ['lifecycle'],
    data() {
        return {
            content: "The content of the lifecycle!",
            count: 0
        };
    },

    methods: {
        show_result() {
            console.log("Try - Whether a method has been called!")
        }    
    },


    //Create a lifecycle function -> beforeCreate()
    beforeCreate() {
        console.log("1. beforeCreate")
        console.log(this.lifecycle)
        console.log(this.content)
        this.show_result()
    },

    //Create a lifecycle function -> beforeCreate()
    created() {
        console.log("2. create")
        console.log(this.lifecycle)
        console.log(this.content)
        this.show_result()
    },

    //Create a lifecycle function -> beforeMount()
    beforeMount() {
        console.log("3. beforeMount")
        console.log(this.$el) //The terminal returns: undefined
    },

    //Create a lifecycle function -> mounted()
    //The earliest you can manipulate the DOM of the component is in the mounted phase
    mounted() {
        console.log("4. mounted")
        console.log(this.$el)
    },

    //Create a lifecycle function -> beforeUpdate()
    beforeUpdate() {
        console.log("5. beforeUpdate")
        console.log(this.count)
    },

    //Create a lifecycle function -> updated()
    //To get the latest DOM structure, you must write it to the updated function.
    updated() {
        console.log("6. update")
        console.log(this.count)
    }
};
</script>

<style lang="less" scoped>

</style>