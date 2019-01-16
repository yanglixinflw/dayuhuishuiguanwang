<template>
    <div class='head'>
        <el-row>
            <el-col :span="8">
                <div class="logoName">
                    大禹logo
                </div>
            </el-col>
            <el-col :span="16">
                <div class="tabs">
                    tab
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name:"CommonHead"
}
</script>

<style lang="less" scoped>
    .head{
        // display: flex;
        position:fixed;
        top:0;
        background-color: red;
        width: 100%;
        height: 68px; 
        line-height: 68px;
    }
</style>

