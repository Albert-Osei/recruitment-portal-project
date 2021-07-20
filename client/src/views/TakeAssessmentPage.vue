<template>
  <div class="user-dash">
    <!-- <h1>This is a single user {{ $route.params.id }}</h1> -->
    <div class="dashboard-menu">
      <UserP />
      <div class="main-menu">
        <div>
          <li>
            <img src="../assets/dashboard.svg" alt="" />
            <router-link :to="{ name: 'SingleDashboard' }"
              >Dashboard</router-link
            >
          </li>
          <li>
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
        <div class="header-container">
          <div class="take-A">
            <h2>Take Assessment</h2>
            <p>
              Click the button below to start assessment, you have limited time
              for this test
            </p>
          </div>
          <div class="timer">
            <div class="timer-text-cont"><h3 class="timer-text">Timer</h3></div>

            <h2 class="zero-timer">
              00 <span class="min">min</span>:000 <span class="min">sec</span>
            </h2>
          </div>
        </div>
        <div class="sand-clock-container">
          <img src="../assets/Flat hourglass.gif" alt="timer" id="loading" />
          <p>We have 4 days left until the next assessment</p>
          <p>Watch this space</p>
          <router-link :to="{ name: 'Questions' }"
            ><button
              v-on:click="countdown = 5"
              type="button"
              class="assessment-btn"
            >
              Take Assessment
            </button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserP from "@/components/UserP.vue";
import Logout from "@/components/Logout.vue";
export default {
  name: "user-dash",
  components: {
    UserP,
    Logout,
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

.main-menu {
  font-family: 'Lato';
  font-weight: normal;
  font-size: 16px;
  color: #2B3C4E;
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
.main-menu li {
  list-style-type: none;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #2b3c4e;
  padding: 10px;
}
a {
  text-decoration: none;
}
.main-menu img {
  padding-right: 10px;
}

.header-container {
  padding-top: 2rem;
  height: 25vh;
  display: flex;
  justify-content: space-between;
}
.header-container h2 {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}
.header-container p {
  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #2b3c4e;
}
.dashboard-body {
  width: 90%;
  height: 100vh;
  margin: auto;
}
.timer {
  width: 20%;
}
.timer-text-cont {
  display: flex;
  justify-content: flex-start;
}
.timer-text {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #4f4f4f;
}
.take-A {
  width: 70%;
}
.min {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #4f4f4f;
}
.sand-clock-container {
  width: 60%;
  height: 50vh;

  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.sand-clock-container img {
  width: 60px;
  height: 72px;
  margin: 10px;
}

#loading {
  animation: rotation 2s infinite linear;
}
@keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
  }
}
.sand-clock-container p {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16.7273px;
  line-height: 20px;
  text-align: center;
  color: #4f4f4f;
}
.assessment-btn {
  background: #b1b1b1;
  border-radius: 4px;
  width: 200px;
  height: 40px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  margin: 10px;
}
</style>