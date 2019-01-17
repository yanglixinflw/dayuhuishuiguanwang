<template>
  <div class="block">
    <el-carousel trigger="click" height="880px">
      <el-carousel-item v-for="item in imgUrl" :key="item">
        <img :src="item" alt=""/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style lang="less">
.block{
  // .el-carousel__item:nth-child(2n) {
  //    background-color: #99a9bf;
  // }
  // .el-carousel__item:nth-child(2n+1) {
  //    background-color: #d3dce6;
  // }
  img{
    height: 880px;
    width: 100%;
  }
  .el-carousel__indicator{
    padding: 12px 44px
  }
  .el-carousel__button{
    width: 60px;
    height: 4px;
    border-radius: 2px;
  }
  // .el-carousel__button :active{
  //   background: red;
  // }
  .el-carousel__arrow{
    height: 60px;
    width:60px;
    background: rgba(219,219,219,0.6);
    i{
      font-size: 24px;
    }
  }
}
</style>

<script>
export default {
  name: "IndexPage",
  data :function (){
    // console.log( require('../../assets/carousel1.jpg'))
    return{
      imgUrl:[
      require('../../assets/carousel1.jpg'),
      require('../../assets/carousel2.jpg'),
      require('../../assets/carousel3.jpg')]
    }
  }
};

</script>
