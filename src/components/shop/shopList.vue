<template>
  <div >
    <!--<v-search @search="Search"></v-search>-->
    <div class="search-bar">
      <input type="text" class="input-wrap">
      <a href="javascript:;" class="input-button">搜索</a>
    </div>
    <div class="button" @click="shopAdd()">添加商品</div>
    <el-table
      :data="data"
      style="width: 100%;">
      <el-table-column
        prop="name"
        label="商品名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="status"
        width="180">
      </el-table-column>
      <el-table-column
        prop="createtime"
        label="创建时间">
      </el-table-column>
      <el-table-column
        prop="updatetime"
        label="更新时间">
      </el-table-column>
      <el-table-column
        prop="stockcount"
        label="库存">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格">
      </el-table-column>
      <el-table-column
        prop=""
        label="操作">
      </el-table-column>
    </el-table>
    <transition name="fade">
      <div v-show="addInfoShow" class="addInfo">
        <div class="addInfo-wrapper">
          <div class="addInfo-main">
            <div class="from-wrap">
              <div class="ipunt-wrap">
                <label for="">户&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型:</label>
                <input type="text" placeholder="如：平房、两室一厅" autofocus >
              </div>
              <div class="ipunt-wrap">
                <label for="">每月价格:</label>
                <input type="text" >
              </div>
              <div class="ipunt-wrap">
                <label for="">建筑面积:</label>
                <input type="text">
              </div>
              <div class="ipunt-wrap">
                <label for="">装修情况:</label>
                <input type="text">
              </div>
              <div class="ipunt-wrap">
                <label for="">房屋地址:</label>
                <input type="text">
              </div>
              <div class="ipunt-button">
                <a class="gv" href="javascript:;" @click="updataInfo()">添加</a>
              </div>
            </div>
          </div>
          <div class="addInfo-close" @click="closeAddInfo()"> x </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
//  import Searchbar from './Searchbar'
//  import Table from './Table'

  export default {
//    components: {
//      'v-search': Searchbar,
//      'v-table': Table
//    },
    data() {
      return {
        data:[],
        addInfoShow: false,
        currPage:1,
        pageSize:10,
        totalPage:100,
        language:'zh'
      }
    },
    methods: {
      deleted(id) {
        var r=confirm("确认删除")
        if (r==true){
          $.ajax({
            url: 'http://hjingren.cn/thinkphp/index.php/home/Renthouse/delete?id='+id,
            type: 'get',
            dataType: 'json',
            success: (res) => {
              console.log(res)
              if (res.success) {
                alert(res.data)
                this.RentList()
              } else {
                alert('删除失败')
              }
            }
          })
        } else {
          return
        }
      },
      shopAdd() {
        this.addInfoShow = true
      },
      closeAddInfo() {
        this.addInfoShow = false
      },
      updataInfo() {
      },
      getList:function () {
        this.axios({
          url:'/mall/goods/list?token='+this.GLOBAL.token,
          method:'post',
          dataType:'json',
          data:{
            page:this.currPage,
            pageSize:this.pageSize,
            language:this.language
          }
        }).then(res=>{
          let data=res.data.data
          this.currPage=data.currPage
          this.totalCount=data.totalCount
          this.totalPage=data.totalPage
          this.pageSize=data.pageSize
          this.data=res.data.data.list
        })
      },
    },
    mounted(){
      this.getList()
    }
  }
</script>

<style scoped>
  .addInfo{
    position: fixed;
    top: 0;
    left: 0;
    /* z-index: 1000; */
    width: 100%;
    height: 100%;
    overflow: auto;
    backdrop-filter: blur(10px);
    transition: all 0.5s;
    background: rgba(7,17,27,0.9);
  }
  .addInfo.fade-enter-active,.addInfo.fade-leave-active{
    opacity: 1;
  }
  .addInfo.fade-enter,.addInfo.fade-leave-active{
    opacity: 0;
  }
  .addInfo-wrapper{
    min-height: 100%;
    width: 100%;
  }
  .addInfo-main{
    /* margin-top: 44px; */
    padding-bottom: 150px;
  }
  .addInfo-close{
    position: relative;
    width: 32px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border-radius: 50%;
    border: 1px solid #fff;
    margin: 0px auto 0 auto;
    clear: both;
    font-size: 16px;
    cursor: pointer;
  }

  .gv {
    text-decoration: none;
    background: url('../../assets/images/nav_gv.png') repeat 0px 0px;
    width: 130px;
    height: 43px;
    display: block;
    text-align: center;
    line-height: 43px;
    cursor: pointer;
    float: left;
    margin: 10px 2px 10px 2px;
    font: 18px/43px 'microsoft yahei';
    color: #066197;
  }
  a.gv:hover {
    background: url('../../assets/images/nav_gv.png') repeat 0px -43px;
    color:#1d7eb8;
    -webkit-box-shadow: 0 0 6px #1d7eb8;
    transition-duration: 0.5s;
  }
  .from-wrap{
    padding-left: 450px;
    margin-top: 100px;
  }
  .ipunt-wrap label{
    width: 100px;
    text-align: center;
    display: inline-block;
  }
  .ipunt-wrap input{
    border: none;
    outline: none;
    background: none;
    border-bottom: 1px solid #fff;
    margin-bottom: 30px;
    width: 300px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    font-size: 18px;
    padding: 0 5px;
  }
  .ipunt-button {
    margin-left: 150px
  }
</style>
