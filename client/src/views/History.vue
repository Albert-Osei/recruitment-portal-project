<template>
  <div class="assessment-history">
    <Sidebar />
    <div class="history-content">
      <h1 class="history-header">Assessment History</h1>
      <div class="history-table">
        <table>
          <thead>
            <tr>
              <th>Batch</th>
              <th>Date Completed</th>
              <th>No of Questions</th>
              <th>Time Allocated</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Batch 1</td>
              <td>12/07/2021</td>
              <td>30</td>
              <td>30 mins</td>
              <td>Taken</td>
            </tr>
            <tr>
              <td>Batch 1</td>
              <td>12/07/2021</td>
              <td>30</td>
              <td>30 mins</td>
              <td>Taken</td>
            </tr>
            <tr>
              <td>Batch 1</td>
              <td>12/07/2021</td>
              <td>30</td>
              <td>30 mins</td>
              <td>Taken</td>
            </tr>
            <tr>
              <td>Batch 1</td>
              <td>12/07/2021</td>
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
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "History",
  components: {
    Sidebar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,400&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.assessment-history {
  display: flex;
}

.history-header {
  margin: 100px 0 20px 42px;
}

.history-table {
  background: #FFFFFF;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-radius: 8px;
  padding: 42px 64px 42px 31px;
}
</style>
