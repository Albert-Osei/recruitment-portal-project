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
        <div class="logout-div">
          <li><img src="../assets/logout.svg" alt="" />Log out</li>
        </div>
      </div>
    </div>
    <div class="dashboard-body-container">
      <div class="dashboard-body">
        <div class="header-container">
          <div class="take-A">
            <h2>Take Assessment</h2>
            <p>
              Click the finish button below to submit assessment, you can go
              back at any time to edit your answers.
            </p>
          </div>
          <div class="timer">
            <div class="timer-text-cont">
              <h3 class="timer-text">Timer</h3>
            </div>

            <div class="span">
              <div>
                <span class="time">
                  {{ mins }}
                  <span class="minute">min</span>
                </span>
              </div>
              <div>
                <span class=" time">
                  0{{ secs }}
                  <span class="minute">sec</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <Quiz />
      </div>
    </div>
  </div>
</template>

<script>
import Quiz from "@/components/Quiz.vue";
import UserP from "@/components/UserP.vue";

// import FlipCountdown from "vue2-flip-countdown";
export default {
  name: "Questions",
  components: {
    Quiz,
    UserP,
  },
  data() {
    return {
      time: 30 * 60,
      times: null,
    };
  },

  methods: {
    timed() {
      this.times = setInterval(() => this.countdown(), 1000);
    },

    submitQuiz() {
      for (let i = 0; i < this.questions.length; i++) {
        this.user.push(this.score);
      }
      this.time = 0;
      this.$router.push({ name: "Successful" });
    },

    countdown() {
      if (this.time > 0) {
        this.time--;
      } else if (this.time == 1) {
        this.submitQuiz();
      }
    },
  },

  computed: {
    mins() {
      const val = Math.floor(this.time / 60);
      if (String(val).length === 1) {
        return `0${val}`;
      }
      return val;
    },

    secs() {
      const val = this.time % 60;
      if (String(val).length === 1) {
        return `0${val}`;
      }
      return val;
    },
  },

  async mounted() {
    await this.timed();
  },
};
</script>

<style scoped>
.timer {
  width: 25%;
  /* border: 1px solid green; */
}
.time {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 50px;
  text-align: center;
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
  /* border: 1px solid magenta; */
  display: flex;
  justify-content: flex-start;
}
.take-A {
  width: 70%;
}
.span {
  display: flex;
}
a {
  text-decoration: none;
  color: #2b3c4e;
}

.minute {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #4f4f4f;
}
.flip-card__back-bottom {
  color: #000;
  position: absolute;
  top: 50%;
  left: 0;
  background: #ffffff;
}
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
  /* border: 1px solid salmon; */
}
.profile-layout {
  width: 100%;
  height: 35vh;
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
  font-family: 'Lato';
  font-weight: normal;
  font-size: 16px;
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
  width: 90%;
  height: 100vh;
  margin: auto;
  /* border: 1px solid magenta; */
}
.header-container {
  padding-top: 2rem;
  height: 20vh;
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
  max-width: 600px;
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #2b3c4e;
}
</style>
