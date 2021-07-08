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
              :to="{ name: 'Assessment' }"
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
          <div class="thank-you">
            <h2>Take Assessment</h2>
            <p>
              Thank you!
            </p>
          </div>
          <div class="timer">
            <div class="timer-text-cont"><h3 class="timer-text">Timer</h3></div>

            <h2 class="zero-timer">
              00 <span class="min">min</span>:000 <span class="min">sec</span>
            </h2>
          </div>
        </div>
        <div class="dashboard-body-sub">
          <div class="confetti-container-layout">
            <div class="confetti-container">
              <img src="../assets/confetti.svg" alt="" />
            </div>
            <p>
              We have received your assessment test, we will get back to you
              soon.
            </p>
            <p>Best of luck</p>
            <router-link :to="{ name: 'Home' }"
              ><button class="home-btn">Home</button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserP from "@/components/UserP.vue";
import Logout from "@/components/Logout.vue";
export default {
  name: "Successful",
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
.logout-div {
  margin-top: 20px;
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
.timer-text {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #4f4f4f;
}
.timer-text-cont {
  display: flex;
  justify-content: flex-start;
}
.dashboard-body {
  width: 90%;
  height: 100vh;
  margin: auto;
}
.timer {
  width: 25%;
}
.thank-you {
  width: 70%;
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
.dashboard-body-sub {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
.confetti-container {
  width: 148px;
  height: 148px;
  margin: 10px;
}
.confetti-container img {
  width: 100%;
  height: 100%;
}
.confetti-container-layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.confetti-container-layout p {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16.7273px;
  line-height: 20px;
  text-align: center;
  color: #4f4f4f;
  padding: 3px;
}
.home-btn {
  background: #7557d3;
  border-radius: 4px;
  width: 205px;
  height: 41px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  margin: 10px;
}
</style>