<template>
  <div class="root">
    <Sidebar />
    <div class="main">
      <h1 class="main-title">Create Application</h1>
      <form @submit.prevent="submit" enctype="multipart/form-data">
        <div class="main-content1">
          <div class="dot-box">
            <button class="upload-wrap">+ Choose file</button>
            <input
              type="file"
              name="file_path"
              ref="file"
              @change="handleFileUpload"
            />
          </div>
          <div class="link-wrapper">
            <label for="link" class="input-text">Link</label>
            <input type="text" name="link" class="input-field" v-model="link" />
          </div>
        </div>
        <div class="main-content2">
          <div class="closure">
            <label for="closure_date">Application closure date</label>
            <input
              type="date"
              name="closure_date"
              class="input-field"
              v-model="closure_date"
            />
          </div>
          <div class="batchId">
            <label for="batch_id" class="input-text">Batch ID</label>
            <input
              type="text"
              name="batch_id"
              class="input-field"
              v-model="batch_id"
            />
          </div>
        </div>
        <div class="main-content3">
          <label for="instructions">Instructions</label>
          <input
            type="text"
            name="instructions"
            class="instructions-field"
            v-model="instructions"
          />
        </div>
        <div class="btn-field">
          <button type="submit" class="app-btn">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CreateApplication",
  components: {
    Sidebar,
  },
  data() {
    return {
      link: "",
      closure_date: "",
      batch_id: "",
      instructions: "",
      file_path: "",
    };
  },
  created: function() {
    // a function to call getapplications action
    this.GetApplications();
  },
  computed: {
    ...mapGetters({ Applications: "StateApplications", Admin: "StateAdmin" }),
  },
  methods: {
    ...mapActions(["CreateApplication", "GetApplications"]),

    handleFileUpload() {
      this.file_path = this.$refs.file.files[0];
    },

    submit() {
      let formData = new FormData();
      formData.append("link", this.link);
      formData.append("closure_date", this.closure_date);
      formData.append("batch_id", this.batch_id);
      formData.append("instructions", this.instructions);
      formData.append("file_path", this.file_path);
      this.CreateApplication(formData);
      this.link = "";
      this.closure_date = "";
      this.batch_id = "";
      this.instructions = "";
      this.file_path = "";
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,700;1,400&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.root {
  display: flex;
}

.main {
  margin: 137px 0 0 75px;
}

.main-title {
  font-family: "Lato";
  font-weight: 300;
  font-size: 43.5555px;
  color: #2b3c4e;
  margin-bottom: 62px;
}

.main-content1 {
  display: flex;
}

.dot-box {
  width: 456px;
  height: 108px;
  border: 1.55172px dashed #2b3c4e;
  box-sizing: border-box;
  border-radius: 6.2069px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin-right: 64px;
}

.dot-box input[type="file"] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}

.upload-wrap {
  background-color: #ffff;
  border: none;
}

label {
  font-family: "Lato";
  font-weight: normal;
  font-size: 14px;
  color: #2b3c4e;
}

.input-field {
  width: 456px;
  height: 41px;
  border: 1.5px solid #2b3c4e;
  box-sizing: border-box;
  border-radius: 4px;
  outline: none;
  padding: 0 15px;
  color: #2b3c4e;
}

.main-content2 {
  display: flex;
  margin-top: 30px;
}

.main-content3 {
  margin: 36px 0 44px 0;
}

.instructions-field {
  width: 976px;
  height: 144px;
  border: 1.5px solid #2b3c4e;
  box-sizing: border-box;
  border-radius: 4px;
  outline: none;
  padding: 0 15px;
}

.app-btn {
  width: 379px;
  height: 50px;
  background: #7557d3;
  border-radius: 4px;
  font-family: "Lato";
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
  border: none;
}

/* .upload-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
} */

.link-wrapper {
  display: flex;
  flex-direction: column;
}

.main-content3 {
  display: flex;
  flex-direction: column;
}

.closure {
  display: flex;
  flex-direction: column;
  margin-right: 64px;
}

.batchId {
  display: flex;
  flex-direction: column;
}

.btn-field {
  display: flex;
  justify-content: center;
}
</style>
