<template>
  <div class="app-form">
    <div class="logo-title">
      <div class="form-logo">
          <img src="../assets/form-logo.svg" alt="Enyata's logo">
      </div>
      <h1 class="app-title">Application Form</h1>
    </div>
    <form @submit.prevent="submit" class="enclosure" enctype="multipart/form-data">
      <div class="upload-box">
        <div class="dots">
          <div>
            <button class="btns">+ Upload CV</button>
            <input type="file" name="files_path" ref="file" @change="handleFileUpload"/>
          </div>
        </div>
        <div class="dots">
          <div>
            <button class="btns">+ Upload Photo</button>
            <input type="file" name="files_path" ref="file" @change="handleFileUpload"/>
          </div>
        </div>
      </div>
      <div class="input-box">
        <div class="input-layer-one" style="display:flex; flex-direction:column">
          <label for="firstname">First Name</label>
          <input class="input-style" type="text" name="firstname" v-model="firstname" required />
        </div>
        <div class="input-layer-one" style="display:flex; flex-direction:column">
          <label for="lastname">Last Name</label>
          <input class="input-style" type="text" name="lastname" v-model="lastname" required/>
        </div>
      </div>
      <div class="input-box">
        <div class="input-layer-one" style="display:flex; flex-direction:column">
          <label for="email">Email</label>
          <input class="input-style" type="email" name="email" v-model="email" required />
        </div>
        <div class="input-layer-one" style="display:flex; flex-direction:column">
          <label for="date_of_birth">Date of Birth</label>
          <input class="input-style" type="date" name="date_of_birth" v-model="date_of_birth" required style="font-family: Lato; font-style: italic; font-weight: normal; font-size: 10px; line-height: 12px; color: #CECECE; padding-left:13px " />
        </div>
      </div>
      <div class="input-box">
        <div class="input-layer-one" style="display:flex; flex-direction:column">
          <label for="address">Address</label>
          <input class="input-style" type="text" name="address" v-model="address" required />
        </div>
        <div class="input-layer-one" style="display:flex; flex-direction:column">
          <label for="university">University</label>
          <input class="input-style" type="text" name="university" v-model="university" required />
        </div>
      </div>
      <div class="input-box">
        <div class="input-layer-one" style="display:flex; flex-direction:column">
          <label for="course_of_study">Course of Study</label>
          <input class="input-style" type="text" name="course_of_study" v-model="course_of_study" required />
        </div>
        <div class="input-layer-one" style="display:flex; flex-direction:column">
          <label for="cgpa">CGPA</label>
          <input class="input-style" type="text" name="cgpa" v-model="cgpa" required />
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
          firstname: "",
          lastname: "",
          email: "",
          date_of_birth: "",
          address: "",
          university: "",
          course_of_study: "",
          cgpa: "",
          files_path: "",
          message: "",
          profile: [],
        };
    },
    // created: function () {
    //   // a function to call getforms action
    //   this.GetForms()
    // },

    async mounted() {
      await this.fetchProfile()[
        ((this.profile = await this.getProfile),
        (this.firstname = await this.getProfile.firstname),
        (this.lastname = await this.getProfile.lastname),
        (this.email = await this.getProfile.email))
      ];
    },
    computed: {
      // ...mapGetters({ Forms: "StateForms", User: "StateUser"}),
      ...mapGetters(["StateForms", "StateUser", "getProfile"]),
    },
    methods: {
      // ...mapActions(["CreateForm", "GetForms"]),
      ...mapActions(["CreateForm", "fetchProfile"]),

      handleFileUpload() {
        this.files_path = this.$refs.file.files[0];

        console.log(this.files_path);

        const allowedTypes = [
          "application/pdf",
          "image/png",
          "image/jpg",
          "image/jpeg",
          "application/docx",
        ];
        if (!allowedTypes.includes(this.files_path.type)) {
          alert("File type is wrong");
        } else if (this.files_path.size > 500000) {
          this.message = "File size is Too Large, max size is 500kb";
        } else {
          this.message = "";
        }
      },
      async submit() {
        // try {
        //   await this.CreateForm(this.form);
        // } catch (error) {
        //   throw "Sorry you can't fill a form now!"
        // }

        let formData = new FormData();

        formData.append("firstname", this.firstname);
        formData.append("lastname", this.lastname);
        formData.append("email", this.email);
        formData.append("date_of_birth", this.date_of_birth);
        formData.append("address", this.address);
        formData.append("university", this.university);
        formData.append("course_of_study", this.course_of_study);
        formData.append("cgpa", this.cgpa);
        formData.append("files_path", this.files_path);
        // this.CreateForm(formData);
        // this.firstname = '';
        // this.lastname = '';
        // this.email = '';
        // this.date_of_birth = '';
        // this.address = '';
        // this.university = '';
        // this.course_of_study = '';
        // this.cgpa = '';
        // this.files_path = '';
        console.log(formData);
        try {
          await this.CreateForm(formData);
          this.$router.push("singledashboard");
        } catch (error) {
          throw "Sorry you can't fill a form now";
        }
      },
    },
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
  position: relative;
  overflow: hidden;
}

input {
  outline: none;
  padding: 0 20px;
}
.upload-box input[type="file"] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
.btns {
  width: 211px;
  height: 49.97px;
  border: 1.5px dashed #2b3c4e;
  box-sizing: border-box;
  border-radius: 2.87205px;
  background-color: #ffff;
  /*  */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 16px 0;
  font-family: 'Lato';
  font-weight: normal;
  font-size: 16px;
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
