<template>
  <div id="app">
    <CommonHead/>
    <div id="content">
      <router-view/>
<<<<<<< HEAD
    </div> 
=======
    </div>
    <CommonFooter />
>>>>>>> 27ab44f2306e88a8cb75f891a5052c43dcac1837
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

