<template>
  <div class="footer">
    <div class="informationBg" v-bind:class="pathNameChange">
      <div class="information">
        <div class="qrCode">
          <img src="../../assets/QRcode.png">
          <p>官网二维码</p>
        </div>
        <div class="noPublic">
          <img src="../../assets/Nopublic.png">
          <p>微信公众号</p>
        </div>
        <div class="contact">
          <div style="display:flex;width:166%;justify-content: space-between;">
            <p class="telephone">0571-82215904</p>
            <div>
              <p class="mailbox">邮箱：hskj@dyjs.com</p>
              <p class="caseNumber">12345678910</p>
            </div>
          </div>
          <p class="company">杭州大禹慧水科技有限公司</p>
          <p class="address">地址：杭州市萧山区民和路481</p>
          <p class="address">号联合中心A座2002-1室</p>
        </div>
      </div>
    </div>
    <div class="footNavList">
      <ul>
        <li v-for="item in solutionNavMenu" :key="item.path">
          <router-link :to="{path: '/solution/' + item.path}">{{item.displayName}}</router-link>
        </li>
        <!-- <li>农村高效节水工程</li>
        <li>农村饮水安全工程</li>
        <li>污水处理系统工程</li>
        <li>智慧河长制系统工程</li> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonFooter",
  data: function() {
    return {
      solutionNavMenu:[
        {displayName:'农村高效节水工程',path:'0'},
        {displayName:'农村饮水安全工程',path:'1'},
        {displayName:'污水处理系统工程',path:'2'},
        {displayName:'智慧河长制系统工程',path:'3'},
      ],
      pathNameChange:""
    };
  },
   watch:{
    $route:{
      handler:function(val,oldVal){
        let pathname = window.location.pathname;
        this.pathNameChange=pathname=='/'?null:"notIndexFooter"
        this.$forceUpdate()
      },
      //深度观察监听
      deep:true
    }
  },
  mounted(){
    let pathname = window.location.pathname;
    this.pathNameChange=pathname=='/'?null:"notIndexFooter"
  }
};
</script>
<style lang="less" scoped>
.notIndexFooter {
  padding-top: 116px !important;
}
.footer {
  width: 100%;
  .informationBg {
    width: 100%;
    padding-top: 228px;
    background: url(../../assets/footerBg.png) no-repeat 100%;
    .information {
      display: flex;
      width: 48%;
      margin: 0 auto 26px;
      .qrCode {
        p {
          text-align: center;
        }
      }
      .noPublic {
        margin-left: 22px;
        p {
          text-align: center;
        }
      }
      .contact {
        margin-left: 30px;
        .telephone {
          font-size: 28px;
          font-weight: 800;
          font-style: italic;
          color: #535353;
        }
        .mailbox {
          margin-top: 5px;
          margin-bottom: 10px;
          font-size: 14px;
          color: #535353;
        }
        .caseNumber {
          font-size: 14px;
          color: #535353;
        }
        .company {
          font-size: 14px;
          color: #535353;
        }
        .address {
          font-size: 14px;
          color: #535353;
          margin-top: 5px;
        }
      }
    }
  }
  .footNavList {
    width: 73%;
    height: 82px;
    margin: 0 auto;
    border-top: 2px solid #979797;
    ul {
      margin-top: 12px;
      padding: 0;
      list-style: none;
      display: flex;
      justify-content: space-between;
      li {
        width: 100%;
        border-left: 1px solid #c0c0c0;
        
        &:hover {
          color: #2463cc;
          cursor: pointer;
        }
        a{
          text-decoration: none;
          display: inline-block;
          width: 100%;
          font-size: 14px;
          color: #979797;
          text-align: center;
        }
      }
      li:first-child {
        border-left: 0;
      }
    }
  }
}
</style>


