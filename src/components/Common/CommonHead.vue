<template>
  <div class="head">
    <el-row>
      <el-col :span="8">
        <div class="logoName">大禹logo</div>
      </el-col>
      <el-col :span="16">
        <div class="navMenu">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">解决方案</el-menu-item>
            <el-menu-item index="3">公司介绍</el-menu-item>
            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">演示系统</a></el-menu-item>
            </el-menu>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "CommonHead",
    data() {
        return {
            activeIndex: '1',
        };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  
};
</script>

<style lang="less" scoped>
.head {
  // display: flex;
  position: fixed;
  top: 0;
  background-color: #ffffff;
  width: 100%;
  height: 68px;
  line-height: 68px;
}
</style>
<style lang="less">
    .el-menu.el-menu--horizontal{
        border-bottom:0;
    }
    .el-menu--horizontal{
        .el-menu-item{
            height: 68px;
            line-height:68px;
            padding:0;
            margin:0 58px;
        }
    }
</style>



