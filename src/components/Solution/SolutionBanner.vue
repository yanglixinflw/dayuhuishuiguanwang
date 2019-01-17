<template>
    <div class="solutionBanner">
        <img alt="解决方案配图" src="../../assets/solution.png"/>
        <p>助力智慧农业</p>
    </div>
</template>
<script>
    export default {
        name:"solutionBanner",  
    }
</script>
<style lang="less" scoped>
    .solutionBanner{
        width: 100%;
        height: 600px;
        position: relative;
        img{
            width: 100%;
            height: 100%;
        }
        p{
            position: absolute;
            top:220px;
            left:0;
            right:0;
            margin: auto;
            font-size: 56px;
            color:#fff;
        }
    }
</style>