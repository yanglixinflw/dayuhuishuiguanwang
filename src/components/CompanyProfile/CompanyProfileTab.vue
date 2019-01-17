<template>
    <div>
        <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
            <el-radio-button label="top">top</el-radio-button>
            <el-radio-button label="right">right</el-radio-button>
            <el-radio-button label="bottom">bottom</el-radio-button>
            <el-radio-button label="left">left</el-radio-button>
        </el-radio-group>
        <el-tabs :tab-position="tabPosition" style="height: 200px;">
            <el-tab-pane label="01">01</el-tab-pane>
            <el-tab-pane label="02">02</el-tab-pane>
            <el-tab-pane label="03">03</el-tab-pane>
            <el-tab-pane label="04">04</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
  export default {
      name:'companyProfileTab',
    data() {
      return {
        tabPosition: 'left'
      };
    }
  };
</script>