<template>
    <div class="footer">
        <div class=""></div>
        <div class='footNavList'>
            <ul>
                <li>农村高效节水工程</li>
                <li>农村饮水安全工程</li>
                <li>污水处理系统工程</li>
                <li>智慧河长制系统工程</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'CommonFooter',
}
</script>
<style lang="less" scoped>
    .footer{
        // position:fixed;
        bottom: 0;
        width: 100%;
        height: 432px;
        background: url(../../assets/footerBg.png) no-repeat;
        .footNavList{
            width:73%;
            height: 82px;
            margin:0 auto;
            border-top: 2px solid #979797;
            ul{
                margin-top:12px;
                padding: 0;
                list-style: none;
                display: flex;
                justify-content: space-between;
                li{
                    // width: 100%;
                    border-left:1px solid #C0C0C0;
                    font-size: 14px;
                    color:#979797;
                    padding: 0 84px;
                    // padding:0 auto;
                }
                li:first-child{
                    border-left:0;
                }
            }
        }
    }
</style>


