<template>
    <div class="companyProfile" ondragstart="return false">
         <img class="banner" alt="公司介绍banner图" src="../../assets/companyProfile.jpg"/>
         <!-- 公司介绍 -->
         <section>
             <main>
                 <!-- 公司介绍的小标题 -->
                 <div class="headTitle">
                    <div class="logo"><img src="../../assets/companyLogo.png" alt="大禹公司logo"></div>  
                    <h5>HUISHUI TECHNOLOGY</h5>
                    <h1>大禹慧水科技</h1>
                    <div class="sannong"><img src="../../assets/sannong.png" alt="让农业更智慧 让农村更美好 让农民更幸福"></div>
                </div>
                 <!-- 公司介绍的内容 -->
                <div class="introduction">
                    <div class="paragraph paragraph1">大禹慧水科技是以水利行业专家为班底，依托于大禹节水集团在水利建设方面的资源优势，所成立的水利信息化专业公司，旨在利用物联网、大数据、云计算等新一代信息技术，推进传统水利业务的深度整合，构建集人工智能和行业专家团队为一体的综合性智慧水利云平台，为水利行业信息化的建设和发展提供先进的技术与优质的服务。</div>
                    <div class="paragraph paragraph2">目前，公司产品和解决方案已广泛应用于国内的灌区、示范园区及粮食生产基地，承接的重大项目包括：通辽市2018年度农田水利高效节水灌溉工程、云南元谋11.4万亩高效节水灌溉项目、云南祥云5万亩高效节水灌溉PPP项目、天津武清区污水处理综合治理项目、邹城市农村供水巩固提升工程PPP项目，甘肃省武山县西梁灌区农业水价综合改革项目、内蒙古呼伦贝尔信息化建设工程、敦煌市农业技术推广中心水肥一体化核心示范区温室物联网示范区、浙江省钱塘江河长制管理信息系统、衢州市河长信息管理系统平台建设等，这些项目得到了广大用户的一致好评。公司始终秉承合作双赢理念，为客户量身定制高质量的产品与服务，致力成为客户可信赖的合作伙伴。</div>
                    <div class="paragraph paragraph3">大禹慧水科技将持之以恒的专注于人类与水的和谐发展，聚焦水资源保护和水环境改善，肩负起水利信息化发展的重任，矢志成为最有价值的解决方案提供商、系统建设集成商、运行维护服务商。</div> 
                </div>
             </main>
         </section>
         <!-- 我们的优势 -->
         <section>
            <main>
                <!-- 小标题 -->
                <div class="title">
                    <h1>我们的优势</h1>
                    <div class='EnTitle'>OUR ADVATAGES</div>
                    <img class="icon" src='../../assets/icon.png'/>
                    <!-- <div class="icon"></div> -->
                </div>
                <!-- 我们的优势的内容 -->
                <div class="content">
                    <div class="contentLeft">
                        <div class="kuang"></div>
                        <div class="picDescription">
                            <div class='picTitle'>我们的优势</div>
                            <div class="picEnTitle">Our Advantages</div>
                        </div>
                    </div>
                    <div class="contentRight">
                        <ul class="sign">
                            <li v-for="(dot, i) in sliders" :key="i"
                                :class="{dotted: i === (currentIndex-1)}"
                                @click = jump(i+1)
                            >
                                {{dot.num}}
                                <span
                                    :class="{active: i === (currentIndex-1)}"
                                >
                                </span>
                            </li>
                        </ul>
                        <!-- 轮播图 -->
                        <ul class="container" :style="containerStyle">
                            <li> 
                                <div class="img">
                                    <img :src="sliders[sliders.length - 1].img" alt=""/>
                                     <div class="instructions">
                                        <div class='word'>{{sliders[sliders.length - 1].word}}</div>
                                        <div class="triangle"></div>
                                    </div>
                                </div>
                                <div class="line"></div>
                                <div class="description">{{sliders[sliders.length - 1].data}}</div>
                            </li>
                            <li v-for="(item, index) in sliders" :key="index">
                                <div class="img">
                                    <img :src="item.img" alt=""/>
                                    <div class="instructions">
                                        <div class='word'><div>{{item.word}}</div></div>
                                        <div class="triangle"></div>
                                    </div>
                                </div>
                                <div class="line"></div>
                                <div class="description">{{item.data}}</div>
                            </li>
                            <li>
                                <div class="img">
                                    <img :src="sliders[0].img" alt=""/>
                                    <div class="instructions">
                                        <div class='word'>{{sliders[0].word}}</div>
                                        <div class="triangle"></div>
                                    </div>
                                </div>
                                <div class="line"></div>
                                <div class="description">{{sliders[0].data}}</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
         </section>
    </div>
</template>

<script>
export default {
 name: 'companyProfile',
 props: {
  initialSpeed: {
   type: Number,
   default: 30
  },
  initialInterval: {
   type: Number,
   default: 4
  }
 },
 data () {
  return {
   sliders:[
    {
        num:"01",
        img:require("../../assets/advantages.jpg"),
        data:"通过与中国水利水电科学研究院、清华大学、日本筑波大学等进行战略合作和自主研发，形成了一套自己特有的覆盖“三农三水”全领域、全产业链、全生命周期的自动化信息集成处理系统，并已成功运用到各类项目中；",
        word:"技术研发优势"
    },
    {
        num:"02",
        img:require("../../assets/talent.jpg"),
        data:"中国国内最顶尖高科技制造业信息化团队，平均10+年行业经验，其中研发人员占比40%，95%以上为本科学历，同时高薪聘请北、上、广高新尖人才，一流的人才，一流的团队，才能打造一流的产品与服务;",
        word:"人才优势"
    },
    {
        num:"03",
        img:require("../../assets/brand.jpg"),
        data:"集团深耕水利行业20年，公司依托集团行业龙头地位和上市公司平台资源，包括水利水电工程施工总承包壹级，水利工程咨询甲级和设计、勘察、水资源论证等八项乙级资质作为强大业务支撑力量，充分发挥公司品牌优势；",
        word:"品牌优势"
    },
    {
        num:"04",
        img:require("../../assets/market.jpg"),
        data:"完善有效的渠道建设不仅是市场开拓的要求，更对项目后期的运维具有重要意义，依托集团公司已遍及全国及30多个境外国家的营销网络，与同行业公司的业务大多局限在注册地省区内相比，具有明显的竞争优势；",
        word:"市场优势"
    },
    {
        num:"05",
        img:require("../../assets/operation.jpg"),
        data:"依托集团扎根水利20年持续积累的大量施工经验和不断树立的精品工程，尤其是云南农业高效节水“陆良模式”在全国范围内得到的推广和应用，这一系列的行业经验与口碑，奠定了公司强大的后期运维能力与竞争优势；",
        word:"运维优势"
    },
   ],
   currentIndex:1,//当前的轮播页
   distance:-460,//每次移动的距离
   transitionEnd: true,
   speed: this.initialSpeed
  }
 },
 computed:{
  containerStyle() {
   return {
    transform:`translate3d(0, ${this.distance}px, 0)`
   }
  },
  interval() {
   return this.initialInterval * 1000
  }
 },
 mounted() {
  this.init()
 },
 methods:{
  init() {
   this.play()
   window.onblur = function() { this.stop() }.bind(this)
   window.onfocus = function() { this.play() }.bind(this)
  },
  //移动的距离，方向，速度
  move(offset, direction, speed) {
   if (!this.transitionEnd) return
   this.transitionEnd = false
   direction === -1 ? this.currentIndex += offset/460 : this.currentIndex -= offset/460
   if (this.currentIndex > 5) this.currentIndex = 1
   if (this.currentIndex < 1) this.currentIndex = 5
   const destination = this.distance + offset * direction
   this.animate(destination, direction, speed)
  },
  //优化动画
  animate(des, direc, speed) {
   if (this.temp) { 
    window.clearInterval(this.temp)
    this.temp = null 
   }
   this.temp = window.setInterval(() => {
    if ((direc === -1 && des < this.distance) || (direc === 1 && des > this.distance)) {
     this.distance += speed * direc
    } else {
     this.transitionEnd = true
     window.clearInterval(this.temp)
     this.distance = des
     if (des < -2300) this.distance = -460
     if (des > -460) this.distance = -2300
    }
   }, 20)
  },
  //点击锚点跳转
  jump(index) {
   const direction = index - this.currentIndex >= 0 ? -1 : 1
   const offset = Math.abs(index - this.currentIndex) * 460
   const jumpSpeed = Math.abs(index - this.currentIndex) === 0 ? this.speed : Math.abs(index - this.currentIndex) * this.speed 
   this.move(offset, direction, jumpSpeed)
  },
  play() {
   if (this.timer) {
    window.clearInterval(this.timer)
    this.timer = null
   }
   this.timer = window.setInterval(() => {
    this.move(460, -1, this.speed)
   }, this.interval)
  },
  stop() {
   window.clearInterval(this.timer)
   this.timer = null;
  }
 }
}
</script>

<style lang="less" scoped>
    .companyProfile{
        width: 100%;
        min-width: 1200px;
        .banner{
            width: 100%;
        }
        main{
            width: 1200px;
            margin:auto;
            position: relative;
            .title{
                width: 100%; 
                margin-top:31px;
                margin-bottom: 42px;   
                h1{
                    color: #676767;
                    font-size: 16px;
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
            .headTitle{
                width: 100%; 
                margin-top:36px;
                margin-bottom: 32px;  
                img{
                    display: block;
                    margin: auto;
                }
                h5{
                    text-align: center;
                    color: #8f8f8f;
                    margin-top: 11px;
                    font-size: 14PX;
                }
                h1{
                    text-align: center;
                    color: #8f8f8f;
                    font-size: 18px;
                    margin:8px auto 28px;
                }
                .sannong{
                    width: 100%;
                    img{
                        display: block;
                        margin:0 auto 36px;
                    }
                }
            }
            .introduction{
                width: 90%;
                margin:0 auto 69px;
                .paragraph{
                    text-indent: 2em;
                    font-size: 14px;
                    color:#636363;
                    line-height: 24px;
                }
                .paragraph1,.paragraph2{
                    margin-bottom: 28px;
                }
            }
            .content{
                width: 100%;
                display: flex;
                margin-bottom: 80px;
                .contentLeft{
                    width: 410px;
                    height: 462px;
                    background: #2463cc;
                    margin-right: 46px;
                    position: relative;
                    .kuang{
                        width: 206px;
                        height: 355px;
                        border:6px solid #fff;
                        position: absolute;
                        right: 55px;
                        left: 137px;
                        top:0;
                        bottom:0;
                        margin:auto;
                    }
                    .picDescription{
                        position: absolute;
                        width: 290px;
                        height: 90px;
                        background: #2463cc;
                        top:83px;
                        .picTitle{
                            font-size: 32px;
                            color:#fff;
                            text-align: center;
                            margin-top: 10px;
                        }
                        .picEnTitle{
                            font-size: 16px;
                            color:#fff;
                            text-align: center;
                        }
                    }
                }
                .contentRight{
                    display: flex;
                    overflow: hidden;
                   .sign{
                        width: 75px;
                        height: 461px;
                        list-style: none;
                        margin-right: 42px;
                        cursor: pointer;
                        li{
                            position: relative;
                            width: 100%;
                            height: 92px;
                            font-size: 50px;
                            color:#fff;
                            font-weight: bold;
                            text-align: center;
                            line-height: 92px;
                        }
                        .dotted{
                            background: #2463cc !important;
                        }
                        .active{
                            position:absolute;
                            right: -12px;
                            top:0;
                            bottom:0;
                            margin: auto;
                            width: 0;
                            height: 0;
                            display: block;
                            border-top: 6px solid transparent;
                            border-bottom: 6px solid transparent;
                            border-left: 12px solid #2463cc;
                        }
                        li:nth-child(1){
                            background:#e4e6e9;
                        }
                        li:nth-child(2){
                            background:#d5dae2;
                        }
                        li:nth-child(3){
                            background:#bbc0c8;
                        }
                        li:nth-child(4){
                            background:#acb1b9;
                        }
                        li:nth-child(5){
                            background:#9da1a7;
                        }
                   }
                   .container{
                       width: 626px;
                       list-style: none;
                       height: 461px;
                       li{
                           width: 100%;
                           height: 461px;
                           .line{
                                width: 49px;
                                height: 3px;
                                margin: 56px 0 25px 2px;
                                background:#2463cc;
                            }
                            .img{
                                width: 100%;
                                height: 310px;
                                background:#b0dcf4;
                                display:flex;
                                img{
                                    width: 500px;
                                    height: 310px;
                                }
                                .instructions{
                                    width: 126px;
                                    height: 310px;
                                    background:#2463cc;
                                    position: relative;
                                    .word{
                                        width: 24px;
                                        height: 190px;
                                        margin:50px auto;
                                        position: relative;
                                        font-size:24px;
                                        color:#fff;
                                        div{
                                        width: 24px;
                                        position: absolute;
                                        top:0;
                                        bottom:0;
                                        height: 150px;
                                        // writing-mode: vertical-lr;
                                        // writing-mode: tb-lr;
                                        margin:auto;
                                        word-wrap: break-word; 
                                        letter-spacing: 20px; 
                                        }
                                    }
                                    .triangle{
                                        position:absolute;
                                        width: 0;
                                        height: 0;
                                        border-top:9px solid transparent;
                                        border-bottom:9px solid transparent;
                                        border-right:18px solid #2463cc;
                                        left:-18px;
                                        top:0;
                                        bottom:0;
                                        margin:auto;
                                    }
                                }
                            }
                           .description{
                                font-size:12px;
                                line-height: 20px;
                                color:#636363;
                            }
                       }
                   }
                }
            }
        }
    }
</style>
