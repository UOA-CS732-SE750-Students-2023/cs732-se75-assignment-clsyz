<template>
    <div class="main_div">
        <h2>FirstDiv1 - Data sharing between parent and child components; Parent -> child</h2>
        <p>Content: {{content }}</p>
        <p>User profile:</p>
        <p>Name: {{user.name}}</p>
        <p>Age: {{user.age}}</p>
        <p>Native_place: {{user.native_place}}</p>
        <hr>
        <div class="button_div">
        <button @click="sendtofirst">M---second_div</button>
        <p>{{ messagefromsecond }}</p>
        </div>
    </div>
</template>

<script>
//import eventBus
import send_first from './eventBus.js'

export default {
    props: ['content', 'user'],
    data() {
        return {
            message: 'This is a message from fist_div1!',
            messagefromsecond: ''
        }
    },

    created() {
        //Bind a custom event for send second
        send_first.$on('share', (value) => {
            console.log(value)
            this.messagefromsecond = value
        })
    },

    methods: {
        sendtofirst() {
            //Sending data via eventBus
            send_first.$emit('share', this.message)
        }
    },
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