<template>
  <div class="app-form">
    <div class="logo-title">
      <div class="form-logo">
          <img src="../assets/form-logo.svg" alt="Enyata's logo">
      </div>
      <h1 class="app-title">Application Form</h1>
    </div>
    <form @submit.prevent="submit" class="enclosure">
      <div class="upload-box">
        <div class="dots">
          <div>
            <img src="../assets/plus.svg" alt="plus-symbol" />
          </div>
          <div>
            <h1>Upload CV</h1>
          </div>
        </div>
        <div class="dots">
          <div>
            <img src="../assets/plus.svg" alt="plus-symbol" />
          </div>
          <div>
            <h1>Upload Photo</h1>
          </div>
        </div>
      </div>
      <div class="input-box">
        <div class="input-layer-one" style="display:flex; flex-direction:column">
          <label for="firstname">First Name</label>
          <input class="input-style" type="text" name="firstname" v-model="form.firstname" required />
        </div>
        <div class="input-layer-one" style="display:flex; flex-direction:column">
          <label for="lastname">Last Name</label>
          <input class="input-style" type="text" name="lastname" v-model="form.lastname" required/>
        </div>
      </div>
      <div class="input-box">
        <div class="input-layer-one" style="display:flex; flex-direction:column">
          <label for="email">Email</label>
          <input class="input-style" type="email" name="email" v-model="form.email" required />
        </div>
        <div class="input-layer-one" style="display:flex; flex-direction:column">
          <label for="date_of_birth">Date of Birth</label>
          <input class="input-style" type="date" name="date_of_birth" v-model="form.date_of_birth" required style="font-family: Lato; font-style: italic; font-weight: normal; font-size: 10px; line-height: 12px; color: #CECECE; padding-left:13px " />
        </div>
      </div>
      <div class="input-box">
        <div class="input-layer-one" style="display:flex; flex-direction:column">
          <label for="address">Address</label>
          <input class="input-style" type="text" name="address" v-model="form.address" required />
        </div>
        <div class="input-layer-one" style="display:flex; flex-direction:column">
          <label for="university">University</label>
          <input class="input-style" type="text" name="university" v-model="form.university" required />
        </div>
      </div>
      <div class="input-box">
        <div class="input-layer-one" style="display:flex; flex-direction:column">
          <label for="course_of_study">Course of Study</label>
          <input class="input-style" type="text" name="course_of_study" v-model="form.course_of_study" required />
        </div>
        <div class="input-layer-one" style="display:flex; flex-direction:column">
          <label for="cgpa">CGPA</label>
          <input class="input-style" type="text" name="cgpa" v-model="form.cgpa" required />
        </div>
      </div>
      <div class="submit-btn">
        <button class="sub-btn" type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";


export default {
    name: "Forms",
    data() {
        return {
            form: {
                firstname: '',
                lastname: '',
                email: '',
                date_of_birth: '',
                address: '',
                university: '',
                course_of_study: '',
                cgpa: '',
            }
        };
    },
    created: function () {
      // a function to call getforms action
      this.GetForms()
    },
    computed: {
      ...mapGetters({ Forms: "StateForms", User: "StateUser"}),
    },
    methods: {
      ...mapActions(["CreateForm", "GetForms"]),
      async submit() {
        try {
          await this.CreateForm(this.form);
        } catch (error) {
          throw "Sorry you can't fill a form now!"
        }
      },
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,400&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.logo-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
}
.app-title {
  padding-top: 24px;
  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #2b3c4e;
}
.enclosure {
  width: 963px;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-radius: 8px;
  margin: 0 auto;
}
.upload-box {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 53px;
}
.dots {
  width: 211px;
  height: 49.97px;
  border: 1.5px dashed #2b3c4e;
  box-sizing: border-box;
  border-radius: 2.87205px;
  /*  */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 16px 0;
}
.dots h1 {
  font-family: 'Lato';
  font-weight: normal;
  font-size: 16px;
  /* identical to box height */
  color: #2b3c4e;
  padding: 0 13.97px 0;
}
.input-style {
  border: 1.5px solid #2b3c4e;
  box-sizing: border-box;
  border-radius: 4px;
  /*  */
  width: 379px;
  height: 48px;
}
.input-box {
  display: flex;
  align-items: center;
  justify-content: center;
}
input:focus {
  background: white;
  color: black;
}
label {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  color: #2b3c4e;
  padding-bottom: 5px;
}
.input-layer-one {
  padding: 54px 36px 0;
}
.sub-btn {
  background: #7557d3;
  border-radius: 4px;
  border: none;
  width: 379px;
  height: 50px;
  /* text */
  font-family: Lato;
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
}
.submit-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 43px 0 39px 0;
}
@media screen and (max-width: 600px) {
  .upload-box {
    flex-direction: column;
  }
  .dots {
    margin: 20px 0;
  }
  .input-box {
    flex-direction: column;
  }
  .logo-title {
    padding: 120px 0 50px 470px;
  }
  .app-title {
    width: 190px;
    text-align: center;
  }
}
</style>
