<template>
    <div class="sidebar">
      <div class="icon-box">
        <div class="icon">
          <img src="" alt="" />
        </div>
        <h2 class="admin-name">Albert Conte</h2>
        <h3 class="admin-email">conte@gmail.com</h3>
      </div>
      <div class="anchor">
        <div class="anchor-grp">
          <div class="anchor-icon">
            <img
              src="../assets/application.svg"
              alt="create application icon"
            />
          </div>
          <a href="">Create Application</a>
        </div>
        <div class="anchor-grp">
          <div class="anchor-icon">
            <img src="../assets/entries.svg" alt="application entries icon" />
          </div>
          <a href="">Application Entries</a>
        </div>
        <div class="anchor-grp">
          <div class="anchor-icon">
            <img src="../assets/assessment.svg" alt="compose assessment icon" />
          </div>
          <a href="">Compose Assessment</a>
        </div>
        <div class="anchor-grp">
          <div class="anchor-icon">
            <img src="../assets/history.svg" alt="assessment history icon" />
          </div>
          <a href="">Assessment History</a>
        </div>
        <div class="anchor-grp">
          <div class="anchor-icon">
            <img src="../assets/results.svg" alt="results icon" />
          </div>
          <a href="">Results</a>
        </div>
        <div class="anchor-grp">
          <div class="anchor-icon">
            <img src="../assets/Setting.svg" alt="settings icon" />
          </div>
          <a href="">Settings</a>
        </div>
        <div class="anchor-grp">
          <div class="anchor-icon">
            <img src="../assets/logout.svg" alt="logout icon" />
          </div>
          <a href="">Log Out</a>
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,700;1,400&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Nav sidebar */
.sidebar {
  width: 292px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-radius: 8px;
}

.icon {
  width: 80px;
  height: 80px;
  background: #e5e5e5;
  border-radius: 50px;
  margin: auto;
}

.icon-box {
  width: 292px;
  background: #7557d3;
  padding: 75px 30px 36px 30px;
  margin-bottom: 42px;
}

.admin-name {
  font-family: "Lato";
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
}

.admin-email {
  font-family: "Lato";
  font-style: italic;
  font-weight: normal;
  font-size: 16px;
  color: #ffffff;
  text-align: center;
}

.anchor-icon {
  width: 14px;
  height: 13px;
  margin-right: 18px;
}

.anchor-icon img {
  width: 100%;
  height: 100%;
}

a {
  font-family: "Lato";
  font-weight: normal;
  font-size: 16px;
  color: #2b3c4e;
  text-decoration: none;
}

.anchor-grp {
  display: flex;
  margin-bottom: 29px;
}

</style>