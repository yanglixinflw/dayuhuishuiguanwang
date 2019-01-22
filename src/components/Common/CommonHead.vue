<template>
  <div class="head">
    <el-row type="flex">
      <el-col :span="10">
        <div class="logoName">
          <img src='../../assets/logo.png' @click="handleLogoClick"/>
        </div>
      </el-col>
      <el-col :span="14">
        <div class="navMenu">
          <el-menu 
            :default-active="activeIndexChange" 
            mode="horizontal" 
            @select="handleSelect"
          >
            <el-menu-item index="/">
              <router-link to="/">首页</router-link>
            </el-menu-item>
            <el-menu-item index="/solution">
              <router-link to="/solution">解决方案</router-link>
            </el-menu-item>
            <el-menu-item index="/companyProfile">
              <router-link to="/companyProfile">公司介绍</router-link>
            </el-menu-item>
            <el-menu-item index="/demoDevice">
              <!-- <router-link to="">演示系统</router-link> -->
              <a href="http://nysj.huishuiyun.com/#/login" target="_blank">演示系统</a>
            </el-menu-item>
            </el-menu>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import eventBus from '../../assets/eventBus/eventBus.js'
export default {
  name: "CommonHead",
    data() {
        return {
            activeIndex: window.location.pathname,
        };
    },
    methods: {
      // eventBus传递path
      handleSelect(key, keyPath) {
        eventBus.$emit('passSomeThing',key);
        this.activeIndex=key;
      },
      handleLogoClick(){
        this.activeIndex="/";
        eventBus.$emit('passSomeThing','/');
        this.$router.push('/');
      },
    },
    computed:{
      activeIndexChange:function(){
        this.activeIndex=window.location.pathname;
        console.log(this.activeIndex)
        return this.activeIndex
      }
    },
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
            cursor: pointer;
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
              a{
                display: block;
                text-decoration: none;
                height: 68px;
              }
            }
            .is-active{
              color:#2463CC;
              border-bottom: 2px solid #2463CC;
            }
          }
        }
    }
    @media(max-width: 1159px){
      .head{
        .navMenu{
          .el-menu-item{
            margin: 0 52px !important;
          }
        }
      }  
    }
</style>




