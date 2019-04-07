<template>
  <div>
    <el-upload
      class="upload"
      :show-file-list="false"
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
    >
      <div class="icon">
        <i class="el-icon-plus">最美证件照</i>
      </div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible" size="tiny">
      <img width="100%" :src="dialogImageUrl" alt>
    </el-dialog>
  </div>
</template>
<script>
import { Stream } from 'stream';
export default {
    props:{
        needMes: {
            action:{
                type: String,
                default: 'https://jsonplaceholder.typicode.com/posts/'
            },
            eliconplue:{
                type: String,
                default: 'el-icon-plus'
            },
            eliconmes:{
                type:String,
                default: "添加照片"
            },
            dialogImageUrl: '',
            dialogVisible: {
                type:Boolean
            }
        }
    },
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>
<style lang="less" >
.upload{
    display: inline-block;
    width: 90px;
    height: 00px;
}
div.el-upload.el-upload--picture-card {
  width: 90px;
  height: 90px;
  display: inline-block;
}
.icon{
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 90px;
    .el-icon-plus{
        font-size: 15px;
        transform: translateY(5px);
        &::before{
            font-size: 20px;
            display: block;
        }
    }
}
</style>
