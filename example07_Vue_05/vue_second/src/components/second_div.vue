<template>
    <div class="main_div">
        <h2>SecondDiv - Data sharing between parent and child components; Child -> Parent pass value</h2>
        <p>Content: {{content }}</p>
        <p>Count value: {{ count }}</p>
        <button @click="sub_value"> -1 </button>
        <hr>
        <div class="button_div">
        <button @click="sendtosecond">M---first_div1</button>
        <p>{{ messagefromfirst }}</p>
        </div>
    </div>
</template>

<script>
//import eventBus
import send_second from './eventBus.js'

export default {
    props: ['content'],
    data() {
        return{
            //Child component data, we want to pass the count value to the parent component
            count: 100,
            message: 'This is a message from second_div!',
            messagefromfirst: ''
        }
    },
    methods: {
        sub_value() {
            this.count = this.count - 1
            //When modifying the data, we emit a custom time via $emit()
            this.$emit('fromson', this.count);
        },

        sendtosecond() {
        //Sending data via eventBus
        send_second.$emit('share', this.message)
        }
        
    },

    created() {
        //Bind a custom event for send first
        send_second.$on('share', (value) => {
            console.log(value)
            this.messagefromfirst = value
        })
    }
};
</script>

<style lang="less" scoped>
.main_div{
    padding: 10px;
    background-color: rgb(220, 217, 217);
    border: 2px solid gray;
}
.button_div > button {
    width: 200px;
    height: 30px;
}
</style>