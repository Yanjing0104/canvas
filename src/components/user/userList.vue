<template>
  <div>
    <div class="search-bar">
      <input type="text" class="input-wrap">
      <a href="javascript:;" class="input-button">搜索</a>
    </div>
  <el-table
    :data="tableData"
    style="width: 100%;margin-top: 20px;background: none;color: white;">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
    <el-pagination
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
      layout="prev, pager, next,jumper"
      style="margin: 20px auto 0;
      display: flex;
      flex-direction: row;
      justify-content: center"
      :page-size="pageSize"
      :current-page="currPage"
      :total="totalCount">
    </el-pagination>
  </div>

</template>

<script>
  export default{
    data(){
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        //分页
        currPage:1,
        page:1,
        pageSize:10,
        totalCount:100,
        totalPage:10,
      }
    },
    methods:{
      handleCurrentChange(currPage){
        this.currPage=currPage
        console.log(currPage);
//        this.search()
      },
      handleSizeChange: function (size) {
        this.pageSize = size;
      },
    }
  }
</script>

<style scoped>
</style>
<style>


</style>
