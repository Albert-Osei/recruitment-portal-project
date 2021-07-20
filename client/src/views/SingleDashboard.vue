<template>
  <div class="user-dash">
    <!-- <h1>This is a single user {{ $route.params.id }}</h1> -->
    <div class="dashboard-menu">
      <UserP />
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
              :to="{ name: 'TakeAssessmentPage' }"
              >Assessment</router-link
            >
          </li>
        </div>
        <Logout />
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
            <p class="pending">{{ getDate(SingleApp.created_at) }}</p>
            <div class="blueline"></div>
            <p class="update">
              {{ getDiffDate(SingleApp.created_at) }}
            </p>
          </div>
          <div class="status-div">
            <p class="date-status-text">Application Status</p>
            <p class="pending">{{ gottenstatus.status }}</p>
            <div class="orangeline"></div>
            <p class="update">
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
              <router-link :to="{ name: 'TakeAssessmentPage' }" 
                ><button class="ass-btn" :disabled="validated" >
                  Take Assessment
                </button></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
import UserP from "@/components/UserP.vue";
import Logout from "@/components/Logout.vue";

export default {
  name: "SingleDashboard",
  components: {
    UserP,
    Logout,
  },

  data() {
    return {
      Profile: [],
      SingleApp: [],
      files: "",
      validated: true
    };
  },

  computed: {
    ...mapGetters(["getProfile", "StateForms", "StateUser", "getOneApp"]),
    gottenform() {
      return this.$store.state.auth.profile[0];
    },
    // isLoggedIn: function() {
    //   return this.$store.getters.isAuthenticated;
    // },
    gottenstatus() {
      return this.$store.state.auth.statuses.data[0];
    },
    
  },

  created: function() {
    this.GetForms();
  },

  methods: {
    ...mapActions(["GetForms", "fetchProfile", "fetchOneApp"]),
    getDate(s) {
      if (s != null) {
        var datet = s.split("T");
        // return datet[0];
        var ans = datet[0];
        return moment(ans).format("DD.MM.YY");
      } else {
        return "Not applied";
      }
    },
    isDisabled() {
      const userstatus = this.$store.state.auth.statuses.data[0].status;
      if (userstatus == 'approved') {
        this.validated = false
      }
    },
    getDiffDate(s) {
      if (s != null) {
        var datet = s.split("T");
        var day = new Date(datet[0]);
        var datt = new Date();
        var Difference_In_Time = datt - day.getTime();
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        return `${Math.floor(Difference_In_Days)} days since applied`;
      } else {
        return "You have not submitted application yet";
      }
    },

    async redirect() {
      this.$router.push("/");
    },

    // handleFileUpload() {
    //   const file = this.$refs.file.files[0];
    //   this.files = file;
    // },
  },

  async mounted() {
    await this.fetchProfile();
    this.Profile = await this.getProfile[0];
    console.log("this what i want" + this.Profile);

    await this.fetchOneApp();
    this.SingleApp = await this.getOneApp[0];

    this.$store.dispatch("GetAllUsers");
  },
};
</script>

<style scoped>
.user-dash {
  width: 100%;
  height: 120vh;
  display: flex;
}
li {
  list-style-type: none;
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
.logout-div li {
  list-style-type: none;
  padding: 10px;
}
.dash:active {
  text-decoration-color: #2b3c4e;
}
.main-menu a {
  text-decoration: none;
  font-family: 'Lato';
  font-weight: normal;
  font-size: 16px;
  color: #2B3C4E;
}
.main-menu img {
  padding-right: 10px;
}
.logout-div {
  margin-top: 20px;
  /* font-family: 'Lato';
  font-weight: normal;
  font-size: 16px;
  color: #2b3c4e; */
}

.date-status {
  display: flex;
}
.blueline {
  border: 2px solid #006df0;
  width: 150px;
}
.orangeline {
  border: 2px solid #f09000;
  width: 150px;
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
  border: none;
}
.date-div {
  width: 300px;
  margin-right: 50px;
  text-align: left;
}
.status-div {
  width: 220px;
}
.pending {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 58px;
  text-align: left;
  color: #2b3c4e;
}
.date-status-text {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: left;
  color: #4f4f4f;
}
.update {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  text-align: left;
  font-size: 12px;
  line-height: 14px;
  color: #4f4f4f;
  margin-top: 9px;
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
  border: none;
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
