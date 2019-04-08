<template>
  <el-container>
    <el-header height="50px">
      <span class="mine-icon" @click="goPageRou('/myshop')">
        <i class="el-icon-arrow-left"></i>
      </span>
      <span class="mine-icon">
        <i class="el-icon-delete"></i>
      </span>
      <div>新增店铺</div>
    </el-header>
    <el-main>
      <div class="main-wrapper">
        <div class="mes-div">店铺名称</div>
        <input class="mes-input" type="text" value="张三的店铺">
      </div>
      <div class="main-wrapper">
        <div class="mes-div">店铺地址</div>
        <input class="mes-input" type="text" value="天津市和平区 ">
      </div>
      <div class="map">
        <div class="map-shop" id="atlas"></div>
      </div>
      <div class="buttom-confim">
        <el-button class="buttom" type="primary" round>确定</el-button>
      </div>
    </el-main>
  </el-container>
</template>
<script>
import { toBackRou, goPageRou } from "../api/cmmonUntion";
import { TMap } from '../api/map'
export default {
  methods: {
    mapTX() {
      TMap().then(qq => {
        let center = new qq.maps.LatLng(22.535885, 113.952514);
        // console.log(
        //   "位置1",
        //   this.map.location.latitude,
        //   this.map.location.longitude
        // );
        var mmap = new qq.maps.Map(document.getElementById("atlas"), {
          //这里经纬度代理表进入地图显示的中心区域
          center: center,
          zoom: 13
        });
        var marker = new qq.maps.Marker({
          //设置Marker的位置坐标
          position: center,
          // draggable: true,
          //设置显示Marker的地图
          map: mmap
        });

        //设置Marker的可见性，为true时可见,false时不可见，默认属性为true
        marker.setVisible(true);
        //设置Marker的动画属性为从落下
        marker.setAnimation(qq.maps.MarkerAnimation.DOWN);
        //设置Marker是否可以被拖拽，为true时可拖拽，false时不可拖拽，默认属性为false
        marker.setDraggable(true);

        //添加信息窗口
        var info = new qq.maps.InfoWindow({
          map: mmap
        });
        //获取标记的可拖动属性
        // info.open();
        // // info.setContent("标记的可拖动属性为：" + marker.getDraggable());
        // info.setPosition(marker.getPosition());
        // //标记Marker点击事件
        // qq.maps.event.addListener(marker, "click", function() {
        //   info.open();
        //   let posit = marker.getPosition();
        //   // info.setContent(`<div style="text-align:center;white-space:nowrap;' +
        //   //           'margin:10px;">标记位置${posit}</div>`);
        //   info.setPosition(marker.getPosition());
        // });
        // //设置Marker停止拖动事件
        // // let window.a = null
        // let _this = this;
        // qq.maps.event.addListener(marker, "dragend", function() {
        //   info.open();
        //   let posti = marker.getPosition();
        //   // info.setContent(`<div style="text-align:center;white-space:nowrap;' +
        //   //           'margin:10px;">标记位置${posti}</div>`);
        //   //getPosition()  返回Marker的位置
        //   info.setPosition(marker.getPosition());
        //   console.log(marker.getPosition());
        // });
        // console.log('位置1',this.map.location.latitude, this.map.location.longitude)
      });
    }
  },
  created() {
    this.mapTX()
  },
};
</script>
<style lang="less" scoped>
@import url("../api/topheader");
.el-header {
  span:last-of-type {
    position: absolute;
    right: 6vw;
    line-height: 50px;
    transform: translateY(3px);
    i {
      font-weight: 600;
      font-size: 22px;
      color: #fff;
    }
  }
}
.el-main {
  padding-top: 10px;
  .main-wrapper {
    .mes-div {
      color: rgb(37, 34, 34);
      font-weight: 600;
      float: left;
      padding-left: 5px;
      padding-top: 10px;
    }
    .mes-input {
      clear: both;
      display: block;
      font-size: 14px;
      height: 35px;
      width: 100%;
      padding-left: 6px;
      padding-top: 2px;
      outline: none;
      border: none;
      border-bottom: 1px solid rgb(209, 201, 201);
    }
  }
  .map {
    .map-shop {
      border: 1px solid rgb(243, 240, 240);
      height: 250px;
      width: 90%;
      transform: translateX(-3px);
      margin: 30px auto;
    }
  }

  .buttom-confim {
    .buttom {
      width: 95%;
    }
  }
}
</style>
