<template>
  <div id="signup">
    <div class="signup-layout-container">
      <div class="logo-holder">
        <img src="../assets/logo.svg" alt="Enyata's Logo" />
      </div>
      <h2 class="applicant-signup">Applicant Sign Up</h2>
      <form @submit.prevent="submit" id="signupForm">
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
            <input v-model="info.phonenumber" type="text" id="phone" name="phonenumber" class="inputs" required="true"/>
          </div>
          <div class="input-container">
            <label for="password" class="label">Password</label>
            <input v-model="info.password" type="password" id="pword" name="password" class="inputs" required="true" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"/>
          </div>
          <div class="input-container">
            <label for="confirm_password" class="label">Confirm Passwrod</label>
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
            <a href="Login" style="text-decoration: none"><span class="login-redirect"> Sign In</span></a>
          </p>
        </div>
      </div>
    </div>
    <p v-if="showError" id="error">User already exists</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Signup",
  data() {
    return {
        info:{
            firstname: "",
            lastname: "",
            email: "",
            phonenumber: "",
            password: "",
            confirm_password: "",
        },
        showError: false   
    };
  },
  computed: {
     ...mapGetters(["apiResponse"]),
  },
  methods:{
    ...mapActions(["Signup"]),
    async submit() {
      // try {
      //   await this.Signup(this.info);
      //   this.$router.push("/login");
      //   this.showError = false
      // } catch (error) {
      //   this.showError = true
      // }

      try {
        const response = await this.Signup(this.info);
        this.$router.push({ name: "Home"});
        console.log(this.info);
        this.apiResponse(response);
        this.showError = false;
      } catch (error) {
        this.showError = true;
      }
    },  
    
    // apiResponse(response) {
    //   if (response.status == "success") {
    //     setTimeout(() => {
    //       this.$router.push({ name: "Login"});
    //       response.message = "";
    //     }, 8000);
    //   }
    // },
  },

};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,400&display=swap');

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
  outline: none;
  padding: 0 15px;
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
  border: none;
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
