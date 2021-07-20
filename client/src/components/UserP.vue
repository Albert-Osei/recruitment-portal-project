<template>
  <div id="app">
    <div class="profile-layout">
      <div class="profile-picture">
        <img src="../assets/profile.jpg" alt="" />
      </div>
      <div class="username">
        <p
          class="profile-name"
          :firstname="Profile.firstname"
          :lastname="Profile.lastname"
        >
          {{ Profile.firstname + " " + Profile.lastname }}
        </p>
        <p class="profile-email">{{ Profile.email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "app",
  data() {
    return {
      Profile: [],
      SingleApp: [],
      files: "",
    };
  },

  computed: {
    ...mapGetters(["getProfile", "StateUser", "getOneApp"]),
  },

  methods: {
    ...mapActions(["fetchProfile", "fetchOneApp"]),
  },

  async mounted() {
    await this.fetchProfile();
    this.Profile = await this.getProfile[0];
    console.log("this what i want" + this.Profile);

    await this.fetchOneApp();
    this.SingleApp = await this.getOneApp[0];
  },
};
</script>

<style>
.profile-layout {
  width: 100%;
  height: 255px;
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
.min {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #4f4f4f;
}
.timer-text {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  color: #2b3c4e;
}
</style>