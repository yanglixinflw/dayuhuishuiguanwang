<template>
  <div id="app">
    <CommonHead/>
    <div id="content">
      <router-view/>
    </div> 
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
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

