<template>
    <div class="main_div">
       <p>This is a component with slots!</p>
       <!--Declare a slot area-->
       <!--Each slot should have a name, if no name is specified, the "default" is used-->
       <h2>slot name: default</h2>
       <slot name="default"></slot>
       <hr>
       <h2>slot name: slot1</h2>
       <slot name="slot1"></slot>
       <hr>
       <h2>Shorthand and fallback content for the v-slot</h2>
       <slot name="slot2"></slot>
       <hr>
       <slot name= "slot3">The fallback content is shown here</slot>
       <hr>
       <h2>Scope slots:</h2>
       <!--When the component is wrapped, the reserved <slot> is provided with the corresponding value of the attribute-->
       <slot name="slot4" content="Destructuring assignments can be used to simplify the process of receiving data from data objects provided by scope slots." ></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },

    methods: {
    },
};
</script>

<style lang="less" scoped>
.main_div {
    margin-top: 10px;
    background-color:rgb(234, 233, 233);
    border: 2px solid black;
    padding-left: 10px;
    flex: 1
}

</style>