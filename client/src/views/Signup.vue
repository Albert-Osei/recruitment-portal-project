<template>
  <div id="signup">
    <div class="signup-layout-container">
      <div class="logo-holder">
        <img src="../assets/logo.svg" alt="Enyata's Logo" />
      </div>
      <h2 class="applicant-signup">Applicant Sign Up</h2>
      <form @submit.prevent="signupUser" method="post" id="signupForm">
        <div class="form-container">
          <div class="input-container">
            <label for="firstname" class="label">First Name</label>
            <input v-model="info.firstname" type="text" name="firstname" id="fname" class="inputs" required="true"/>
          </div>
          <div class="input-container">
            <label for="lastname" class="label">Last Name</label>
            <input v-model="info.lastname" type="text" id="lname" name="lastname" class="inputs" required="true"/>
          </div>
          <div class="input-container">
            <label for="email" class="label">Email Address</label>
            <input v-model="info.email" type="email" id="email" name="email" class="inputs"/>
          </div>
          <div class="input-container">
            <label for="phonenumber" class="label">Phone Number</label>
            <input v-model="info.phonenumber" type="number" id="phone" name="phonenumber" class="inputs" required="true"/>
          </div>
          <div class="input-container">
            <label for="password" class="label">Password</label>
            <input v-model="info.password" type="password" id="pword" name="password" class="inputs" required="true"/>
            <i><img src="../assets/eye.svg" alt="toggle-eye" class="eye"/></i>
          </div>
          <div class="input-container">
            <label for="" class="label">Confirm Passwrod</label>
            <input v-model="info.confirm_password" type="password" id="confirm_pword" name="confirm_password" class="inputs" required="true"/>
            <span id="message"></span>
          </div>
        </div>
        <div class="signup-btn-container">
          <button class="signup-btn" type="submit">Sign Up</button>
        </div>
      </form>
      <div class="redirect">
        <div class="dont-have-account">
          <p>
            Already have an account?
            <a><span class="login-redirect"> Sign In</span></a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

export default {
  name: "signup",
  data() {
    return {
        info:{
            firstname: null,
            lastname: null,
            email: null,
            phonenumber: null,
            password: null,
            confirm_password: null,
        }   
    };
  },
  methods:{
    signupUser(){
        this.axios.post("http://localhost:9090/api/v1/users/signup", this.info)
        .then((result) => {
            console.warn(result)
        })
    }
  }

};
</script>

<style scoped>
#signup {
  background: #ffffff;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
}
.signup-layout-container {
  width: 80%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
}
.logo-holder img {
  width: 110.1px;
  height: 20.84px;
}
.logo-holder {
  margin: 10px 0;
}
.applicant-signup {
  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #2b3c4e;
  margin: 10px 0;
}
.form-container {
  width: 100%;
  height: 50vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 20px;
}
.input-container {
  height: 80px;
  width: 400px;
  margin-right: 30px;
}
.inputs {
  width: 379px;
  height: 48px;
  border: 1.5px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 4px;
  margin: 10px 0;
}
.label {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #4f4f4f;
}
.signup-btn {
  background: #7557d3;
  border-radius: 4px;
  width: 520px;
  height: 50px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
}
.signup-btn-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.redirect p {
  font-family: Lato;
  font-style: italic;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #4f4f4f;
}
.login-redirect {
  color: #4a54e7;
}
</style>
