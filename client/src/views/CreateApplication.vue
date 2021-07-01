<template>
  <div class="row">
    <div class="col-3">
      <Sidebar />
    </div>
    <div class="container col-8">
      <h2 class="my-5">Create Application</h2>
      <!-- <p>{{GetApplications.message}}</p> -->
      <div>
        <form enctype="multipart/form-data" @submit.prevent="submit">
          <div class="row">
            <div class="fileup col">
              <div class="upload-btn-wrapper">
                <button class="btns">
                  <strong>+ choose file</strong>
                </button>
                <input type="file" name="file_path" ref="file" @change="handleFileUpload"/>
              </div>
            </div>
            <div class="col">
              <label for="link">Link</label>
              <input type="text" name="link" class="form-control"  v-model="link"/>
            </div>
           
          </div>
          
          <div class="row my-4">
            <div class="col">
              <label for="closure_date">Application closure date</label>
              <input type="date" name="closure_date" class="form-control" v-model="closure_date"/>
            </div>
            <div class="col">
              <label for="batch_id">Batch ID</label>
              <input type="text" name="batch_id" class="form-control"  v-model="batch_id"/>
            </div>
          </div>
          <div class="form-group my-3">
            <label for="instructions">Instructions</label>
            <textarea class="form-control" name id rows="4" v-model="instructions"></textarea>
          </div>
          <div class="text-center">
            <button class="btn btn-primary" type="submit">Submit</button>
          </div>
          
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "CreateApplication",
  components: {
    Sidebar
  },
  data() {
    return {
      file_path: '',
      batch_id: '',
      link: '',
      closure_date: '',
      instructions: ''
    }
  },
  created: function () {
      // a function to call getapplications action
      this.GetApplications()
  },
  computed: {
    ...mapGetters({ Applications: "StateApplications", Admin: "StateAdmin"}),

    // isValid() {
    //   if (
    //     this.link == "" ||
    //     this.file == "" ||
    //     this.batch_id == "" ||
    //     this.closing_date == "" ||
    //     this.instruction == ""
    //   ) {
    //     return false;
    //   } else {
    //     return true;
    //   }
    // }
  },

  methods: {
    ...mapActions(["CreateApplication", "GetApplications"]),

    handleFileUpload() {
      this.file_path = this.$refs.file.files[0];
    },

    submit() {
    //   if (this.isValid) {
        let formData = new FormData();
        formData.append("file_path", this.file_path);
        formData.append("batch_id", this.batch_id);
        formData.append("link", this.link);
        formData.append("closure_date", this.closure_date);
        formData.append("instructions", this.instructions);
        this.CreateApplication(formData);
        this.file_path = "";
        this.batch_id = "";
        this.link = "";
        this.closure_date = "";
        this.instructions = "";
        
    //   } else {
    //     alert("All fields are required");
    //   }
    }  
  },
};
</script>

<style>
.fileup {
  display: flex;
  justify-content: center;
}

h2 {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}

.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.btns {
  border: 1.55px dashed #2b3c4e;
  box-sizing: border-box;
  color: #2b3c4e;
  background-color: white;
  padding: 46px 180px;
  border-radius: 8px;
  font-size: 12px;
  text-align: center;
  /* font-weight: bold; */
}

.upload-btn-wrapper input[type="file"] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
</style>