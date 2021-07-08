<template>
  <div class="admindashboard">
    <Sidebar />
    <div class="admindashboard-content">
      <h1 class="caption">Dashboard</h1>
      <div class="slot-column">
        <div class="slot1">
          <h3 class="slot-header">Create Applications</h3>
          <div class="numeral-field1">
            <p class="numeral">233</p>
          </div>
          <h3 class="subtext">Academy 2.0</h3>
        </div>
        <div class="slot2">
          <h3 class="slot-header">Total Applications</h3>
          <div class="numeral-field2">
            <p class="numeral">4253</p>
          </div>
          <h3 class="subtext">All entries so far</h3>
        </div>
        <div class="slot3">
          <h3 class="slot-header">Academy's</h3>
          <div class="numeral-field3">
            <p class="numeral">4</p>
          </div>
          <h3 class="subtext">So far</h3>
        </div>
      </div>
      <div class="container">
        <div class="history-container">
          <h2 class="history-caption">History</h2>
          <p class="history-subtext">Last Update 18:24, 22/02/19</p>
          <div class="container-row">
            <p class="row-text">Academy Batch 1</p>
            <p class="row-text-middle">15 students</p>
            <p class="row-text">started 11/09/15</p>
          </div>
          <div class="container-row">
            <p class="row-text">Academy Batch 1</p>
            <p class="row-text-middle">15 students</p>
            <p class="row-text">started 11/09/15</p>
          </div>
          <div class="container-row">
            <p class="row-text">Academy Batch 1</p>
            <p class="row-text-middle">15 students</p>
            <p class="row-text">started 11/09/15</p>
          </div>
        </div>
        <div class="assessment-container">
          <h2 class="assessment-caption">Create Assessment</h2>
          <div class="container-text">
            <p class="assessment-text">
              Create test question for an incoming academy students
            </p>
            <router-link :to="{ name: 'Assessment'}"><button class="assessment-btn">Create Assessment</button></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "AdminDashboard",
  components: {
    Sidebar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,700;1,400&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.admindashboard {
  display: flex;
}

.caption {
  font-family: 'Lato';
  font-weight: 300;
  font-size: 43.5555px;
  color: #2B3C4E;
}

.slot-header {
  font-family: 'Nunito Sans';
  font-weight: normal;
  font-size: 14px;
  color: #4F4F4F;
}

.numeral {
  font-family: 'Nunito Sans';
  font-weight: 300;
  font-size: 48px;
  color: #2B3C4E;
  padding: 8px 0 11px 0;
}

.subtext {
  font-family: 'Nunito Sans';
  font-weight: normal;
  font-size: 12px;
  color: #4F4F4F;
  padding-top: 9px;
}

.numeral-field1 {
  border-bottom: 5px solid #006DF0;
  border-radius: 4px;
}

.numeral-field2 {
  border-bottom: 5px solid #00F026;
  border-radius: 4px;
}

.numeral-field3 {
  border-bottom: 5px solid #F09000;
  border-radius: 4px;
}

.slot-column {
  display: flex;
  margin: 65px 0 52px 0;
}

.slot2 {
  margin: 0 111px 0 99px;
}

.container {
  display: flex;
}

.admindashboard-content {
  display: flex;
  flex-direction: column;
  margin: 107px 0 0 47px;
}

.history-container {
  display: flex;
  flex-direction: column;
  margin-right: 67px;
}

.history-caption {
  font-family: 'Lato';
  font-weight: bold;
  font-size: 16px;
  color: #2B3C4E;
}

.history-subtext {
  margin: 4px 0 32px 0;
  font-family: 'Lato';
  font-weight: normal;
  font-size: 12px;
  color: #4F4F4F;
}

.container-row {
  display: flex;
  width: 482px;
  height: 66px;
  background: #FFFFFF;
  border-radius: 8px;
  padding: 24px 0px 20px 30px;
}

.container-row:hover {
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-left: 7px solid #7557D3;
}

.row-text-middle {
  margin: 0 55px;
}

.row-text, .row-text-middle {
  font-family: 'Nunito Sans';
  font-weight: normal;
  font-size: 16px;
  color: #4F4F4F;
} 

.assessment-container {
  width: 482px;
  height: 307px;
  border: 1px solid #ECECF9;
  border-radius: 4px;
}

.assessment-caption {
  margin: 26px 0 0 31px;
  font-family: 'Lato';
  font-weight: bold;
  font-size: 16px;
  color: #2B3C4E;
}

.container-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
}

.assessment-text {
  max-width: 340px;
  margin-bottom: 24px;
  text-align: center;
  font-family: 'Nunito Sans';
  font-weight: normal;
  font-size: 16.7273px;
  color: #4F4F4F;
}

.assessment-btn {
  width: 205px;
  height: 41px;
  background: #B1B1B1;
  border-radius: 4px;
  border: none;
  font-family: 'Lato';
  font-weight: bold;
  font-size: 16px;
  color: #FFFFFF;
}
</style>
