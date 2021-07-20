<template>
  <div class="log-out">
    <div class="logout-div">
      <li @click="logout"><img src="../assets/logout.svg" alt="" />Log out</li>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "logout",

  methods: {
    ...mapActions(["LogOut"]),

    logout() {
      this.LogOut();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style>
.logout-div {
  margin-top: 20px;
}
.logout-div li {
  list-style-type: none;
  font-family: 'Lato';
  font-weight: normal;
  font-size: 16px;
  color: #2b3c4e;
  padding: 10px;
}
.logout-div img {
  padding-right: 10px;
}
</style>