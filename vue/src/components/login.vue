<template>
  <div class="wrap">
    <div class="mask-bg">
      <div class="mask">
        <div class="nav">
          <h3>网站博客登录</h3>
        </div>
        <div class="mask-box">
          <div class="group">
            <p>
              <label>用户名:</label>&nbsp;
              <el-input placeholder="请输入用户" v-model="user"></el-input>
            </p>
            <h3></h3>
            <p>
              <label>密&nbsp;&nbsp;&nbsp;码:</label>&nbsp;
              <el-input placeholder="请输入密码" v-model="pwd"></el-input>
            </p>
          </div>
        </div>
        <button class="btn" @click="goHome">登录</button>
      </div>
    </div>
  </div>
</template>
<script>
  import request from "axios"
  export default {
    props:{
    },
    components:{
    },
    data(){
      return {
        user:'',
        pwd:''
      }
    },
    computed:{
    },
    methods:{
      goHome(){
        request.post("/api/goLogin",{
          user:this.user,
          pwd:this.pwd
        }).then((res)=>{
          console.log(res);
          window.localStorage.setItem('token',res.token)
          if(res.code === 1){
            this.$router.push('/home');
            alert(res.message);
          }else{
            this.$router.push('/registry');
            alert(res.message);
          }
        })
      }
    },
    created(){
    },
    mounted(){
    }
  }
</script>
<style scoped lang="">
  .mask-bg{
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background: #f5f5f5;
  }
  .mask{
    width:400px;
    height:300px;
    background: white;
    border-radius: 5px;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }
  .nav{
    width:100%;
    height:50px;
    display: flex;
    justify-content:center;
    align-items: center;
    padding:0 10px;
    margin-top:1px;
  }
  .mask-box{
    width: 100%;
    height: 200px;
  }
  .group{
    padding:0px 20px;
  }
  .group .el-input {
    margin-top:28px;
    width:280px
  }

  .btn{
    width:150px;
    padding: 10px 10px;
    background: 0;
    position: absolute;
    left: 32%;
    bottom:30px;
    background: deepskyblue;
    color:white;
    border-radius: 5px;
    border:0;
  }

</style>
