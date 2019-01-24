<template>
  <div class="solution" ondragstart="return false;">
    <div class="banner" >
      <img alt="解决方案banner图" src="../../assets/solution.jpg"/>
    </div>
    <div class="program">
        <el-menu>
            <el-menu-item v-for="item in programData" :key="item.id" index="item.id" >
                <router-link :to="{path: '/solution/' + item.id}" ><i :class="item.className"></i>{{item.displayName}}</router-link>
            </el-menu-item>
        </el-menu>
        <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
    name: "solution",
    data:function(){
      return{
          programData:[
              {className:'jieshuiIcon',displayName:'农村高效节水',id:0},
              {className:'yinshuiIcon',displayName:'农民饮水安全工程',id:1},
              {className:'wushuiIcon',displayName:'污水处理工程',id:2},
              {className:'hezhangzhiIcon',displayName:'智慧河长制工程',id:3},
          ],
      }
    },
    mounted:function(){
       
    },
};
</script>
<style lang="less" scoped>
.solution {
  .banner {
    img {
      width: 100%;
    //   height: 600px;
    }
  }
  .program {
    .el-menu {
        width:1200px;
        margin: 0 auto;
        position: relative;
        top: -135px;
        display: flex;
        justify-content: space-between;
        background-color: #2463cc;
        height: 168px;
        border:0;
        .el-menu-item{
            width: 100%;
            height: 100%;
            padding: 0 !important;
            text-align: center;
            &:hover{
                background-color:#1A54B5;
            }
            a{
                text-decoration: none;
                color:#ffffff;
                font-size:18px;
                font-weight:600;
                width: 100%;
                height: 100%;
                display: inline-block;
            }
        }
        .is-active{
            background-color:#1A54B5;
        }
    }
    .jieshuiIcon{
        display: block;
        width:70px;
        height: 70px;
        background: url(../../assets/jieshui.png) no-repeat;
        margin:30px auto 5px;
    }
    .yinshuiIcon{
        display: block;
        width:70px;
        height: 70px;
        background: url(../../assets/yinshui.png) no-repeat;
        margin:30px auto 5px;
    }
    .wushuiIcon{
        display: block;
        width:82px;
        height: 70px;
        background: url(../../assets/wushui.png) no-repeat;
        margin:30px auto 5px;
    }
    .hezhangzhiIcon{
        display: block;
        width:88px;
        height: 70px;
        background: url(../../assets/hezhangzhi.png) no-repeat;
        margin:30px auto 5px;
    }
    
  }
}
</style>

