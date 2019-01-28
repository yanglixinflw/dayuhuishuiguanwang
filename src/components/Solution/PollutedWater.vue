<template>
    <div class="proContent">
        <div class="proTitle">污水处理工程</div>
        <div class="proInfo">
            <div class="proName">天津武清区污水综合治理项目</div>
            <span class="proPoint">绿水环绕百村30万农户受益</span>
        </div>
        <div class="proItem">
            <img class="wuqing" src='../../assets/wuqing.jpg' alt="tianjianwuqingqu"/>
            <h4 class="itemInfo">新农村建设和美丽乡村建设环境整治重点项目落地于京津冀协同发展的重点地区</h4>
            <div class="grid">
                <div class="gridItem">
                    <p><span>16</span>亿元</p>
                    <p>总投资</p>
                </div>
                <div class="gridItem">
                    <p><span>302</span>个</p>
                    <p>村庄 覆盖天津武清</p>
                </div>
                <div class="gridItem">
                    <p><span>A</span>类标准</p>
                    <p>完工的污水处理效果达到国家一级</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'pollutedWater',
}
</script>
<style lang="less" scoped>
    .proContent{
        width: 1280px;
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
            .proName{
                margin-top:44px;
                margin-left: 44px;
                font-size: 26px;
                font-weight: 800;
                color: #555555;
            }
            .proPoint{
                margin-top:14px;
                margin-left: 44px;
                font-size: 12px;
                color: #757575;
            }
        }
        .proItem{
            position: relative;
            width:1200px;
            margin:45px auto 67px;
            .wuqing{
                width:100%;
                height: 480px;
                box-shadow: 0px 0px 48px -21px #1182ED;
            }
            .itemInfo{
                color:#757575;
                font-size: 16px;
                margin:30px 0;
                font-weight: normal;
            }
            .grid{
                display: flex;
                width: 100%;
                justify-content: space-between;
                .gridItem:nth-child(2n-1){
                    width: 340px;
                    height: 162px;
                    background: linear-gradient(to right,  #2264CD 0%,#0087ED 100%);
                    text-align: center;
                    p{
                        font-size: 16px;
                        color:#fff;
                        margin: 22px 0;
                        span{
                            font-size: 40px;
                        }
                    }
                } 
                .gridItem:nth-child(2n){
                    width: 340px;
                    height: 162px;
                    background: linear-gradient(to right,  #09A15D 0%,#1EB773 100%);
                    text-align: center;
                    p{
                        font-size: 16px;
                        color:#fff;
                        margin: 22px 0;
                        span{
                            font-size: 40px;
                        }
                    }
                } 
            }
        }
    }
    @media(max-width: 1299px){
        .proContent{
            width: 1200px;
        }
    }
</style>