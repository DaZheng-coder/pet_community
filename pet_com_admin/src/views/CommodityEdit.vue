<template>
  <div class="about">
    <h1>{{id ? '编辑' : '新建'}}商品</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="商品分类">
        <el-select v-model="model.category">
          <el-option v-for="item in categories" :key="item._id"
          :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input v-model="model.price"></el-input>
      </el-form-item>
      <el-form-item label="商品折扣价">
        <el-input v-model="model.discountPrice"></el-input>
      </el-form-item>
      <el-form-item label="销量">
        <el-input v-model="model.sales"></el-input>
      </el-form-item>
      <el-form-item label="商品封面" style="margin-top: 0.5rem;">
        <el-upload
          class="avatar-uploader"
          :action="$http.defaults.baseURL + '/upload'"
          :show-file-list="false"
          :on-success="res => $set(model, 'cover', res.url)"
        >
          <img v-if="model.cover" :src="model.cover" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="商品轮播图">
        <el-upload
          class="upload-demo"
          multiple
          :action="$http.defaults.baseURL + '/upload'"
          :on-preview="handleSwiperImgsPreview"
          :on-remove="handleSwiperImgsRemove"
          :file-list="model.swiperImgs"
          :on-success="handleSwiperImgUploadSuccess"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="商品详情图片">
        <el-upload
          class="upload-demo"
          multiple
          :action="$http.defaults.baseURL + '/upload'"
          :on-preview="handleDetailImgsPreview"
          :on-remove="handleDetailImgsRemove"
          :file-list="model.detailImgs"
          :on-success="handleDetailImgUploadSuccess"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data(){
    return {
      categories: [],
      model: {
        swiperImgs: [],
        detailImgs: []
      },
      parents: []
    }
  },
  methods: {
    async save(){
      console.log('model', this.model)
      let res
      if (this.id) {
        res = await this.$http.put(`rest/commodities/${this.id}`, this.model)
      } else {
        res = await this.$http.post('rest/commodities', this.model)
      }
      console.log('res', res)
      this.$router.push('/commodities/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch(){
      const res = await this.$http.get(`rest/commodities/${this.id}`)
      this.model = res.data
    },
    async fetchParents(){
      const res = await this.$http.get(`rest/categories`)
      console.log(res.data)
      this.categories = res.data.filter(item => item.parent && item.parent.name == '商品分类')
    },
    // 处理商品轮播图事件
    handleSwiperImgUploadSuccess(response, file, fileList) {
      this.model.swiperImgs.push(response.url)
    },
    handleSwiperImgsPreview(file, fileList) {
      console.log(file, fileList);
    },
    handleSwiperImgsRemove(file) {
      console.log(file);
    },
    // 处理商品详情图片事件
    handleDetailImgUploadSuccess(response, file, fileList) {
      this.model.detailImgs.push(response.url)
    },
    handleDetailImgsPreview(file, fileList) {
    },
    handleDetailImgsRemove(file) {
    }
  },
  created(){
    this.fetchParents()
    this.id && this.fetch()
  }
}
</script>
