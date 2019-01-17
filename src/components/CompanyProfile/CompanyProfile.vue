<template>
    <div class="companyProfile">
         <img class="banner" alt="公司介绍banner图" src="../../assets/companyProfile.jpg"/>
         <section>
            <main>
                <div class="title">
                    <h1>我们的优势</h1>
                    <div class='EnTitle'>Our Advantages</div>
                    <img class="icon" src='../../assets/icon.png'/>
                </div>
                <div class="content">
                    <div class="contentLeft"></div>
                    <div class="contentRight">
                        <el-tabs :tab-position="tabPosition" style="height: 462px;">
                            <el-tab-pane label="01">
                                <div>
                                    <div class="img"></div>
                                    <div class="line"></div>
                                    <div class="description">通过与中国水利水电科学研究院、清华大学、日本筑波大学等进行战略合作和自主研发，形成了一套自己特有的覆盖“三农三水”全领域、全产业链、全生命周期的自动化信息集成处理系统，并已成功运用到各类项目中；</div>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="02">02</el-tab-pane>
                            <el-tab-pane label="03">03</el-tab-pane>
                            <el-tab-pane label="04">04</el-tab-pane>
                            <el-tab-pane label="05">05</el-tab-pane>
                        </el-tabs>
                    </div>
                </div>
            </main>
         </section>
         <section>
             <main>
                 <div class="title">
                    <h1>公司介绍</h1>
                    <div class='EnTitle'>company introduction</div>
                    <img class="icon" src='../../assets/icon.png'/>
                </div>
                <div class="introduction">
                    <div class="introductionLeft">
                        <img src='../../assets/introduction.png'>
                    </div>
                    <div class="introductionRight">
                        <div class="paragraph1">大禹慧水科技是以水利行业专家为班底，依托于大禹节水集团在水利建设方面的资源优势，所成立的水利信息化专业公司，旨在利用物联网、大数据、云计算等新一代信息技术，推进传统水利业务的深度整合，构建集人工智能和行业专家团队为一体的综合性智慧水利云平台，为水利行业信息化的建设和发展提供先进的技术与优质的服务。</div>
                        <div class="paragraph2">目前，公司产品和解决方案已广泛应用于国内的灌区、示范园区及粮食生产基地，承接的重大项目包括：通辽市2018年度农田水利高效节水灌溉工程、云南元谋11.4万亩高效节水灌溉项目、云南祥云5万亩高效节水灌溉PPP项目、天津武清区污水处理综合治理项目、邹城市农村供水巩固提升工程PPP项目，甘肃省武山县西梁灌区农业水价综合改革项目、内蒙古呼伦贝尔信息化建设工程、敦煌市农业技术推广中心水肥一体化核心示范区温室物联网示范区、浙江省钱塘江河长制管理信息系统、衢州市河长信息管理系统平台建设等，这些项目得到了广大用户的一致好评。公司始终秉承合作双赢理念，为客户量身定制高质量的产品与服务，致力成为客户可信赖的合作伙伴。</div>
                    </div>
                </div>
             </main>
         </section>
    </div>
</template>

<script>
    export default {
        name:"CompanyProfile",
        data() {
            return {
                tabPosition: 'left'
            };
        }
    }
</script>

<style lang="less" scoped>
    .companyProfile{
        width: 100%;
        .banner{
            width: 100%;
            height: 600px;
        }
        main{
            width: 1200px;
            margin:auto;
            .title{
                width: 100%; 
                margin-top:31px;
                margin-bottom: 42px;   
                h1{
                    color: #676767;
                    font-size: 14px;
                    text-align: center
                }
                .EnTitle{
                    font-size: 28px;
                    font-weight: bold;
                    text-align: center;
                    color:#2463cc;
                }
                .icon{
                    width: 40px;
                    display: block;
                    margin: auto;
                }
            }
            .content{
                width: 100%;
                display: flex;
                margin-bottom: 67px;
                .contentLeft{
                    width: 410px;
                    height: 462px;
                    background: #2463cc;
                    margin-right: 46px;
                }
            }
            .introduction{
                width: 100%;
                display: flex;
                margin-bottom: 70px;
                .introductionLeft{
                    width: 511px;
                    height: 331px;
                    margin-right: 76px;
                    img{
                        width: 100%;
                    }
                }
                .introductionRight{
                    width: 614px;
                    height: 80px;
                    font-size: 14px;
                    color:#636363;
                    .paragraph1{
                        margin-bottom: 66px;
                    }
                }
            }
        }
    }
</style>
<style lang='less'>
    .companyProfile{
        main{
            .content{
                .contentRight{
                    .el-tabs,.el-tabs--left{
                        .el-tabs__header{
                            .el-tabs__nav-wrap{
                                overflow: visible!important;
                                .el-tabs__nav-scroll{
                                     overflow: visible!important;
                                }
                            }
                            margin-right:42px;
                            width: 76px;
                            border-right:12px;
                            .el-tabs__nav{
                                // border-right:12px
                                .el-tabs__active-bar{
                                    width:0;
                                    height:0 !important;
                                    right:-12px;
                                    top:32px;
                                    z-index:100;
                                    border-top:12px solid transparent;
                                    border-bottom:12px solid transparent;
                                    border-left:12px solid #2463cc;
                                    background:#fff;
                                }
                                .is-active{
                                    background:#2463cc!important;
                                }
                                .el-tabs__item{
                                    padding:0;
                                    height: 92px;
                                    font-size:50px;
                                    color:#fff;
                                    font-weight:bold;
                                    line-height:92px;
                                    text-align:center;
                                }
                                #tab-0{
                                    background:#f7f4f5;
                                }
                                #tab-1{
                                    background:#efedee;
                                }
                                #tab-2{
                                    background:#e3e3e3;
                                }
                                #tab-3{
                                    background:#dedbdb;
                                }
                                #tab-4{
                                    background:#d7d5d6;
                                }
                            }
                        }
                        .el-tabs__content{
                            width: 626px;
                            .el-tab-pane{
                                .img{
                                    width: 100%;
                                    height: 310px;
                                    background:#b0dcf4
                                }
                                .line{
                                    width: 49px;
                                    height: 3px;
                                    margin: 56px 0 25px 2px;
                                    background:#2463cc;
                                }
                                .description{
                                    font-size:12px;
                                    color:#636363;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>

