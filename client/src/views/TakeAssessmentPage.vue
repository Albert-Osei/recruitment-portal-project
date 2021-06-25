<template>
  <div class="user-dash">
    <!-- <h1>This is a single user {{ $route.params.id }}</h1> -->
    <div class="dashboard-menu">
      <div class="profile-layout">
        <div class="profile-picture">
          <img src="../assets/pic.jpeg" alt="" />
        </div>
        <div>
          <p class="profile-name">Albert Camus</p>
          <p class="profile-email">camus@gmail.com</p>
        </div>
      </div>
      <div class="main-menu">
        <div>
          <li><img src="../assets/dashboard.svg" alt="" /> Dashboard</li>
          <li><img src="../assets/assessment.svg" alt="" />Assessment</li>
        </div>
        <div class="logout-div">
          <li><img src="../assets/logout.svg" alt="" />Log out</li>
        </div>
      </div>
    </div>
    <div class="dashboard-body-container">
      <div class="dashboard-body">
        <div class="header-container">
          <div>
            <h2>Take Assessment</h2>
            <p>
              Click the button below to start assessment, you have limited time
              for this test
            </p>
          </div>
          <div class="timer">
            <!-- <div id="countdownExample">
              <div class="values">30:00</div>
            </div> -->
          </div>
        </div>
        <div class="sand-clock-container">
          <img src="../assets/Flat hourglass.gif" alt="" />
          <p>We have 4 days left until the next assessment</p>
          <p>Watch this space</p>
          <router-link :to="{ name: 'Questions' }"
            ><button class="assessment-btn">
              Take Assessment
            </button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Quiz from "@/components/Quiz.vue";
export default {
  name: "TakeAssessmentPage",
  components: {
    // Quiz,
  },
  props: ["User"],
};
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.user-dash {
  width: 100%;
  height: 100vh;
  display: flex;
}
.dashboard-menu {
  width: 20%;
  height: 100vh;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-radius: 8px;
}
.dashboard-body-container {
  width: 80%;
  height: 100vh;
  background: #fdfdff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.profile-layout {
  width: 100%;
  height: 30vh;
  background: #7557d3;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
.profile-picture {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ffffff;
}
.profile-picture img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
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
.main-menu img {
  padding-right: 10px;
}
.logout-div {
  margin-top: 20px;
}

.header-container {
  padding-top: 2rem;
  height: 25vh;
  display: flex;
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
  width: 80%;
  height: 100vh;
  margin: auto;
  border: 1px solid red;
}
.sand-clock-container {
  width: 60%;
  height: 50vh;
  border: 1px solid red;
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