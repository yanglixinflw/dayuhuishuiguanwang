<template>
  <div class="block">
    <!-- <span class="demonstration">Click 指示器触发</span> -->
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style lang="less">
.block{
  .el-carousel__container{
    height: 880px;
  }
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
}

</style>

<script>
export default {
  name: "IndexPage",
  props: {
  }
};
</script>
