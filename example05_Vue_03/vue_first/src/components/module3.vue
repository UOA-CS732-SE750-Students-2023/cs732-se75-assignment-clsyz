<template>
    <div class="module3">
        <p>Global components</p>
        <p> props values: {{data_count}} </p>
        <button @click="data_count += 1">ADD</button>
        <button @click="data_count -= 1">SUB</button>
    </div>
</template>
<script>
export default {
    //props are custom properties, so we can give the consumer a custom property to specify initial values for the current component.
    props: {
        //user-defined attribute
        count: {
            // If no count is passed, then the "default" value is defined.
            default: 0,
            type: Number,
            required: true
        }
    },
    data() {
        return {
        data_count: this.count
    }
    }
}
</script>

<style scoped>
.module3 {
    display: flexbox;
    color: rgb(227, 200, 23);
}
</style>