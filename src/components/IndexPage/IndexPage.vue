<template>
  <div class="indexPage" ondragstart="return false;">
    <!-- 初始化height根据屏幕宽度设置 -->
    <el-carousel trigger="click" :height="carouselHeight" :interval="3000">
      <el-carousel-item v-for="item in imgUrl" :key="item">
        <img :src="item" alt>
      </el-carousel-item>
    </el-carousel>
    <!-- 第一部分宣传内容 -->
    <main class="main1">
      <section>
        <h4>关于我们
          <br>
          <span>ABOUT US</span>
          <br>
          <img class="wave" src="../../assets/icon.png" alt>
        </h4>
        <h3>最有价值解决方案提供商、系统建设提供商、运行维护服务商</h3>
        <p>
          杭州大禹慧水科技有限公司，系大禹节水集团股份有限公司（股票代码：300021）
          旗下全资子公司。大禹慧水科技是以水利行业专家为班底，依托于大禹节水集团在水利建设方面的资源优势，
          所成立的水利信息化专业公司，旨在利用物联网、大数据、云计算等新一代信息技术，
          推进传统水利业务的深度整合，构建集人工智能和行业专家团队为一体的综合性智慧水利云平台，
          为水利行业信息化的建设和发展提供先进的技术与优质的服务。
        </p>
        <router-link to="/companyProfile">
          <div class="more">
            More
            <span>&rarr;</span>
          </div>
        </router-link>
        <div class="picture">
          <img src="../../assets/water1.png" class="pic1">
          <img src="../../assets/water2.png" class="pic2">
          <img src="../../assets/water3.png" class="pic3">
        </div>
      </section>
    </main>
    <main class="main2">
      <!-- 过渡椭圆 -->
      <div class="transition">
        <img src="../../assets/transition.png">
      </div>
      <div class="caseBody">
        <section>
          <h4>案例展示
            <br>
            <span>CASE PRESENTATION</span>
            <br>
            <img class="wave" src="../../assets/wave.png" alt>
          </h4>
          <div class="artBody" >
            <!-- 渲染中间部分 -->
              <article 
              class="caseArt" 
              v-for="item in caseData" 
              :class='item.id=="01"?"case01":item.id=="04"?"case04":""'
              :key='item.id'
              @click='clickHandler(item.path)'
              >
                <h1>
                  <span class="num">{{item.id}}</span>
                  <div class="partition">{{item.word}}</div>
                </h1>
                <h6>{{item.title}}</h6>
                <p class="words">
                  {{item.part}}
                </p>
                <p class="pic">
                  <img :src="item.img" alt>
                </p>
                <div class="more">
                  <span class="word">More</span>
                  <span class="jt">&rarr;</span>
                </div>
              </article>
          </div>
        </section>
      </div>
      <div class="transition">
        <img src="../../assets/transition.png" class="bottomTran">
      </div>
    </main>
  </div>
</template>
<style lang="less">
.indexPage {
  img {
    height: 100%;
    width: 100%;
  }
  .el-carousel__indicator {
    padding: 12px 20px;
  }
  .el-carousel__button {
    width: 60px;
    height: 4px;
    border-radius: 2px;
  }
  .el-carousel__indicator.is-active button {
    background: #1182f0;
  }
  // .el-carousel__button :active{
  //   background: red;
  // }
  .el-carousel__arrow {
    height: 60px;
    width: 60px;
    background: rgba(219, 219, 219, 0.6);
    i {
      font-size: 24px;
    }
  }
  .main1 {
    width: 1200px;
    margin: 65px auto 0;
    // border: 1px red solid;
    section {
      position: relative;
      h4 {
        color: #2463cc;
        font-size: 14px;
        font-weight: 600;
        span {
          font-size: 28px;
          font-weight: 800;
        }
        .wave {
          width: 40px;
        }
      }
      h3 {
        font-size: 20px;
        margin: 22px 0 22px;
      }
      p {
        width: 600px;
        font-size: 12px;
        color: #636363;
      }
      a {
        text-decoration: none;
      }
      .more {
        display: inline-block;
        width: 123px;
        height: 33px;
        border: 1px #4d4d4d solid;
        text-align: center;
        line-height: 33px;
        margin-top: 45px;
        border-radius: 4px;
        color: #4d4d4d;
        &:hover {
          color: #1182f0;
          border-color: #1182f0;
          span {
            display: none;
          }
        }
        span {
          margin-left: 20px;
        }
      }
      .picture {
        // float: right;
        position: absolute;
        right: 0;
        top: 44px;
        // border: 1px red solid;
        .pic1 {
          height: 312px;
          width: 256px;
        }
        .pic2 {
          position: relative;
          top: -115px;
          width: 212px;
          height: 260px;
        }
        .pic3 {
          position: absolute;
          z-index: 10;
          left: 130px;
          top: -219px;
          width: 184px;
          height: 226px;
        }
      }
    }
  }
  .transition {
    height: 112px;
    // background: white;
    .bottomTran {
      transform: rotate(180deg);
    }
  }
  .main2 {
    position: relative;
    top: 108px;
  }
  .caseBody {
    height: 508px;
    background: #2463cc;
    section {
      width: 1200px;
      margin: 0 auto;
    }
    h4 {
      color: #ffffff;
      font-size: 14px;
      font-weight: 600;
      text-align: center;
      padding-top: 32px;
      span {
        font-size: 28px;
        font-weight: 800;
      }
      .wave {
        width: 40px;
      }
    }
    .artBody {
      display: flex;
      justify-content: space-between;
      margin-top: 38px;
      .caseArt {
        display: inline-block;
        width: 286px;
        height: 450px;
        border: 1px #2463cc solid;
        background: #ffffff;
        z-index: 10;
        position: relative;
        box-shadow: 0px 6px 20px rgba(17, 130, 240, 0.2);
        color: #888;
        // font-size: 50px;
        text-align: center;
        cursor: pointer;
        &:hover {
          color: #2463cc;
          h6 {
            color: #2463cc;
          }
          .words {
            display: none;
          }
          .pic {
            display: block;
          }
          .partition {
            &::before,
            &::after {
              background: #2463cc;
            }
          }
          .more {
            text-align: center;
            color: #2463cc;
            border-bottom: 1px #2463cc solid;
            .jt {
              display: none;
            }
          }
        }
        h1 {
          // text-align: center;
          margin-top: 8px;
          .num {
            font-size: 50px;
          }
        }
        h6 {
          margin-top: 22px;
          font-size: 18px;
          color: #000;
        }
        .words {
          font-size: 14px;
          margin-top: 40px;
          padding: 0 22px;
          line-height: 22px;
        }
        .pic {
          margin-top: 15px;
          display: none;
          img {
            height: 186px;
          }
        }
        .partition {
          margin: 0 auto;
          height: 10px;
          font-size: 16px;
          &::before {
            content: "";
            width: 52px;
            height: 1px;
            background: #888888;
            // border: 1px red solid;
            display: inline-block;
            position: relative;
            top: -5px;
            margin-right: 10px;
          }
          &::after {
            content: "";
            width: 52px;
            height: 1px;
            background: #888888;
            // border: 1px red solid;
            display: inline-block;
            position: relative;
            top: -5px;
            margin-left: 10px;
          }
        }
        .more {
          width: 114px;
          color: #545454;
          border-bottom: 1px #545454 solid;
          position: absolute;
          font-size: 14px;
          bottom: 40px;
          left: 50%;
          text-align: left;
          transform: translate(-50%, 0);
          .word {
            margin: 0 25px 0 25px;
          }
        }
      }
      .case01 {
        transform: perspective(210px) rotateY(2deg) translateY(-5px);
        height: 460px;
      }
      .case04 {
        transform: perspective(210px) rotateY(-2deg) translateY(-5px);
        height: 460px;
      }
    }
  }
}
</style>

<script>
export default {
  name: "IndexPage",
  data: function() {
    // console.log( require('../../assets/carousel1.jpg'))
    return {
      imgUrl: [
        require("../../assets/carousel1.jpg"),
        require("../../assets/carousel2.jpg"),
        require("../../assets/carousel3.jpg")
      ],
      // 轮播图高度
      carouselHeight: "",
      // 案例展示内容
      caseData: [
        {
          id: "01",
          word: "One",
          title: "农村高效节水工程",
          path: "/solution/0",
          part: `系统利用信息采集、网络传输、
                  数据存储与分析、自动控制等先进技术，
                  通过网络传输将传感器采集到的数据
                  (土壤墒情、田间气象、流量统计、交易信息等)
                  上传到服务器...`,
          img:require('../../assets/indexImg/save.jpg')
        },
        {
          id: "02",
          word: "Two",
          title: "农村饮水安全工程",
          path: "/solution/1",
          part: ` 农村饮水安全工程信息化系统是一个全面的管理系统。
                  该系统由硬件系统和软件系统构成，硬件系统包含计算机、
                  自动控制、通讯技术和传感器技术，实现信息采集、信息传输...`,
          img:require('../../assets/indexImg/safety.jpg')
        },
        {
          id: "03",
          word: "Three",
          title: "污水处理工程",
          path: "/solution/2",
          part: ` 系统集成了完善的运维管理功能，打造厂站工艺流程、
                  生产数据、设备运行参数、视频监控信息等多维监管手段，
                  通过生产过程监控和厂区巡检管理，实现了生产工艺、持续监测...`,
          img:require('../../assets/indexImg/sewage.png')
        },
        {
          id: "04",
          word: "Four",
          title: "智慧河长制工程",
          path: "/solution/3",
          part: `河长制管理信息系统围绕河长制工作的实际需求，
                  基于河道网格化管理体系，依托GIS地理信息、GPS、
                  基站定位、云计算、物联网、大数据、移动通信网等技术，同时融合“受理...`,
          img:require('../../assets/indexImg/wisdom.jpg')
        }
      ]
    };
  },
  mounted() {
    // 初始化轮播高度
    let clientWidth = document.documentElement.clientWidth;
    this.carouselHeight = ((clientWidth * 880) / 1900).toFixed(1) + "px";
    // this.transitionWidth = clientWidth+"px";
    const that = this;
    window.onresize = () => {
      return (() => {
        let clientWidth = document.body.clientWidth;
        // console.log(clientWidth)
        if (clientWidth >= 1200) {
          that.carouselHeight = ((clientWidth * 880) / 1900).toFixed(1) + "px";
          // that.transitionWidth=clientWidth+"px"
        } else {
          that.carouselHeight = ((1200 * 880) / 1900).toFixed(1) + "px";
          // that.transitionWidth="1200px"
        }
      })();
    };
  },
  methods:{
    clickHandler(path){
      this.$router.push(path)
    }
  }
};
</script>
