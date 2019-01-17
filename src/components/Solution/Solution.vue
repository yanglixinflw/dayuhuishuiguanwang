<template>
    <div class="solution">
        <div class="banner">
            <img alt="解决方案banner图" src="../../assets/solution.png"/>
        </div>
        <div class="program">
            <el-tabs type="border-card">
                <el-tab-pane>
                    <span slot="label">农村高效节水</span>
                    <span slot="label">农民饮水安全工程</span>
                    <span slot="label">污水处理工程</span>
                    <span slot="label">智慧河长制工程</span>
                </el-tab-pane>
                
            </el-tabs>
        </div>
    </div>
</template>
<script>
    export default {
        name:"solution",  
    }
</script>
<style lang="less" scoped>
    .solution{
        .banner{
            img{
            width: 100%;
            height: 600px;
            }
        }
        .program{

        }
    }
</style>