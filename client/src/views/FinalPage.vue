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
              Thank you!
            </p>
          </div>
          <div class="timer">
            <!-- <div id="countdownExample">
              <div class="values">30:00</div>
            </div> -->
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
export default {
  name: "FinalPage",
};
</script>

<style scoped>
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
  width: 80%;
  height: 80vh;
  margin: auto;
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
.dashboard-body-sub {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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