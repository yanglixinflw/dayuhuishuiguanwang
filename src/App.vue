<template>
  <div id="app">
    <div id="nav">
       <CommonHead/>
    </div>
    <router-view/>
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
</style>

<script>
import CommonHead from '@/components/Common/CommonHead.vue'
export default {
  components:{
    CommonHead,
  }
}
</script>

