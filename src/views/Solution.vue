<template>
  <div class="solution">
    <div class="solutionImg">
        <img alt="解决方案配图" src="../assets/solution.png"/>
        <p>助力智慧农业</p>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>
<script>
    export default {
        name: "solution",
        // components: {
        //     HelloWorld
        // }
    };
</script>
<style scoped lang="less">
    .solutionImg{
        width:100%;
        height: 600px;
        position: relative;
        img{
            width: 100%;
            height: 100%;
        }
        p{
            position: absolute;
            color:#fff;
            font-size: 50px;
            top:220px;
            left:0;
            right: 0;
            margin: auto
        }
    }
</style>