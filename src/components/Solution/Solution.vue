<template>
  <div class="solution" ondragstart="return false;">
    <div class="banner" >
      <img alt="解决方案banner图" src="../../assets/solution.jpg"/>
    </div>
    <div class="program">
        <el-tabs stretch @tab-click="handleTabClick" >
            <el-tab-pane v-for="item in programData" :key="item.name">
                <span slot="label"><i :class="item.name"></i>{{item.displayName}}</span>
                <div class="proContent">
                    <div class="proTitle">{{item.displayName}}</div>
                </div>
            </el-tab-pane>
            <div class="proInfo">
                <div class="proName">云南省陆良恨虎坝中型灌区</div>
                <span class="proPoint">全国首个引入社会资本投资的农田水利改革试点PPP项目</span>
            </div>
            <div class="proItem">
                <img src='../../assets/lulianghen.jpg' alt='lulianghen'/>
                <div class="itemInfo">
                    <div class="info1">"陆良模式"获国家领导人汪洋点赞全国范围复制推广</div>
                    <div class="info2">
                        <div><span>1/10</span><p>用水成本仅为之前</p></div>
                        <div><span>0.79</span><p>元/立方米</p></div>
                    </div>
                    <div class="info2">
                        <div><span>120</span><p>亩均节约用水120 立方米以上</p></div>
                        <div><span>90%</span><p>节约用水</p></div>
                    </div>
                    <div class="info1">传统拉水灌溉变为便捷的刷卡灌溉</div>
                </div>
                <div class="colorBlock"></div>
            </div>
            <div class="proInfo">
                <div class="proName">云南元谋11.4万亩高效节水灌溉项目</div>
                <span class="proPoint">云南省水利厅批准云南农田水利改革试点项目</span>
            </div>
            <div class="proItem">
                <img class="yuanmo" src='../../assets/yuanmo.jpg' alt='yuanmo' />
            </div>
            <div class="proInfo">
                <div class="proName">云南祥云5万亩高效节水灌溉PPP项目</div>
                <span class="proPoint">精准扶贫 滋润5万亩良田</span>
            </div>
            <div class="proItem">
                <div class="colorStroke"></div>
                <div class="itemXiangYun">
                    <div class="xiangyunInfo">
                        <div class="part1">总投资<span>1.48</span>亿元</div>
                        <div class="part2">高效灌溉面积<span>5</span>万亩</div>
                        <p class="part3">缓解水资源供需矛盾，提升农业 抗旱保守能利</p>
                    </div>
                    <img src='../../assets/lulianghen.jpg' alt='xiangyun'/>
                </div>
            </div>
            <!-- <el-tab-pane>
                <span slot="label"><i class="yinshuiIcon"></i>农民饮水安全工程</span>
                <div class="proContent">
                    <div class="proTitle">农民饮水安全工程</div>
                </div>
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label"><i class="wushuiIcon"></i>污水处理工程</span>
                <div class="proContent">
                    <div class="proTitle">污水处理工程</div>
                </div>
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label"><i class="hezhangzhiIcon"></i>智慧河长制工程</span>
                <div class="proContent">
                    <div class="proTitle">智慧河长制工程</div>
                </div>
            </el-tab-pane> -->
        </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: "solution",
  data:function(){
      return{
          programData:[
              {name:'jieshuiIcon',displayName:'农村高效节水'},
              {name:'yinshuiIcon',displayName:'农民饮水安全工程'},
              {name:'wushuiIcon',displayName:'污水处理工程'},
              {name:'hezhangzhiIcon',displayName:'智慧河长制工程'},
          ]
      }
  },
  methods: {
      handleTabClick(tab, event) {
        console.log(tab);
      },
    }
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
    .el-tabs {
      width: 67.5%;
      margin: 0 auto;
      position: relative;
      top: -135px;
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
    .proContent{
        padding-left: 39px;
        .proTitle{
            border-left:4px solid #2463CC;
            height: 20px;
            line-height: 20px;
            color:#2d2d2d;
            font-size: 16px;
            padding-left:10px;  
        }
    }
    .proInfo{
        width: 100%;
        border:2px solid #2463CC;
        margin-top:25px;
        height: 136px;
        box-shadow: 0px 0px 48px -21px #1182ED;
        box-sizing: border-box;
        .proName{
            margin-top:44px;
            margin-left: 44px;
            font-size: 26px;
            font-weight: 800;
            color: #555555;
        }
        .proPoint{
            margin-top:14px;
            margin-left: 44px;
            font-size: 12px;
            color: #757575;
        }
    }
    .proItem{
        position: relative;
        width:93.45%;
        margin:45px auto 67px;
        .yuanmo{
            width:100%;
            height: 100%;
            box-shadow: 0px 0px 48px -21px #1182ED;
        }
        .itemInfo{
            position: absolute;
            top:63px;
            left:360px;
            z-index: 10;
            width:51%;
            height: 276px;
            background-color:#fff; 
            display: flex;
            flex-direction:column;
            justify-content:space-around;
            box-shadow: 0px 0px 48px -21px #1182ED; 
            .info1{
                font-size: 16px;
                color:#757575;
                margin-left:34px;   
            }
            .info2{
                display: flex;
                margin-left:34px;
                div{
                    font-size: 16px;
                    color:#757575;
                    font-weight: normal;
                    margin-right: 56px;
                    width: 198px;
                    span{
                        font-size: 30px;
                        color:#2463cc;
                        font-family: Arial;
                        font-weight: bold;
                        display: inline-block;
                        width: 62px;
                        margin-right: 8px;
                        position: relative;
                    }
                    p{
                        width: 128px;
                        display: inline-block;
                    }
                }
            }
            

        }
        .colorBlock{
            width:100px;
            height: 84px;
            background-color:#4B7ED5; 
            position: absolute;
            right:17.3%;
            top:274px;
        }
        .colorStroke{
            width:311px;
            height: 222px;
            border:22px solid #2463CC;
            left:71px;
            top:244px;
            box-sizing: border-box;
            position: absolute;
            z-index: -10;
        }
        .itemXiangYun{
            display: flex;
            .xiangyunInfo{
                width: 335px;
                height: 400px;
                background-color: #fff;
                margin-left: 12.25%;
                box-shadow: 0px 0px 48px -21px #1182ED;
                overflow: hidden;
                text-overflow:ellipsis;
                .part1{
                    margin-top:104px;
                    margin-left:58px;
                    font-size: 16px;
                    color:#757575;
                    font-weight: 500;
                    span{
                        font-size: 30px;
                        color:#2463cc;
                        font-weight: 600;
                        font-family: Arial;
                    }
                }
                .part2{
                    margin-top:48px;
                    margin-left:58px;
                    font-size: 16px;
                    color:#757575;
                    font-weight: 500;
                    span{
                        font-size: 30px;
                        color:#2463cc;
                        font-weight: 600;
                        font-family: Arial;
                    }
                }
                .part3{
                    margin-top:85px;
                    margin-left: 58px;
                    margin-right: 34px;
                    font-size: 16px;
                    color:#757575;
                    font-weight: 400;
                }
            }
            img{
                width: 50.83%;
            }
        }
        
    }
  }
}
</style>
<style lang="less">
.program {
    .el-tabs {
        .el-tabs__header {
            background-color: #2463cc;
            height: 162px;
            width:93.7%;
            margin:0 auto 35px ;
            box-shadow: 0px 0px 48px -14px #1182ED;
            .el-tabs__nav-wrap {
                height: 100%;
                 &::after{
                    height: 0;
                }
                .el-tabs__nav-scroll {
                    height: 100%;
                    .el-tabs__nav {
                        height: 100%;
                        .el-tabs__active-bar {
                            width:0;
                            height: 0 !important;
                            background-color: transparent;
                        }
                        .el-tabs__item{
                            height: 100%;
                            color:#ffffff;
                            font-size:18px;
                            font-weight:600;
                            text-align:center;
                            &:hover{
                                background-color:#1A54B5;
                            }
                        }
                    }
                }
            }
        }
        .el-tabs__content{
            width:100%;
            overflow:visible;
            margin:0 auto;
        }
    }
  }
</style>
