<template>
  <div id="login">
    <router-link to="/">
      <div class="back" @click="back()"></div>
    </router-link>

    <div class="login-box">
      <div class="logo"></div>
      <form>
        <div class="ipunt-wrap" v-show="admin">
          <label for="ID" class="icon-id"></label>
          <input type="text" id="ID" placeholder="管理员账号" v-model="userid">
        </div>
        <div class="ipunt-wrap" v-show="customer">
          <label for="username" class="icon-user"></label>
          <input type="text" id="username" placeholder="用户名" v-model="username">
        </div>
        <div class="ipunt-wrap">
          <label for="password" class="icon-password"></label>
          <input type="password" id="password" placeholder="密码" v-model="password" >
        </div>
        <div class="button">
          <a class="gv" href="javascript:;" @click="submit">登录</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>


  export default {

    props: {
      login: {
        type: Boolean
      },
      admin: {
        type: Boolean
      },
      customer: {
        type: Boolean
      }
    },
    data() {
      return {
        username: '',
        password: '',
        userid: '',
        dialog: false,
        dialogMsg: ''
      }
    },

    methods: {
      confirm() {
        this.dialog = false
      },
      back() {
        this.$emit('back')
      },
      submit:function (e) {
        e.preventDefault()
        let username=this.username
        let password=this.password
        this.axios.post('/admin/sys/login?username='+username+'&password='+password).then(function (res) {
          if (res.data.code=='500'){
            alert('账号或密码错误')
          }
          if(res.data.code=='200'){
            var isAdmin
            if (username=='admin'){
              isAdmin=true
            }
            else {
              isAdmin=false
            }
            var students = {
              aa : {token:res.data.token,username:username},
              isAdmin:isAdmin
            }
            students = JSON.stringify(students);//将JSON对象转化成字符串
            localStorage.setItem("students",students);//用localStorage保存转化好的的字符串
            let token=res.data.token
            this.GLOBAL.setToken(token)
            this.$router.push({name:'home'})
          }
        }.bind(this))
      }
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
