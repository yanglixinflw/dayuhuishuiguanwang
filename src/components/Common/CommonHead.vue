<template>
  <div v-bind:class="headClassName">
    <el-row type="flex">
      <el-col :span="10">
        <div class="logoName">
          <img v-if="headClassName=='isIndexHead'" src="../../assets/logoIndex.png" @click="handleLogoClick" />
          <img v-else src="../../assets/logo.png" @click="handleLogoClick" />
        </div>
      </el-col>
      <el-col :span="14">
        <div class="navMenu">
          <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
            <el-menu-item  v-for="item in navMenu" :key="item.id" :index="item.path">
              <router-link :to="{path:item.path}">{{item.displayName}}</router-link>
            </el-menu-item>
            <li class="demoDevice">
               <a href="http://nysj.huishuiyun.com/#/login" target="_blank">演示系统</a>
            </li>
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
      navMenu:[
        {displayName:"首页",path:"/",id:0},
        {displayName:"解决方案",path:"/solution",id:1},
        {displayName:"公司介绍",path:"/companyProfile",id:2},
      ],
      activeIndex: window.location.pathname,
      headClassName:"",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      if(key !=='http://nysj.huishuiyun.com/#/login'){
        this.activeIndex = key;
      }
      this.activeIndex=window.location.pathname
    },
    handleLogoClick() {
      this.activeIndex = "/";
      this.$router.push("/");
    }
  },
  watch:{
    $route:{
      handler:function(val,oldVal){
        //do Something 判断是否为主页
        let pathname = val.path;
        this.headClassName=pathname=='/'?"isIndexHead":"head";
        this.activeIndex=window.location.pathname
        if(window.location.pathname.indexOf("/solution")>-1){
          this.activeIndex="/solution"
        }
        //迫使 Vue 实例重新渲染。
        this.$forceUpdate()
      },
      //深度观察监听
      deep:true
    }
  },
  mounted(){
    this.headClassName = window.location.pathname=='/'?"isIndexHead":"head"
    if(window.location.pathname.indexOf("/solution")>-1){
      this.activeIndex="/solution"
    }
  },
};
</script>

<style lang="less" scoped>
.head {
  width: 100%;
  height: 68px;
  line-height: 68px;
  position: relative;
  z-index: 10;
  .logoName {
    text-align: center;
    img {
      position: relative;
      top: 20px;
      cursor: pointer;
    }
  }
  .navMenu {
    text-align: center;
    .el-menu--horizontal {
      border-bottom: 0;
      background-color: transparent;
      .demoDevice{
        display: inline-block;
        float: left;
        width: 56px;
        height: 68px;
        line-height: 90px;
        padding: 0;
        margin: 0 58px;
        color: #888888;
        font-size: 12px;
        &:hover {
          background-color: transparent;
        }
        a {
          display: block;
          text-decoration: none;
          height: 68px;
          font-size: 14px;
          box-sizing: border-box;
          color: #888888;
          &:active {
            font-weight: bold;
          }
          &:hover{
            font-weight: bold;
          }
        }
      }
      .el-menu-item {
        width: 56px;
        height: 68px;
        line-height: 90px;
        padding: 0;
        margin: 0 58px;
        color: #888888;
        font-size: 12px;
        &:hover {
          background-color: transparent;
        }
        a::after{
            content: '';
            width: 0;
            height: 2px;
            background-color: #2463cc;
            position: absolute;
            left: 50%;
            bottom: -2px;
            transform: translateX(-50%);
            transition: .3s linear;
          }
        a {
          display: block;
          text-decoration: none;
          height: 68px;
          font-size: 14px;
          box-sizing: border-box;
          color: #888888;
          &:active {
            font-weight: bold;
          }
          &:hover{
            font-weight: bold;
          }
          &:hover::after{
            width: 56px;
          }
        }
      }
      .is-active {
        color: #2463cc;
        border-bottom: 2px solid #2463cc;
        a {
          font-weight: bold;
        }
      }
    }
  }
}
.isIndexHead {
  width: 100%;
  height: 68px;
  line-height: 68px;
  position: relative;
  z-index: 10;
  .logoName {
    text-align: center;
    img {
      position: relative;
      top: 20px;
      cursor: pointer;
    }
  }
  .navMenu {
    text-align: center;
    .el-menu--horizontal {
      border-bottom: 0;
      background-color: transparent;
      .demoDevice{
        color: #fff;
        width: 56px;
        height: 68px;
        line-height: 90px;
        padding: 0;
        margin: 0 58px;
        font-size: 12px;
        display: inline-block;
        float: left;
        &:hover {
          background-color: transparent;
        }
        a {
          display: block;
          text-decoration: none;
          height: 68px;
          font-size: 14px;
          color: #fff;
          &:active {
            font-weight: bold;
          }
          &:hover{
            font-weight: bold;
          }
        }
      }
      .el-menu-item {
        color: #fff;
        width: 56px;
        height: 68px;
        line-height: 90px;
        padding: 0;
        margin: 0 58px;
        font-size: 12px;
        &:hover {
          background-color: transparent;
        }
        a::after{
            content: '';
            width: 0;
            height: 2px;
            background-color: #fff;
            position: absolute;
            left: 50%;
            bottom: -2px;
            transform: translateX(-50%);
            transition: .3s linear;
          }
        a {
          display: block;
          text-decoration: none;
          height: 68px;
          font-size: 14px;
          color: #fff;
          &:active {
            font-weight: bold;
          }
          &:hover{
            font-weight: bold;
          }
          &:hover::after{
            width: 56px;
          }
        }
      }
      .is-active {
        color: #fff;
        border-bottom: 2px solid #fff;
        a {
          font-weight: bold;
        }
      }
    }
  }
}
  
@media (max-width: 1159px) {
  .head {
    .navMenu {
      .el-menu-item {
        margin: 0 52px !important;
      }
    }
  }
  .isIndexHead {
    .navMenuNavMenu{
      .el-menu-item {
        margin: 0 52px !important;
      }
    }
  }
}
  

</style>




