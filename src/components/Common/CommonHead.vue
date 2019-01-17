<template>
  <div class="head">
    <el-row type="flex">
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
            <el-menu-item index="/solution">
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
            activeIndex: window.location.pathname,
        };
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key,keyPath);
        this.activeIndex=key
      }
    }
  
};
</script>

<style lang="less" scoped>
    .head{
        // display: flex;
        // position:fixed;
        // top:0;
        background-color: #fff;
        width: 100%;
        height: 68px; 
        line-height: 68px;
        .logoName{
          text-align: center;
          img{
            position: relative;
            top: 20px;
          }
        }
        .navMenu{
          text-align: center;
          .el-menu--horizontal{
            border-bottom:0;
            .el-menu-item{
              width:50px;
              height: 68px;
              line-height: 90px;
              padding: 0;
              margin: 0 58px ;
              color: #888888;
              font-size: 12px;
            }
            .is-active{
              color:#2463CC;
              border-bottom: 2px solid #2463CC;
            }
          }
        }
    }
    @media(max-width: 1139px){
      .head{
        .navMenu{
          .el-menu-item{
            margin: 0 52px !important;
          }
        }
      }  
    }
</style>




