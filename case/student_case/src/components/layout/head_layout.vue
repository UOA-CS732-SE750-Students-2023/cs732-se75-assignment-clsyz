<template>
    <div>
        <header class="top_main">
            <div class="photo">
            <img src="../../../public/image/logo.png">
            </div>
            <div class="left">
            Course management background
            </div>
            <div class="right">
            <button type="button" @click="teacherlogout">Logout</button>
            </div>
        </header>
        
    </div>
</template>

<script>
export default {
    name: 'StudentCaseHeadLayout',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        teacherlogout() {
        // 1. Clear the tokens
        localStorage.removeItem('token')
        // 2. Jump to login page
        this.$router.push('/teacherlogin')
    }
    },
};
</script>

<style lang="less" scoped>
.top_main {
	height: 90px;
    border: 2px solid lightgrey;
    background-color: rgb(240, 239, 239);
}
.photo{
	float: left;
}
.photo img{
	width: 70px;
	height: 70px;
	margin: 10px;
	display: inline-block;
}
.left{
	float: left;
	line-height: 80px;
	font-size: 25px;
}
.right{
	float: right;
	line-height: 70px;
	color: white;
	font-size: 25px;
    padding-right: 20px;
}

.right button {
    border: none;
}



</style>