<template>
  <div class="head">
    <el-row>
      <el-col :span="10">
        <div class="logoName">
          <img src='../../assets/logo.png' />
        </div>
      </el-col>
      <el-col :span="14">
        <div class="navMenu">
          <el-menu 
            :default-active="activeIndex" 
            class="el-menu-demo" 
            mode="horizontal" 
            @select="handleSelect"
            router
          >
            <el-menu-item index="/">
              <!-- <router-link to="">Home</router-link> -->
              首页
            </el-menu-item>
            <el-menu-item index="/about">
              <!-- <router-link to="">About</router-link> -->
              解决方案
            </el-menu-item>
            <el-menu-item index="/companyProfile">
              <!-- <router-link to="">公司介绍</router-link> -->
              公司介绍
            </el-menu-item>
            <el-menu-item index="/demoDevice">
              <!-- <router-link to="">演示系统</router-link> -->
              演示系统
            </el-menu-item>
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
            activeIndex: '/',
        };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key,keyPath);
        console.log(this)
      }
    }
  
};
</script>

<style lang="less" scoped>
    .head{
        // display: flex;
        position:fixed;
        top:0;
        background-color: #fff;
        width: 100%;
        height: 68px; 
        line-height: 68px;
        .logoName{
          img{
            position: relative;
            top: 20px;
          }
        }
        .navMenu{
          .el-menu--horizontal{
            border-bottom:0;
            .el-menu-item{
              height: 68px;
              line-height: 90px;
              padding: 0;
              margin: 0 58px ;
              color: #888888;
              font-size: 12px;
            }
            .is-active{
              color:#3E71D0;
              border-bottom: 2px solid #3E71D0;
            }
          }
        }
    }
</style>
<style lang="less">
.navMenu{
          .el-menu--horizontal{
            border-bottom:0;
            .el-menu-item{
              height: 68px;
              line-height: 90px;
              padding: 0;
              margin: 0 58px ;
              color: #888888;
              font-size: 12px;
            }
            .is-active{
              color:#3E71D0;
              border-bottom: 2px solid #3E71D0;
            }
          }
        }
</style>
>




