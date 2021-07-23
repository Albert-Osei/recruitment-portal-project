<template>
  <div class="profile">
    <div class="sidebar">
      <div class="icon-box">
        <div class="icon">
          <img src="" alt="" />
        </div>
        <h2 class="admin-name">Albert Conte</h2>
        <h3 class="admin-email">conte@gmail.com</h3>
      </div>
      <div class="anchor">
        <div class="anchor-grp">
          <div class="anchor-icon">
            <img
              src="../assets/application.svg"
              alt="create application icon"
            />
          </div>
          <router-link :to="{ name: 'CreateApplication' }">Create Application</router-link>
        </div>
        <div class="anchor-grp">
          <div class="anchor-icon">
            <img src="../assets/entries.svg" alt="application entries icon" />
          </div>
          <router-link :to="{ name: 'EntriesTable' }">Application Entries</router-link>
        </div>
        <div class="anchor-grp">
          <div class="anchor-icon">
            <img src="../assets/assessment.svg" alt="compose assessment icon" />
          </div>
          <router-link :to="{ name: 'Assessment' }">Compose Assessment</router-link>
        </div>
        <div class="anchor-grp">
          <div class="anchor-icon">
            <img src="../assets/history.svg" alt="assessment history icon" />
          </div>
          <router-link :to="{ name: ''}">Assessment History</router-link>
        </div>
        <div class="anchor-grp">
          <div class="anchor-icon">
            <img src="../assets/results.svg" alt="results icon" />
          </div>
          <router-link :to="{ name: '' }">Results</router-link>
        </div>
        <div class="anchor-grp">
          <div class="anchor-icon">
            <img src="../assets/Setting.svg" alt="settings icon" />
          </div>
          <router-link :to="{ name: 'Profile' }">Settings</router-link>
        </div>
        <div class="logout-anchor-grp">
          <div class="anchor-icon">
            <img src="../assets/logout.svg" alt="logout icon" />
          </div>
          <a href="">Log Out</a>
        </div>
      </div>
    </div>
    <div class="content">
      <h2 class="content-header1">Profiles and Settings</h2>
      <h3 class="content-header2">
        Helps you set admin profile and give other users permissions
      </h3>
      <div class="setting-btns">
        <button class="profile-btn">Admin Profile</button>
        <button class="timer-btn">Timer Settings</button>
      </div>
      <div class="profile-column">
        <h2 class="profile-column-header">Profiles Setting</h2>
        <button class="profile-column-btn">Edit</button>
      </div>
      <form @submit.prevent="update" enctype="multipart/form-data" class="profile-input">
        <div class="upload">
          <div class="upload-grp">
            <div class="upload-icon">
              <img src="" alt="" />
            </div>
            <div class="upload-pic-btn">
              <button class="upload-tag-text">Upload new image</button>
              <input type="file" name="image_url" ref="file" @change="handleFileUpload">
            </div>
          </div>
          <label for="name" class="input-title">Name</label>
          <input
            type="text"
            name="name"
            id="input"
          />
          <label for="country" class="input-title">Country</label>
          <input
            type="text"
            name="country"
            id="input"
          />
        </div>
        <div class="second-input">
          <div class="remove-column">
            <div class="remove-icon">
              <img src="../assets/remove.svg" alt="delete image icon" />
            </div>
            <p class="remove-text">Remove</p>
          </div>
          <div class="contact-inputs">
            <!-- <div class="contact-email">
              <label for="email">Email</label>
              <input type="text" name="email" class="contacts-field" id="input"/>
            </div> -->
            <div class="contact-number">
              <label for="phonenumber">Phone number</label>
              <input
                type="text"
                name="phonenumber"
                class="contacts-field"
                id="input"
              />
            </div>
          </div>
          <div class="address-column">
            <label for="address">Address</label>
            <input
              type="text"
              name="address"
              class="address-field"
              id="input"
            />
          </div>
          <button type="submit" class="contacts-btn">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Profile",
  components: {},
  data() {
    return {
      name: "",
      phonenumber: "",
      country: "",
      address: "",
      image_url: "",
    };
  },
  computed: {
    ...mapGetters({ admins: "StateAllAdmins", Admin: "StateAdmin" }),
  },
  methods: {
    ...mapActions(["editAdmin", "GetAllAdmins"]),

    handleFileUpload() {
      this.image_url = this.$refs.file.files[0];
    },

    update() {
      let formData = new FormData();
      formData.append("name", this.name);
      formData.append("country", this.phonenumber);
      formData.append("phonenumber", this.country);
      formData.append("address", this.address);
      formData.append("image_url", this.image_url);
      this.editAdmin(formData);
      this.name = "";
      this.phonenumber = "";
      this.country = "";
      this.address = "";
      this.image_url = "";
    }
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

/* Nav sidebar */
.sidebar {
  width: 292px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-radius: 8px;
}

.icon {
  width: 80px;
  height: 80px;
  background: #e5e5e5;
  border-radius: 50px;
  margin: auto;
}

.icon-box {
  width: 292px;
  background: #7557d3;
  padding: 75px 30px 36px 30px;
  margin-bottom: 42px;
}

.admin-name {
  font-family: "Lato";
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
}

.admin-email {
  font-family: "Lato";
  font-style: italic;
  font-weight: normal;
  font-size: 16px;
  color: #ffffff;
  text-align: center;
}

.anchor-icon {
  width: 14px;
  height: 13px;
  margin-right: 18px;
}

.anchor-icon img {
  width: 100%;
  height: 100%;
}

a {
  font-family: "Lato";
  font-weight: normal;
  font-size: 16px;
  color: #2b3c4e;
  text-decoration: none;
}

.anchor-grp {
  display: flex;
  margin-bottom: 29px;
}

.logout-anchor-grp {
  display: flex;
  margin-top: 230px;
}

/* Profile and Settings column */
.profile {
  display: flex;
}

.content {
  width: 100%;
  padding: 101px 0 0 42px;
}
.content-header1 {
  font-family: "Lato";
  font-weight: 300;
  font-size: 43px;
  color: #2b3c4e;
}

.content-header2 {
  font-family: "Lato";
  font-weight: normal;
  font-size: 14px;
  color: #202f44;
  opacity: 0.5;
  padding: 15px 0 86px 0;
}

.setting-btns {
  display: flex;
  flex-direction: row;
  margin-bottom: 43px;
}

.profile-btn {
  width: 188px;
  height: 64px;
  font-family: "Lato";
  font-weight: normal;
  font-size: 14px;
  color: #333758;
  border: none;
  background: #ffffff;
}

.timer-btn {
  width: 188px;
  height: 64px;
  font-family: "Lato";
  font-weight: normal;
  font-size: 14px;
  color: #333758;
  margin-left: 50px;
  border: none;
  background: #ffffff;
}

.profile-btn:hover,
.timer-btn:hover {
  background: rgba(117, 87, 211, 0.1);
}

.profile-column {
  display: flex;
  justify-content: space-between;
  width: 70%;
  border-bottom: 1px solid #f2f2f2;
  padding-bottom: 12px;
}

.profile-column-header {
  font-family: "Lato";
  font-weight: bold;
  font-size: 16px;
  color: #4a4a4a;
}

.profile-column-btn {
  width: 127px;
  height: 38px;
  border: 1px solid #7557d3;
  box-sizing: border-box;
  border-radius: 3px;
  background: none;
  font-family: "Karla";
  font-weight: normal;
  font-size: 15px;
  color: #7557d3;
}

.profile-input {
  display: flex;
}

.upload {
  display: flex;
  flex-direction: column;
}

.upload-grp {
  display: flex;
  margin: 56px 46px 64px 0;
  align-items: center;
}

.upload-icon {
  width: 54px;
  height: 54px;
  border-radius: 50px;
  background: #e5e5e5;
  margin-right: 32px;
}

.upload-pic-btn {
  position: relative;
  overflow: hidden;
}

.upload-pic-btn input[type="file"] {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}

.upload-tag-text {
  background-color: #ffffff;
  border: none;
  height: 18px;
  font-family: "Lato";
  font-weight: normal;
  font-size: 15px;
  color: #333758;
  opacity: 0.5;
  /* border-bottom: 1px solid #333758; */
}

.second-input {
  display: flex;
  flex-direction: column;
}

.contact-inputs {
  display: flex;
}

label {
  font-family: "Lato";
  font-weight: normal;
  font-size: 15px;
  color: #333758;
  opacity: 0.5;
}

#input {
  width: 340px;
  height: 54px;
  background: rgba(117, 87, 211, 0.1);
  margin-bottom: 40px;
  border: none;
  outline: none;
  padding: 0 15px 0 15px;
}

.contact-number {
  display: flex;
  flex-direction: column;
  margin-left: 45px;
}

/* .contact-email {
  display: flex;
  flex-direction: column;
  margin: 0 45px 0 45px;
} */

.remove-column {
  display: flex;
  margin: 74px 0 62px 45px;
}

.remove-icon {
  width: 8px;
  height: 8px;
  margin-right: 4px;
}

.remove-icon img {
  width: 100%;
  height: 100%;
}

.remove-text {
  font-family: "Lato";
  font-weight: normal;
  font-size: 15px;
  color: #ff5722;
}

.address-column {
  display: flex;
  flex-direction: column;
  margin-left: 45px;
}

.address-field {
  width: 469px;
  height: 54px;
  background: rgba(117, 87, 211, 0.1);
}

.contacts-btn {
  width: 130px;
  height: 40px;
  background: #7557d3;
  border-radius: 3px;
  border: none;
  font-family: "Karla";
  font-weight: normal;
  font-size: 15px;
  color: #ffffff;
  margin-left: 100px;
}
</style>
