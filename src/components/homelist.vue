<template>
    <div class="wrapper">
        <div class="leftMes"><slot name="leftTit"></slot></div>
        <div class="mes"><slot name="mes"></slot></div>
        <div class="icon"><i class="el-icon-arrow-right"></i></div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
@mainW:47px;
.wrapper {
    position: relative;
    height: @mainW;
    width: 100vw;
    background-color: rgb(250, 250, 250);
    border-bottom: 1px solid rgba(235, 223, 223, 0.17);
    .leftMes{
        line-height: @mainW;
        float: left;
        padding-left: 20px;
    }
    .mes{
        width: 60vw;
        text-align: right;
        line-height: @mainW;
        position: absolute;
        right: 15vw;
    }
    .icon{
        line-height: @mainW;
        width: 15vw;
        text-align: center;
        position: absolute;
        right: 0px;
        i{
            font-size: 16px;
            font-weight: 700;
        }
    }
}
</style>
