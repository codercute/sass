<template>
  <div>
    <el-upload
      :on-preview="preview"
      :on-remove="handleRemove"
      :on-change="changeFile"
      :file-list="fileList"
      list-type="picture-card"
      action="#"
      :limit="1"
      :class="{ disabled: fileComputed }"
    >
      <i class="el-icon-plus" />
    </el-upload>
    <el-dialog title="图片" :visible.sync="showDialog">
      <img :src="imgUrl" style="width: 100%" alt="">
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      showDialog: false,
      imgUrl: ''
    }
  },
  methods: {
    preview(file) {
      this.imgUrl = file.url
      this.showDialog = true
    },
    handleRemove(file) {
      // file是点击删除的文件
      //   将原来的文件给排除掉了 剩下的就是最新的数组了
      this.fileList = this.fileList.filter(item => item.uid !== file.uid)
    },
    changeFile(file, fileList) {
      this.fileList = fileList.map(item => item)
    },
    beforeUpload(file) {
      // 要开始做文件上传的检查了
      // 文件类型 文件大小
      const types = ['image/jpeg', 'image/gif', 'image/bmp', 'image/png']
      if (!types.includes(file.type)) {
        this.$message.error('上传图片只能是 JPG、GIF、BMP、PNG 格式!')
        return false
      }
      //  检查大小
      const maxSize = 5 * 1024 * 1024
      if (maxSize < file.size) {
        this.$message.error('图片大小最大不能超过5M')
        return false
      }
      return true
    }
  }
}
</script>

<style>
.disabled .el-upload--picture-card {
  display: none;
}
</style>
