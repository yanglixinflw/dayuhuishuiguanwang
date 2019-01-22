<template>
  <div v-show="showButton" class="toTopButton" @click="backToTop()" title="返回顶部">
    <div class="content">
      <img src="../../assets/indexImg/top.png" alt>
    </div>
  </div>
</template>

<style lang="less" scoped>
.toTopButton {
  position: fixed;
  width: 60px;
  height: 60px;
  background: #fff;
  z-index: 100;
  right: 84px;
  bottom: 84px;
  box-shadow: 0 0 6px #2463cc;
  cursor: pointer;
}
.content {
  // font-size: 20px;
  // border-top:1px #2463CC solid;
  // width: 20px;
  // height: 28px;
  // color: #2463CC;
  // background: red;
  img {
    width: 27px;
    height: 27px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>

<script>
export default {
  name: "backToTop",
  data: function() {
    return {
      showButton: false
    };
  },
  mounted() {
    const that = this;
    //   this.showButton
    window.onmousewheel = () => {
      return (() => {
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop >= 400) {
          that.showButton = true;
        } else {
          that.showButton = false;
        }
      })();
    };
  },
  methods: {
    backToTop() {
        document.documentElement.scrollTop=0
        this.showButton = false
    }
  }
};
</script>

