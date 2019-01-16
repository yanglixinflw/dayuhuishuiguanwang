<template>
  <div id="app">
    <CommonHead/>
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="less">
#content{
  margin-top: 68px;
}
</style>

<script>
import CommonHead from '@/components/Common/CommonHead.vue'
export default {
  components:{
    CommonHead,
  }
}
</script>

