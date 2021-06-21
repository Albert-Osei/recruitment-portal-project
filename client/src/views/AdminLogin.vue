<template>
  <div class="adminlogin">
    <div class="desktop-background">
      <img src="../assets/desktop-background.svg" alt="">
    </div>
    <form @submit.prevent="postData" method="post" class="login-box">
      <div class="logo">
        <img src="../assets/logo.svg" alt="enyata logo" />
      </div>
      <h2 class="login-header">Admin Log In</h2>
      <label for="email">Email Address</label>
      <input class="emailfield" type="email" name="email" v-model="posts.email"/>
      <label for="password">Password</label>
      <input class="passwordfield" type="password" name="password" v-model="posts.password"/>
      <button class="btn" type="submit">Sign In</button>
    </form>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)


export default {
  name: 'AdminLogin', 
  data(){
    return {
      posts:{
        email: null,
        password: null
      }
    }
  },
  methods:{
    postData(){
     this.axios.post("http://localhost:9090/api/v1/admin/login", this.posts)
     .then((result) => {
       console.warn(result)
     })
      this.$router.push('/profile')
    }
    
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,400&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #7557D3;
}

.desktop-background {
  position: absolute;
  right: 0;
  top: 10%;
}

.login-box {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30%;
  left: 40%;
}

.logo {
  width: 110px;
  height: 21px;
  margin: auto;
}

.logo img {
  width: 100%;
  height: 100%;
}

.login-header {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  color: #FFFFFF;
  text-align: center;
  margin: 24px 0 58px;
}

label {
  font-family: 'Lato';
  font-weight: normal;
  font-size: 14px;
  color: #FFFFFF;
}

input {
  border: 1.5px solid #FFFFFF;
  border-radius: 4px;
  width: 379px;
  height: 48px;
  background: none;
  margin-bottom: 30px;
}

.btn {
  width: 379px;
  height: 50px;
  background: #FFFFFF;
  border-radius: 4px;
  font-family: 'Lato';
  font-weight: bold;
  font-size: 16px;
  color: #7557D3;
  border: none;
}

</style>