<template>
  <div class="home">
    <section class="landing-page">
      <div class="nav-hero">
        <div class="wrapper-hero-bg">
          <div class="hero-bg">
            <nav class="navigation-bar">
              <div class="nav-linear">
                <div>
                  <img src="../assets/form-logo.svg" alt="Enyata Logo" />
                </div>
                <input type="checkbox" id="nav-check" />

                <label for="nav-check">
                  <div class="hamburger-menu">
                    <img src="../assets/hamburger.svg" alt="menu" />
                  </div>
                </label>
                <div class="anc-tags">
                  <router-link :to="{ name: 'Home' }">Home</router-link>
                  <router-link :to="{ name: 'Login' }">Sign in</router-link>
                  <span v-if="isLoggedIn">
                    <a @click="logout">Logout</a>
                  </span>
                  <span v-else>
                    <router-link to="/signup">Register</router-link> |
                    <router-link to="/login">Login</router-link>
                  </span>
                  <!-- <h4 v-if="user">
                    Hi, {{ user.firstname }} {{ user.lastname }}
                  </h4>
                  <h4 v-if="!user">Hi, You are not logged in!</h4> -->
                </div>
              </div>
            </nav>
            <div class="hero-layout-wrappper">
              <div class="hero-layout-container">
                <div class="hero-layout-left">
                  <div class="hero-components">
                    <div class="hero-left-text">
                      <h1>
                        Ever had a Dream of Becoming a Software
                        <span class="hero-odd-text">Engineer?</span>
                      </h1>
                      <p>
                        Join enyata academy today and bring your long awaiting
                        dream to reality.
                      </p>
                    </div>
                    <div>
                      <router-link :to="{ name: 'Signup' }"
                        ><button class="hero-btn">
                          Register Now
                        </button></router-link
                      >
                    </div>
                  </div>
                </div>
                <div class="hero-layout-right">
                  <div>
                    <img
                      class="hero-pic"
                      src="../assets/father-son.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="why-us">
      <div class="why-us-wrapper">
        <div class="why-us-container">
          <div class="why-us-heading">
            <div>
              <hr class="why-us-boarder" />
            </div>
            <div>
              <h1>Why us?</h1>
            </div>
          </div>
          <div class="container-four-texts">
            <div class="text-one">
              <div class="titles-paragraphs">
                <h1>Learn from the best</h1>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation amet.
                </p>
              </div>
            </div>
            <div class="text-two">
              <div class="titles-paragraphs">
                <h1>100% online classes</h1>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation amet.
                </p>
              </div>
            </div>
            <div class="text-one">
              <div class="titles-paragraphs">
                <h1>Get paid while learning</h1>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation amet.
                </p>
              </div>
            </div>
            <div class="text-two">
              <div class="titles-paragraphs">
                <h1>Work on real project</h1>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="purple-footer">
        <h1>Copyright © Enyata 2021</h1>
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import axios from "axios";
// import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {},

  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isAuthenticated;
    },
  },

  methods: {
    async logout() {
      await this.$store.dispatch("LogOut");
      this.$router.push("/login");
    },
  },
};
</script>
<style scoped>
:root {
  --gray: #4f5665;
  --orange: #f53838;
}
* {
  font-family: "Poppins", sans-serif;
}
.hero-bg {
  background-image: url(../assets/light-squares.png);
  height: 517.72px;
  width: 100% 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  position: relative;
}
.nav-linear {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 42px 255px 0 136px;
}
.anc-tags a {
  padding-left: 30px;
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: rgba(33, 31, 38, 0.71);
}
.hero-left-text h1 {
  width: 633px;
  font-style: normal;
  font-weight: bold;
  font-size: 40.9082px;
  line-height: 57px;
  letter-spacing: 0.035em;

  color: #211f26;
  padding: 0 0 23px;
}
.hero-odd-text {
  color: #7557d3;
}
.hero-left-text p {
  width: 508px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.02em;

  color: rgba(33, 31, 38, 0.71);
  padding: 0 0 32px;
}
.hero-btn {
  background: #7557d3;
  border-radius: 2px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  width: 152px;
  height: 48px;
  color: #ffffff;
  border: 1px solid #7557d3;
  outline: none;
}
.hero-pic {
  height: 490px;
  width: 100%;
}
.hero-layout-right {
  width: 50%;
}
.hero-layout-left {
  width: 50%;
}
.hero-pic img {
  width: 100%;
  height: 100%;
}
.hero-layout-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 42px 136px 0;
}
.why-us-heading {
  display: flex;
  padding: 179px 136px 40px;
}
.why-us-heading h1 {
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 140%;
  /* identical to box height, or 34px */
  letter-spacing: 0.01em;
  color: #211f26;
}
.why-us-boarder {
  width: 34px;
  height: 2px;
  background: #fdc840;
  border: 2px;
  margin: 17px 16px 0 0;
}
.text-one {
  width: 292px;
  height: 202px;
  background: rgba(117, 87, 211, 0.1);
}
.text-two {
  width: 292px;
  height: 202px;
  background: #ffffff;
}
.titles-paragraphs h1 {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.01em;
  color: #211f26;
  padding: 0 0 12px;
}
.titles-paragraphs {
  padding: 24px 24px 0;
}
.titles-paragraphs p {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 156%;
  /* or 22px */
  letter-spacing: 0.01em;
  color: rgba(33, 31, 38, 0.6);
  width: 242px;
}
.container-four-texts {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 136px 0;
}
.purple-footer {
  height: 176px;
  background: #7557d3;
}
.purple-footer h1 {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 156%;
  /* identical to box height, or 22px */
  letter-spacing: 0.01em;
  color: #ffffff;
  text-align: center;
  padding: 55px 0;
}
/* Hamburger */

.hamburger-menu {
  display: none;
  width: 25px;
  height: 25px;
}

.hamburger-menu img {
  width: 100%;
  height: 100%;
}

#nav-check {
  display: none;
}

@media screen and (max-width: 600px) {
  .anc-tags {
    display: none;
  }
  .nav-linear[data-v-fae5bece] {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0px;
    padding-top: 40px;
  }
  .hero-layout-container {
    flex-direction: column;
  }
  .hero-layout-left {
    width: 100vw;
  }

  .hero-left-text h1 {
    width: 300px;
    margin: auto;
    font-size: 25px;
  }
  .hero-left-text p {
    width: 300px;
    margin: auto;
  }
  .container-four-texts {
    flex-direction: column;
  }
  .hero-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 35px;
    margin-left: 60px;
  }
  .hero-pic {
    width: 100vw;
    padding: 50px;
  }
  .why-us-heading {
    margin-top: 479px;
    padding: 0 0 35px 59px;
  }
  /* Hamburger */
  .hamburger-menu {
    display: block;
  }
  nav #nav-check:checked ~ .anc-tags {
    display: block;
    position: absolute;
    width: 100vw;
    top: 130px;
    background-color: #7557d3;
    left: 0;
    right: 0;
    text-align: center;
  }
  .anc-tags a {
    display: block;
    text-align: center;
    margin: 0;
    padding: 25px;
    color: #ffffff;
  }
}
</style>