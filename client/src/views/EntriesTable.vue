<template>
  <div class="entriestable">
    <Sidebar />
    <div class="entries-content">
      <div class="entries-caption">
        <h2 class="entries-header">Entries - Batch 2</h2>
        <div class="polygon-icon">
          <img src="../assets/polygon.svg" alt="polygon icon" />
        </div>
      </div>
      <h3 class="header-subtext">Comprises of all that applied for batch 2</h3>
      <div id="resp-table">
        <div id="resp-table-header">
          <div class="table-header-cell">Name</div>
          <div class="table-header-cell">Email</div>
          <div class="table-header-cell-new">
            <p class="dob-text">DOB - Age</p>
            <div class="arrows">
              <div class="p-uparrow">
                <img src="../assets/p-up.svg" alt="">
              </div>
              <div class="p-botarrow">
                <img src="../assets/p-bottom.svg" alt="">
              </div>
            </div>
          </div>
          <div class="table-header-cell">Address</div>
          <div class="table-header-cell">University</div>
          <div class="table-header-cell-new">
            <p class="dob-text">CGPA</p>
            <div class="arrows">
              <div class="p-uparrow">
                <img src="../assets/p-up.svg" alt="">
              </div>
              <div class="p-botarrow">
                <img src="../assets/p-bottom.svg" alt="">
              </div>
            </div>
          </div>
        </div>
        <div id="resp-table-body">
          <div class="resp-table-row">
            <div class="table-body-cell">Ify Chinke</div>
            <div class="table-body-cell">ify@enyata.com</div>
            <div class="table-body-cell">12/09/19-22</div>
            <div class="table-body-cell">3 Sabo Ave, Yaba, Lagos</div>
            <div class="table-body-cell">University of Nigeria</div>
            <div class="table-body-cell">5.0</div>
          </div>
          <div class="resp-table-row">
            <div class="table-body-cell">Ify Chinke</div>
            <div class="table-body-cell">ify@enyata.com</div>
            <div class="table-body-cell">12/09/19-22</div>
            <div class="table-body-cell">3 Sabo Ave, Yaba, Lagos</div>
            <div class="table-body-cell">University of Nigeria</div>
            <div class="table-body-cell">5.0</div>
          </div>
          <div class="resp-table-row">
            <div class="table-body-cell">Ify Chinke</div>
            <div class="table-body-cell">ify@enyata.com</div>
            <div class="table-body-cell">12/09/19-22</div>
            <div class="table-body-cell">3 Sabo Ave, Yaba, Lagos</div>
            <div class="table-body-cell">University of Nigeria</div>
            <div class="table-body-cell">5.0</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "EntriesTable",
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

.entriestable {
  display: flex;
}

.entries-content {
  margin: 100px 0 0 42px;
}

.entries-caption {
  display: flex;
  flex-direction: row;
}

.entries-header {
  font-family: 'Lato';
  font-weight: 300;
  font-size: 44px;
  color: #2B3C4E;
}

.header-subtext {
  font-family: 'Lato';
  font-style: italic;
  font-weight: normal;
  font-size: 13px;
  color: #4F4F4F;
}

.polygon-icon {
  width: 12px;
  height: 12px;
  margin-left: 16px;
}

.polygon-icon img {
  width: 100%;
  height: 100%;
}

#resp-table {
  width: 80vw;
  display: table;
  text-align: center;
  margin-top: 30px;
}

#resp-table-header {
  display: table-header-group;
  background: #2B3C4E;
  height: 46px;
  font-family: 'Lato';
  font-size: 14px;
  color: #FFFFFF;
}

.table-header-cell {
  display: table-cell;
  padding: 10px;
  font-family: 'Lato';
  font-size: 14px;
  color: #FFFFFF;
}

.table-header-cell-new {
  display: flex;
  justify-content: center;
  font-family: 'Lato';
  font-size: 14px;
  color: #FFFFFF;
}


#resp-table-body {
  display: table-row-group;
}

.resp-table-row {
  display: table-row;
  height: 60px;
}

.table-body-cell {
  display: table-cell;
  font-family: 'Lato';
  font-weight: normal;
  font-size: 16px;
  color: #4F4F4F;
  padding: 25px 0;
}

.resp-table-row:hover {
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-radius: 8px;
  border-left: 6px solid #7557D3;
}

.arrows {
  margin-left: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 6px;
}

.p-uparrow {
  width: 7px;
  height: 8px;
}

.p-uparrow img {
  width: 100%;
  height: 100%;
}
.p-botarrow {
  width: 7px;
  height: 8px;
}

.p-botarrow img {
  width: 100%;
  height: 100%;
}













</style>
