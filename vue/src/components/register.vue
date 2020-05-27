<template>
  <div class="wrap">
    <div class="mask-bg">
      <div class="mask">
        <div class="nav">
          <h3>网站博客注册</h3>
        </div>
        <div class="mask-box">
          <div class="group">
            <p>
              <label>用&nbsp;&nbsp;户&nbsp;名:</label>&nbsp;
              <el-input placeholder="请输入用户" v-model="user"></el-input>
            </p>

            <p>
              <label>真实姓名:</label>&nbsp;
              <el-input placeholder="请输入密码" v-model="name"></el-input>
            </p>
            <p>
              <label>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码&nbsp;:</label>&nbsp;
              <el-input placeholder="请输入密码" v-model="pwd"></el-input>
            </p>
            <P>
              <label>确认密码:</label>&nbsp;
              <el-input placeholder="请输入密码" v-model="pwd1"></el-input>
            </P>
          </div>
        </div>
        <el-button type="primary" class="btn" @click="goLogin">注册</el-button>
      </div>
    </div>
  </div>
</template>
<script>
  import request from "axios";
  export default {
    props: {},
    components: {},
    data() {
      return {
        user: "",
        pwd: "",
        name: "",
        pwd1: ""
      };
    },
    computed: {},
    methods: {
      goLogin() {
        request
          .post("/api/goRegistry", {
            user: this.user,
            pwd: this.pwd,
            name: this.name,
            pwd1: this.pwd1
          })
          .then(res => {
            if (res.code === 1) {
              this.$router.history.go(-1);
              alert(res.message);
            } else {
              alert(res.message);
            }
          });
      }
    },
    created() {},
    mounted() {}
  };
</script>
<style scoped lang="">
  .mask-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #f5f5f5;
  }
  .mask {
    width: 500px;
    height: 500px;
    background: white;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .nav {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
  }
  .mask-box {
    width: 100%;
    height: 300px;
  }
  .group {
    width: 100%;
    height: 80px;
    padding:0px 20px;
  }
  .group .el-input{
    width:270px;
    margin-top:28px;
  }
  .btn {
    width: 150px;
    padding: 10px 10px;
    background: 0;
    position: absolute;
    left: 32%;
    bottom: 10px;
    background: deepskyblue;
    color: white;
    border-radius: 5px;
    border: 0;

  }
</style>
