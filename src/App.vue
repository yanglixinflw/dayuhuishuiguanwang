<template>
  <div id="app">
    <CommonHead/>
    <div id="content">
      <router-view/>
    </div>
    <CommonFooter />
  </div>
</template>

<style lang="less">
#content{
  margin-top: 68px;
}
</style>

<script>
import CommonHead from '@/components/Common/CommonHead.vue'
import CommonFooter from '@/components/Common/CommonFooter.vue'
export default {
  components:{
    CommonHead,
    CommonFooter,
  }
}
</script>

