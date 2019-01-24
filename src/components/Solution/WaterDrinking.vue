<template>
    <div class="proContent">
        <div class="proTitle">饮水安全</div>
        <div class="proInfo">
            <div class="proName">邹城市农村供水巩固提升工程PPP项目</div>
            <span class="proPoint">让86万人民安全饮水</span>
        </div>
        <div class="proItem">
            <img src="../../assets/zhoucheng.png" alt="zhoucheng">
            <div class="itemInfo">
                <div class="info1">项目涵盖水厂建设、主管铺设和村内改造等</div>
                <div class="info2">
                    <div>
                        <span>5.2</span>
                        <p>亿元 总投资</p>
                    </div>
                    <div>
                        <span>13</span>
                        <p>个 覆盖邹城市所有乡镇</p>
                    </div>
                    </div>
                    <div class="info2">
                    <div>
                        <span>895</span>
                        <p>个 行政村、86万人</p>
                    </div>
                    <div>
                        <span>92</span>
                        <p>台 新上单村消毒设施</p>
                    </div>
                </div>
                <div class="info2">
                    <div>
                        <span>850</span>
                        <p>台 净水设施</p>
                    </div>
                </div>
            </div>
            <div class="colorBlock"></div>
        </div>
        <div class="proInfo">
            <div class="proName">黔东南州骨干水源工程</div>
            <span class="proPoint">总投资19亿元 涉及水库14座</span>
        </div>
        <div class="proItem">
        <div class="colorStroke"></div>
            <div class="itemXiangYun">
                <div class="xiangyunInfo">
                    <div class="part1">总投资
                        <span>1.48</span>亿元
                    </div>
                    <div class="part2">高效灌溉面积
                        <span>5</span>万亩
                    </div>
                    <p class="part3">缓解水资源供需矛盾，提升农业 抗旱保守能利</p>
                </div>
                <img src="../../assets/qiandong.png" alt="xiangyun">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'waterDrinking',
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
            .itemInfo{
                position: absolute;
                top:63px;
                left:360px;
                z-index: 10;
                width:51%;
                height: 276px;
                background-color:#fff; 
                display: flex;
                flex-direction:column;
                justify-content:space-around;
                box-shadow: 0px 0px 48px -21px #1182ED; 
                .info1{
                    font-size: 16px;
                    color:#757575;
                    margin-left:34px;   
                }
                .info2{
                    display: flex;
                    margin-left:34px;
                    div{
                        font-size: 16px;
                        color:#757575;
                        font-weight: normal;
                        margin-right: 56px;
                        span{
                            font-size: 30px;
                            color:#2463cc;
                            font-family: Arial;
                            font-weight: bold;
                            display: inline-block;
                            width: 62px;
                            margin-right: 8px;
                            position: relative;
                        }
                        p{
                            display: inline-block;
                        }
                    }
                }
            }
            .colorBlock{
                width:100px;
                height: 84px;
                background-color:#4B7ED5; 
                position: absolute;
                right:208px;
                top:274px;
            }
            .colorStroke{
                width:311px;
                height: 222px;
                border:22px solid #2463CC;
                left:71px;
                top:244px;
                box-sizing: border-box;
                position: absolute;
                z-index: -10;
            }
            .itemXiangYun{
                display: flex;
                .xiangyunInfo{
                    width: 335px;
                    height: 400px;
                    background-color: #fff;
                    margin-left: 12.25%;
                    box-shadow: 0px 0px 48px -21px #1182ED;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    .part1{
                        margin-top:104px;
                        margin-left:58px;
                        font-size: 16px;
                        color:#757575;
                        font-weight: 500;
                        span{
                            font-size: 30px;
                            color:#2463cc;
                            font-weight: 600;
                            font-family: Arial;
                        }
                    }
                    .part2{
                        margin-top:48px;
                        margin-left:58px;
                        font-size: 16px;
                        color:#757575;
                        font-weight: 500;
                        span{
                            font-size: 30px;
                            color:#2463cc;
                            font-weight: 600;
                            font-family: Arial;
                        }
                    }
                    .part3{
                        margin-top:85px;
                        margin-left: 58px;
                        margin-right: 34px;
                        font-size: 16px;
                        color:#757575;
                        font-weight: 400;
                    }
                }
                img{
                    width: 50.83%;
                }
            }
        }
    }
</style>


