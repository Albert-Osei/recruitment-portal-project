<template>
  <div class="root">
    <div class="entriestable">
      <Sidebar />
      <div class="entries-content">
        <div class="entries-caption">
          <h2 class="entries-header">Results</h2>
        </div>
        <div id="resp-table">
          <div id="resp-table-header">
            <div class="table-header-cell">Name</div>
            <div class="table-header-cell">Email</div>
            <div class="table-header-cell-new">
              <p class="dob-text">DOB - Age</p>
            </div>
            <div class="table-header-cell">Address</div>
            <div class="table-header-cell">University</div>
            <div class="table-header-cell-new">
              <p class="dob-text">CGPA</p>
            </div>
            <div class="table-header-cell">Test Scores</div>
          </div>
          <div id="resp-table-body">
            <div
              class="resp-table-row"
              v-for="(form, index) in forms"
              :key="index"
            >
              <div class="table-body-cell">
                {{ form.firstname + " " + form.lastname }}
              </div>
              <div class="table-body-cell">{{ form.email }}</div>
              <div class="table-body-cell">{{ form.date_of_birth }}</div>
              <div class="table-body-cell">{{ form.address }}</div>
              <div class="table-body-cell">{{ form.university }}</div>
              <div class="table-body-cell">{{ form.cgpa }}</div>
              <div class="table-body-cell">{{ form.scores }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "Results",
  components: {
    Sidebar,
  },
  data() {
    return {
      items: [this.forms],
      showModal: false,
      singleEntry: {},
    };
  },
  methods: {
    openModal(id) {
      this.showModal = true;
      const singleForm = this.forms.find((item) => item.id === id);
      this.singleEntry = singleForm;
    },
  },

  computed: {
    forms() {
      return this.$store.state.auth.forms.data;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,700;1,400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700&display=swap");

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
  font-family: "Lato";
  font-weight: 300;
  font-size: 44px;
  color: #2b3c4e;
}

#entries-options {
  font-family: "Lato";
  font-weight: 300;
  font-size: 44px;
  color: #2b3c4e;
  border: none;
}

option {
  font-family: "Lato";
  font-weight: 300;
  font-size: 44px;
  color: #2b3c4e;
}

.header-subtext {
  font-family: "Lato";
  font-style: italic;
  font-weight: normal;
  font-size: 13px;
  color: #4f4f4f;
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
  background: #2b3c4e;
  height: 46px;
  font-family: "Lato";
  font-size: 14px;
  color: #ffffff;
}

.table-header-cell {
  display: table-cell;
  padding: 10px;
  font-family: "Lato";
  font-size: 14px;
  color: #ffffff;
}

.table-header-cell-new {
  display: flex;
  justify-content: center;
  font-family: "Lato";
  font-size: 14px;
  color: #ffffff;
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
  font-family: "Lato";
  font-weight: normal;
  font-size: 16px;
  color: #4f4f4f;
  padding: 25px 0;
}

.resp-table-row:hover {
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-radius: 8px;
  border-left: 6px solid #7557d3;
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

/* modal style */
.modal-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  width: 100%;
  height: 120vh;
  border: none;
  /* background-color: #ffffff; */
  display: flex;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.3);
}
.modal-cont {
  background-color: #ffffff;
  height: 120vh;
  width: 40%;
  border: none;
  z-index: 99;
}
.fade-enter-active .fade-leave-active {
  transition: opacity 0.5s;
}
</style>
