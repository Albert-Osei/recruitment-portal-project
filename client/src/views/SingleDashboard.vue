<template>
  <div class="user-dash">
    <!-- <h1>This is a single user {{ $route.params.id }}</h1> -->
    <div class="dashboard-menu">
      <div class="profile-layout">
        <div class="profile-picture">
          <img src="../assets/pic.jpeg" alt="" />
        </div>
        <!-- <div
          v-for="singleuser in gottenform"
          :key="singleuser.id"
          :singleuser="singleuser"
        >
          <p class="username">{{ singleuser.firstname }}</p>
          <p>{{ singleuser.email }}</p>
        </div> -->
        <div v-if="User" :User="User">
          <p class="profile-name">Albert Conte</p>
          <p class="profile-email">{{ User }}</p>
        </div>
      </div>

      <div class="main-menu">
        <div>
          <li class="dash">
            <img src="../assets/dashboard.svg" alt="" />
            <router-link :to="{ name: 'SingleDashboard' }"
              >Dashboard</router-link
            >
          </li>
          <li class="ass">
            <img src="../assets/assessment.svg" alt="" /><router-link
              :to="{ name: 'Assessment' }"
              >Assessment</router-link
            >
          </li>
        </div>
        <div class="logout-div">
          <li><img src="../assets/logout.svg" alt="" />Log out</li>
        </div>
      </div>
    </div>
    <div class="dashboard-body-container">
      <div class="dashboard-body">
        <div class="text-layout">
          <h2>Dashboard</h2>
          <p>
            Your Application is currently being review, you wil be notified if
            successful
          </p>
        </div>
        <div class="date-status">
          <div class="date-div">
            <p class="date-status-text">Date of Application</p>
            <p class="pending">09.09.19</p>
            <div class="blueline"></div>
            <p class="update" style="margin-left: 20px;">Days since applied</p>
          </div>
          <div class="status-div">
            <p class="date-status-text">Application Status</p>
            <p class="pending">Pending</p>
            <div class="orangeline"></div>
            <p class="update" style="margin-left: 25px;">
              We will get back to you
            </p>
          </div>
        </div>
        <div class="cardholders">
          <div class="updates-layout">
            <h3>Updates</h3>
            <div class="greyline"></div>
            <div class="greyline"></div>
            <div class="greyline"></div>
            <div class="greyline"></div>
          </div>
          <div class="take-assessment-layout">
            <h3>Take Assessment</h3>
            <div class="take-assessment-body">
              <p>
                We have 4 days left until the next assessment
              </p>
              <p>Watch this space</p>
              <button class="ass-btn" disabled="disabled">
                Take Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "SingleDashboard",

  // data() {
  //   return {
  //     formdata,
  //   };
  // },

  computed: {
    ...mapGetters({ forms: "StateForms", User: "StateUser" }),
    gottenform() {
      return this.$store.state.auth.forms.data;
    },
  },

  created: function() {
    // a function to call getforms action
    this.GetForms();
  },

  methods: {
    ...mapActions(["GetForms"]),
  },
};
</script>

<style scoped>
.user-dash {
  width: 100%;
  height: 120vh;
  display: flex;
}
.dashboard-menu {
  width: 20%;
  height: 120vh;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-radius: 8px;
}
.dashboard-body-container {
  width: 80%;
  height: 120vh;
  background: #fdfdff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.profile-layout {
  width: 100%;
  height: 30vh;
  background: #7557d3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.profile-picture {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ffffff;
}
.profile-email {
  font-family: Lato;
  font-style: italic;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-align: center;
}
.profile-name {
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #ffffff;
  padding: 5px;
  text-align: center;
}
.profile-picture img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.main-menu {
  padding: 50px;
}
.ass {
  list-style-type: none;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #2b3c4e;
  padding: 10px;
  text-decoration: none;
}
.ass:active {
  text-decoration-color: #2b3c4e;
}
.dash {
  list-style-type: none;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #2b3c4e;
  padding: 10px;
  text-decoration: none;
}
.dash:active {
  text-decoration-color: #2b3c4e;
}
.main-menu a {
  text-decoration: none;
}
.main-menu img {
  padding-right: 10px;
}
.logout-div {
  margin-top: 20px;
}

.date-status {
  display: flex;
}
.blueline {
  border: 2px solid #006df0;
  width: 150px;
  margin-left: 20px;
}
.orangeline {
  border: 2px solid #f09000;
  width: 150px;
  margin-left: 27px;
}
.text-layout {
  padding-top: 2rem;
  height: 25vh;
}
.text-layout h2 {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}
.text-layout p {
  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #2b3c4e;
}
.dashboard-body {
  width: 90%;
  height: 112vh;
  margin: auto;
}
.date-div {
  width: 220px;
  height: 15vh;

  margin-right: 50px;
}
.status-div {
  width: 220px;
  height: 15vh;
}
.pending {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  color: #2b3c4e;
}
.date-status-text {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #4f4f4f;
}
.update {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #4f4f4f;
}
.cardholders {
  display: flex;
  margin-top: 50px;
  justify-content: space-between;
}
.cardholders h3 {
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}
.updates-layout {
  width: 45%;
  height: 440px;
  border: 1px solid #ececf9;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 30px;
}
.take-assessment-layout {
  width: 45%;
  height: 440px;
  border: 1px solid #ececf9;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 30px;
}
.greyline {
  width: 95%;
  height: 0px;
  border: 1px solid #cecece;
  margin-top: 5rem;
}
.ass-btn {
  background: #b1b1b1;
  border-radius: 4px;
  width: 205px;
  height: 41px;
  margin: 20px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
}
.take-assessment-body {
  width: 90%;
  height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
</style>