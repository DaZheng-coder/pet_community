<template>
  <div>
    <h1>商品列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="240"></el-table-column>
      <el-table-column prop="parent.name" label="商品分类"></el-table-column>
      <el-table-column prop="name" label="商品名称"></el-table-column>
      <el-table-column prop="price" label="商品价格"></el-table-column>
      <el-table-column prop="discountPrice" label="商品折扣价"></el-table-column>
      <el-table-column prop="sales" label="销量"></el-table-column>
      <el-table-column prop="avatar" label="商品封面">
        <template slot-scope="scope">
          <img :src="scope.row.cover" style="height:3rem;">
        </template>
      </el-table-column>
      <el-table-column prop="avatar" label="商品轮播图">
        <template slot-scope="scope">
          <img :src="item" :key="index" v-for="(item,index) in scope.row.swiperImgs" style="height:3rem;">
        </template>
      </el-table-column>
      <el-table-column prop="avatar" label="商品详情图">
        <template slot-scope="scope">
          <img :src="scope.row.detailImgs[0]" style="height:3rem;">
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/commodities/edit/${scope.row._id}`)"
          >编辑</el-button>
          <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("rest/commodities");
      this.items = res.data;
    },
    remove(row) {
      this.$confirm(`是否确定要删除商品 "${row.name}"`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        const res = await this.$http.delete(`rest/commodities/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        this.fetch();
      });
    }
  },
  created() {
    this.fetch();
  }
};
</script>

