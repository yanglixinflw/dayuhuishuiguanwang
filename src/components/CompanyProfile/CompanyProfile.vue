<template>
    <div class="companyProfile">
         <img alt="公司介绍banner图" src="../../assets/CompanyProfile.png"/>
         <section>
             <div class="title">
                 <h1>我们的优势</h1>
                 <div class='EnTitle'>Our Advantages</div>
                 <img class="icon" src='../../assets/icon.png'/>
             </div>
         </section>
    </div>
</template>

<script>
export default {
    name:"CompanyProfile",
}
</script>

<style lang="less" scoped>
    .companyProfile{
        width: 100%;
        height: 600px;
        img{
            width: 100%;
            height: 100%;
        }
        .title{
            h1{
                font-size: 14px;
            }
            .EnTitle{
                font-size: 28px;
                font-weight: bold;
            }
            .icon{
                width: 40px;
            }
        }
    }
    
</style>

