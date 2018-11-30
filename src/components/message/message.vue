<template>
  <div id="login">
    <router-link to="/">
      <div class="back" @click="back()"></div>
    </router-link>
    <div class="login-box">
      <div class="logo"></div>
      <form>
        <div class="ipunt-wrap">
          <label for="mobile" class="icon-user"></label>
          <input type="text" id="mobile" placeholder="手机号" v-model="mobile">
        </div>
        <div class="button">
          <a class="gv" href="javascript:;" @click="submit">发送</a>
          <!--<img src="https://www.xiaodaiba.cn/registerVerify.htm?0.36112539871392557" style="width: 150px;height: 50px;" alt="">-->
        </div>
      </form>
    </div>
  </div>
</template>

<script>


  export default {
    data() {
      return {
        dialog: false,
        dialogMsg: '',
        mobile:''
      }
    },
    methods: {
      confirm() {
        this.dialog = false
      },
      back() {
        this.$emit('back')
      },
      submit:function () {
        console.log(this.mobile);
        this.bapin()
//        this.fengtai()
        this.xiaodaiwang()
      },
      //小贷网
      xiaodaiwang(){
        this.axios({
          method:'get',
          url:'/xiaodaiwang/registerVerify.htm?0.0358753155044369',
          contentType:'image/jpeg;charset=UTF-8'
        }).then(res=>{
          console.log(res);
        })
      },
      //霸屏天下
      bapin(){
        this.axios({
          method:'get',
          url:"/bapin/index.php/Home/Tools/sendVerifyCode?phone="+this.mobile+"&type=1"
        })
      },
      //丰泰
      fengtai(){
        this.axios({
          method:'post',
          url:"http://dk.myzcgl.top/duanxi/sms.php",
          ContentType:'application/x-www-form-urlencoded; charset=UTF-8',
          data:{
            mobile:this.mobile,
            send_code:1111
          }
        }).then(res=>{
          console.log(res.data);
        }).catch(err=>{
          console.log(err);
        })
      },

    },
    mounted(){
    }
  }
</script>

<style scoped>
  #login {
    height: 100%;
    overflow: hidden;
    position: relative;
  }
  .back{
    position: fixed;
    left: 20px;
    top: 20px;
    width: 30px;
    height: 30px;
    background: url('../../assets/images/back.png') no-repeat;
    background-size: cover;
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

  .login-box {
    width: 600px;
    padding: 50px;
    margin: 40px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 100001;
  }
  .login-box .logo{
    width: 270px;
    height: 108px;
    margin-bottom: 20px;
    /*background: url('../../assets/images/logo.png') no-repeat;*/
    background-size: cover;
  }
  .ipunt-wrap label{
    display: inline-block;
    width: 25px;
    height: 25px;
    vertical-align: middle;
    margin-right: 10px;
    background-size: cover;
  }
  .icon-id{
    background: url('../../assets/images/id.png') no-repeat;
  }
  .icon-user{
    background: url('../../assets/images/user.png') no-repeat;
  }
  .icon-password{
    background: url('../../assets/images/password.png') no-repeat;
  }

  .ipunt-wrap input{
    border: none;
    outline: none;
    background: none;
    border-bottom: 1px solid #fff;
    margin-top: 30px;
    width: 200px;
    height: 30px;
    line-height: 30px;
    /* text-align: center; */
    color: #fff;
    font-size: 14px;
    padding: 0 5px;
  }
  .button {
    margin-top: 30px;
    margin-left: 60px
  }
  .toregist{
    font-size: 12px;
    float: right;
    padding-top: 20px;
    color: #fff;
  }
  .toregist a{
    color: #066197;
    text-decoration: none;
  }

</style>
