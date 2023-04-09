<template>
    <div class="module2">
        <h1>module 2</h1>
        <hr>
        <!--props-->
        <mymodule3 :count="12"></mymodule3>
    </div>
    
</template>
<style lang="less" scoped>
.module2 {
    width: 50%;
    background-color: yellowgreen;
}

//使用deep改变
/deep/p {
    color: red;
}

</style>