<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="rules" class="login-form" label-position="left">
      <div class="title-container">
        <h3 class="title">VUE-ADMIN</h3>
      </div>
      <el-form-item prop="account">
        <span class="svg-container svg-container_login">
          <svg-icon icon-class="user" />
        </span>
        <el-input v-model="loginForm.account" name="account" type="text" placeholder="登录账号" />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input v-model="loginForm.password" :type="passwordType" name="password" placeholder="登录密码" @keyup.enter.native="handleLogin" />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="icon" />
        </span>
      </el-form-item>

      <el-radio-group v-model="loginForm.type">
        <el-radio label="2">统一身份登录</el-radio>
        <el-radio label="1">管理员</el-radio>
      </el-radio-group>

      <el-row :gutter="15" class="margin-top-40">

        <el-col :sm="24">
          <el-button :loading="loading" size="large" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">本地登录</el-button>
        </el-col>
        <!-- <el-col :sm="24" :lg="16">
          <el-button size="large" plain type="success" style="width:100%;margin-bottom:30px;">前往统一身份认证登录</el-button>
        </el-col> -->
        <el-col :sm="24" class="text-primary">
          账号：admin 密码：123
          <br>
          账号：test 密码：123
        </el-col>
      </el-row>

    </el-form>
  </div>
</template>

<script>
import { login } from '@/api/login.js'

export default {
  data() {
    return {
      icon: 'eye',
      loginForm: {
        account: '',
        password: '',
        type: '1'
      },
      rules: {
        account: [
          {
            required: true,
            message: '请输入登录账号',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入登录密码',
            trigger: 'blur'
          }
        ]
      },
      passwordType: 'password',
      loading: false,
      showDialog: false
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
        this.icon = 'blink'
      } else {
        this.passwordType = 'password'
        this.icon = 'eye'
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          if (this.loginForm.type === '1') {
            // encrypt(this.loginForm.password)
            //   .then(rs => {
            this.loading = true
            login({
              account: this.loginForm.account,
              password: this.loginForm.password,
              type: 1
            })
              .then(rs => {
                this.loading = false
                this.$store.commit('setUserinfo', rs)
                this.$router.push({ path: '/' })
              })
              .catch(() => {
                this.loading = false
              })
            //   })
            //   .catch(() => { })
          } else {
            login(this.loginForm)
              .then(rs => {
                this.loading = false
                this.$store.dispatch('setUserinfo', rs)
                this.$router.push({ path: '/' })
              })
              .catch(() => {
                this.loading = false
              })
          }
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
$bg: #2d3a4b;
$light_gray: #eee;

/* reset element-ui css */
.login-container {
    .el-input {
        display: inline-block;
        height: 47px;
        width: 85%;
        input {
            background: transparent;
            border: 0px;
            -webkit-appearance: none;
            border-radius: 0px;
            padding: 12px 5px 12px 15px;
            color: $light_gray;
            height: 47px;
            &:-webkit-autofill {
                -webkit-text-fill-color: #fff !important;
                -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
            }
        }
    }
    .el-form-item {
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        color: #454545;
    }
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: $bg;
    .login-form {
        position: absolute;
        left: 0;
        right: 0;
        width: 400px;
        padding: 35px 35px 15px 15px;
        margin: 120px auto;
    }
    .tips {
        font-size: 14px;
        color: #fff;
        margin-bottom: 10px;
        span {
            &:first-of-type {
                margin-right: 16px;
            }
        }
    }
    .svg-container {
        padding: 6px 5px 6px 15px;
        color: $dark_gray;
        vertical-align: middle;
        width: 30px;
        display: inline-block;
        &_login {
            font-size: 20px;
        }
    }
    .title-container {
        position: relative;
        .title {
            font-size: 26px;
            font-weight: 400;
            color: $light_gray;
            margin: 0px auto 40px auto;
            text-align: center;
            font-weight: bold;
        }
    }
    .show-pwd {
        position: absolute;
        right: 10px;
        top: 7px;
        font-size: 16px;
        color: $dark_gray;
        cursor: pointer;
        user-select: none;
    }
    .thirdparty-button {
        position: absolute;
        right: 35px;
        bottom: 28px;
    }
}
</style>
