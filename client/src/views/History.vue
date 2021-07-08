<template>
  <div class="row">
    <div class="col-3">
      <Sidebar />
    </div>
    <div class="container my-5 col-9">
      <h3>Assessment History</h3>
      <div class="my-4">
        
        <table class="table table-borderless">
          <thead class="heading">
            <tr>
              <th scope="col">Batch</th>
              <th scope="col">Date Completed</th>
              <th scope="col">Number of Questions</th>
              <th scope="col">Time Allocated</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(app, index) in sortedApps" :key="index" class="mx-1 different-row"></tr>
            <tr class="different-row">
            <td>Batch 1</td>
            <td>12/07/94</td>
            <td>30</td>
            <td>30 mins</td>
            <td>Taken</td>
          </tr>
          <tr class="different-row">
           <td>Batch 1</td>
            <td>12/07/94</td>
            <td>30</td>
            <td>30 mins</td>
            <td>Taken</td>
          </tr>
          <tr class="different-row">
            <td>Batch 1</td>
            <td>12/07/94</td>
            <td>30</td>
            <td>30 mins</td>
            <td>Taken</td>
          </tr>
          <tr class="different-row">
            <td>Batch 1</td>
            <td>12/07/94</td>
            <td>30</td>
            <td>30 mins</td>
            <td>Taken</td>
          </tr>
          <tr class="different-row">
            <td>Batch 1</td>
            <td>12/07/94</td>
            <td>30</td>
            <td>30 mins</td>
            <td>Taken</td>
          </tr>
          <tr class="different-row">
            <td>Batch 1</td>
            <td>12/07/94</td>
            <td>30</td>
            <td>30 mins</td>
            <td>Taken</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import { mapGetters, mapActions } from "vuex";


export default {
  name: "adminQstn",
  data() {
    return {
      apps: [],
      currentSort:'Name',
      currentSortDir:'asc'
    }
  },

  components: {
    Sidebar
  },

  computed: {
    ...mapGetters(["getApps"]),
  },
    

  methods: {
    ...mapActions(["fetchApps"]),

    sort(s) {
    if(s === this.currentSort) {
      this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
    }
    console.log("hello");
    
    this.currentSort = s;
  }
  },

  async mounted() {
    await this.fetchApps();
    this.apps = await this.getApps;
  }
};
</script>

<style scoped>
.different-row:hover {
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
border-radius: 8px;
 border-left: 8px solid #7557D3;
}
h3 {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}
.heading {
  background: #2b3c4e;
}
th {
  color: white;
  font-family: Lato;
  font-size: 14px;
  text-align: center;
  line-height: 17px;
}
td {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #4f4f4f;
}
i {
  cursor: pointer;
  color: white;
}
</style>