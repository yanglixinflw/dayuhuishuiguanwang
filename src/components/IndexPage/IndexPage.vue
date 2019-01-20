<template>
  <div class="block">
    <!-- 初始化height根据屏幕宽度设置 -->
    <el-carousel trigger="click" :height="carouselHeight" :interval="3000">
      <el-carousel-item v-for="item in imgUrl" :key="item">
        <img :src="item" alt>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<style lang="less">
.block {
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
      carouselHeight: ((window.screenWidth * 880) / 1900).toFixed(1) + "px",
      // 屏幕宽度
      screenWidth: ""
    };
  },
  mounted() {
    let clientWidth = document.documentElement.clientWidth;
    this.carouselHeight = ((clientWidth * 880) / 1900).toFixed(1) + "px";
    this.screenWidth = clientWidth;
    const that = this;
    window.onresize = () => {
      return (() => {
        // window.screenWidth = document.body.clientWidth;
        that.screenWidth = document.body.clientWidth;
        // that.carouselHeight =
        //   ((that.screenWidth * 880) / 1900).toFixed(1) + "px";
      })();
    };
  },
  watch: {
    // 监听屏幕宽度属性变化
    screenWidth(val)  {
      console.log(val)
      if(val>=1200){
        this.carouselHeight =
        ((val * 880) / 1900).toFixed(1) + "px";
      }else{
         this.carouselHeight =
        ((1200 * 880) / 1900).toFixed(1) + "px";
      }
      
    }
  }
};
</script>
