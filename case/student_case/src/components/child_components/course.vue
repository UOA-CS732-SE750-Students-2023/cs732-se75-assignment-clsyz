<template>
    <div>
        <h1>The difference between vue and react: </h1>
        <hr>
        <div class="outline"> 
        <ul>
            <li><a href="#D1">Different core ideas</a></li>
            <li><a href="#D2">Differences in component writing</a></li>
            <li><a href="#D3">The diff algorithm is different</a></li>
            <li><a href="#D4">Responsive principles are different</a></li>
            <li><a href="#D5">Other differences</a></li>
        </ul>
    </div>
    <hr>
    <div class="C1" id="D1">
        <h1>Different core ideas:</h1>
        <p>Because the positioning of vue development is to reduce the difficulty of front-end development as much as possible, so the main features of vue: flexible and easy-to-use progressive framework, data interception/proxy, it is more sensitive and accurate to detect changes in data.</p>
        <p>React's positioning from the beginning is to propose new ideas for UI development, and what React wants to do is to subvert the front-end development method in a better way. So React advocates functional programming (pure components), immutable data and one-way data flow.</p>
    </div>
    <hr>
    <div class="C1" id="D2">
        <h1>Differences in component writing:</h1>
        <p>React’s recommended approach is JSX + inline style, that is, writing all HTML and CSS into javascript, that is, all in js. The method recommended by Vue is the single-file component format of template (simple and easy to understand, easy to understand from the traditional front-end), that is, html, css, and js are written in the same file (vue also supports JSX writing). This difference is partly due to the different core ideas of the two.</p>
    </div>
    <hr>
    <div class="C1" id="D3">
        <h1>The diff algorithm is different:</h1>
        <p>The core Diff algorithm of Vue2 adopts the algorithm of double-end comparison, and compares from both ends of the old and new children at the same time, and uses the key value to find reusable nodes, and then performs related operations. Compared with React's Diff algorithm, it can reduce the number of moving nodes in the same situation, reduce unnecessary performance loss, and is more elegant.</p>
    </div>
    <hr>
    <div class="C1" id="D4">
        <h1>Responsive principles are different:</h1>
        <p>Vue: Vue relies on collection, automatic optimization, and variable data. Vue recursively listens to all attributes of data and modifies them directly. When the data changes, automatically find the referenced component and re-render.</p>
        <p>React: React is based on a state machine, manually optimized, and the data is immutable. It needs setState to drive the new state to replace the old state.</p>
    </div>
    <hr>
    <div class="C1" id="D5">
        <h1>Other differences:</h1>
        <p>The difference between the APIs of the two is also quite large. In order to make it easier to use, Vue introduces concepts such as instructions and filters, such as watch and computed. React has fewer APIs.</p>
    </div>

    </div>
</template>

<script>
export default {
    name: 'StudentCaseCourse',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="less" scoped>
.outline  ul{
    border: 5px solid white;
    padding-left: 30px;
    //background-color: aliceblue;
}
.outline  li{
    //border: 2px solid red;
    height: 40px;
    font-size: 20px;
}


.outline  li:hover{
    //background-color: rgb(205, 230, 252);
    color: rgb(4, 121, 223);
    font-size: 22px;
}

.C1 {
    margin-top: 20px;
    p {
        margin-top: 20px;
        font-size: 18px
    }
}
</style>