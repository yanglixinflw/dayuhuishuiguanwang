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
            <span>-></span>
          </div>
        </router-link>
        <div class="picture">
          <img src="../../assets/water1.png" class="pic1">
          <img src="../../assets/water2.png" class="pic2">
          <img src="../../assets/water3.png" class="pic3">
        </div>
      </section>
    </main>
    <!-- 过渡椭圆 -->
    <div class="transition">
      <img src="../../assets/transition.jpg">
    </div>
    <main class="main2"></main>
    <div class="transition">
      <img src="../../assets/transition.jpg" class="bottomTran">
    </div>
  </div>
</template>
<style lang="less">
.indexPage {
  img {
    height: 100%;
    width: 100%;
  }
  .el-carousel__indicator {
    padding: 12px 44px;
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
    margin: 65px auto 85px;
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
    height: 508px;
    background: #2463cc;
    // position: relative;
    // top:-54px;
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
      carouselHeight: ((window.screenWidth * 880) / 1900).toFixed(1) + "px"
      // 过渡椭圆宽度
      // transitionWidth: ''
    };
  },
  mounted() {
    // 初始化轮播高度+过渡椭圆宽度
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
  }
};
</script>
