<template>
  <div class="root">
    <Sidebar />
    <div class="main">
      <h1 class="main-title">Create Application</h1>
      <div class="main-content1">
        <div class="dot-box">
          <button class="upload-wrap">+ Choose file</button>
          <input type="file" name="file" ref="file" @change="handleFileUpload">
        </div>
        <div class="link-wrapper">
          <label for="link" class="input-text">Link</label>
          <input type="text" name="link" class="input-field">
        </div>
      </div>
      <div class="main-content2">
        <div class="closure">
          <label for="closure_date">Application closure date</label>
          <input type="date" name="closure_date" class="input-field">
        </div>
        <div class="batchId">
          <label for="batch_id" class="input-text">Batch ID</label>
          <input type="text" name="batch_id" class="input-field">
        </div>
      </div>
      <div class="main-content3">
        <label for="instructions">Instructions</label>
        <input type="text" name="instructions" class="instructions-field">   
      </div>
      <div class="btn-field">
        <button class="app-btn">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
export default {
  name: 'CreateApplication',
  components: {
    Sidebar
  }

}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,700;1,400&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.root {
  display: flex;
}

.main {
  margin: 137px 0 0 75px;
}

.main-title {
  font-family: 'Lato';
  font-weight: 300;
  font-size: 43.5555px;
  color: #2B3C4E;
  margin-bottom: 62px;
}

.main-content1 {
  display: flex;
}

.dot-box {
  width: 456px;
  height: 108px;
  border: 1.55172px dashed #2B3C4E;
  box-sizing: border-box;
  border-radius: 6.2069px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin-right: 64px;
}

.dot-box input[type="file"] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}

.upload-wrap {
  background-color: #ffff;
  border: none;
}

label {
  font-family: 'Lato';
  font-weight: normal;
  font-size: 14px;
  color: #2B3C4E;
}

.input-field {
  width: 456px;
  height: 41px;
  border: 1.5px solid #2B3C4E;
  box-sizing: border-box;
  border-radius: 4px;
}

.main-content2 {
  display: flex;
  margin-top: 30px;
}

.main-content3 {
  margin: 36px 0 44px 0;
}

.instructions-field {
  width: 976px;
  height: 144px;
  border: 1.5px solid #2B3C4E;
  box-sizing: border-box;
  border-radius: 4px;
}

.app-btn {
  width: 379px;
  height: 50px;
  background: #7557D3;
  border-radius: 4px;
  font-family: 'Lato';
  font-weight: bold;
  font-size: 16px;
  color: #FFFFFF;
  border: none;
}

/* .upload-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
} */

.link-wrapper {
  display: flex;
  flex-direction: column;
}

.main-content3 {
  display: flex;
  flex-direction: column;
}

.closure {
  display: flex;
  flex-direction: column;
  margin-right: 64px;
}

.batchId {
  display: flex;
  flex-direction: column;
}

.btn-field {
 display: flex;
 justify-content: center;
}


</style>