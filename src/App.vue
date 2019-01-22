<template>
  <div id="app">
    <keep-alive>
      <CommonHead/>
    </keep-alive>
    <div id="content">
      <router-view/>
    </div>
    <CommonFooter />
  </div>
</template>

<style lang="less">
// 暂定限制
#app{
  min-width: 1200px;
}
*{
  margin:0;padding:0
}
</style>

<script>
import CommonHead from '@/components/Common/CommonHead.vue'
import CommonFooter from '@/components/Common/CommonFooter.vue'
import BackToTop from '@/components/Common/BackToTop.vue'
export default {
  components:{
    CommonHead,
    CommonFooter,
    BackToTop
  }
}
</script>

