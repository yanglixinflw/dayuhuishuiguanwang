<template>
    <div class="companyProfile">
         <img class="banner" alt="公司介绍banner图" src="../../assets/companyProfile.png"/>
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
                            <el-tab-pane style="background: #f7f4f6;" label="01">01</el-tab-pane>
                            <el-tab-pane label="02">02</el-tab-pane>
                            <el-tab-pane label="03">03</el-tab-pane>
                            <el-tab-pane label="04">04</el-tab-pane>
                            <el-tab-pane label="05">05</el-tab-pane>
                        </el-tabs>
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
                .contentLeft{
                    width: 410px;
                    height: 462px;
                    background: #2463cc;
                    margin-right: 46px;
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
                            width: 76px;
                            .el-tabs__nav{
                                .is-active{
                                    background:#2463cc!important;
                                }
                                .el-tabs__item{
                                    height: 92px;
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
                    }
                    
                }
            }
        }
    }
</style>

