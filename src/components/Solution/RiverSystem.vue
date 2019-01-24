<template>
    <div class="proContent">
        <div class="proTitle">智慧河长制工程</div>
        <div class="proInfo">
            <span class="proPoint">智慧河长制解决方案由大禹慧水科技整合大禹节水集团，杭州水利水电勘测设计院等资源，联合河长科技共同设计研发。目前智慧河长制管理信息系统已经接入市级河道54条，市级河长40人，县级河道1125条，县级河长897人，镇级河道3275条，镇级河长2502人，饮用水源地39个，监测断面681个，污染源2745个，污水处理厂228个，排污（水）口1221个，农村污水处理设施1556个，视频监控1957个，一河一策633个，河道公示牌924个，共编写巡河日志148515篇，河道事件835件，随手拍9870次。</span>
        </div>
        <div class="proItem">
            <div class="itemInfo" v-for="item in riverSystem" :key="item.itemName">
                <img :src="item.picUrl" alt='hezhangzhiItem' />
                <h4>{{item.itemName}}</h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'riverSystem',
    data:function(){
        return {
            riverSystem:[
                {itemName:"浙江省钱塘江河长制管理信息系统",picUrl:require('../../assets/hezhangzhiItem1.jpg')},
                {itemName:"诸暨市河长制管理信息系统",picUrl:require('../../assets/hezhangzhiItem1.jpg')},
                {itemName:"金东市“智慧治水”暨河长制信息系统平台",picUrl:require('../../assets/hezhangzhiItem1.jpg')},
                {itemName:"嘉兴市河长信息管理系统平台建设",picUrl:require('../../assets/hezhangzhiItem2.jpg')},
                {itemName:"金华市河长信息管理系统平台建设",picUrl:require('../../assets/hezhangzhiItem1.jpg')},
                {itemName:"衢州市河长信息管理系统平台建设",picUrl:require('../../assets/hezhangzhiItem1.jpg')},
            ]
        }
    }
}
</script>
<style lang="less" scoped>
    .proContent{
        width: 67.26%;
        margin:0 auto;
        position: relative;
        top: -100px;
        .proTitle{
            border-left:4px solid #2463CC;
            height: 20px;
            line-height: 20px;
            color:#2d2d2d;
            font-size: 16px;
            padding-left:10px; 
            margin-left:39px; 
        }
        .proInfo{
            width: 100%;
            border:2px solid #2463CC;
            margin-top:25px;
            height: 136px;
            box-shadow: 0px 0px 48px -21px #1182ED;
            box-sizing: border-box;
            padding: 30px 38px;
            .proPoint{
                margin-top:14px;
                margin-left: 44px;
                font-size: 14px;
                color: #474747;
                line-height: 22px;
            }
        }
        .proItem{
            position: relative;
            width:1200px;
            margin:45px auto 67px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            .itemInfo{
                width: 380px;
                height: 412px;
                padding: 18px 14px;
                box-shadow: 0px 0px 48px -11px #1182ED;
                box-sizing: border-box;
                margin-top: 66px;
                h4::before{
                    content: '';
                    width: 58px;
                    height: 4px;
                    background-color: #458BF3;
                    position: absolute;
                    left:41%;
                    top:-22px;
                }
                h4{
                    position: relative;
                    color:#474747;
                    font-size: 18px;
                    font-weight: normal;
                    text-align: center;
                    margin-top:84px;
                }
            }
            .itemInfo:nth-child(1),.itemInfo:nth-child(2),.itemInfo:nth-child(3){
                margin-top: 0px;
            } 
        }
    }
</style>