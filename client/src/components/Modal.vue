<template>
  <div class="mymodal">
    <div>
      <div class="image">
        <img :src="entry.files_path.filename" alt="" />
      </div>
      <div class="para">
        <p>Personal Details</p>
      </div>
      <div class="line"></div>
      <div class="input-cont">
        <div>
          <label for="">Name</label> <br />
          <input
            type="text"
            name="name"
            class="userInput"
            :value="entry.firstname + ' ' + `${entry.lastname}`"
          />
        </div>
        <div>
          <label for="">Email</label> <br />
          <input type="text" name="email" class="userInput" :value="entry.email" />
        </div>
        <div>
          <label for="">Address</label> <br />
          <input
            type="text"
            name="address"
            class="userInput"
            :value="entry.address"
          />
        </div>
        <div>
          <label for="">University</label> <br />
          <input
            type="text"
            name="university"
            class="userInput"
            :value="entry.university"
          />
        </div>
        <div>
          <label for="">Course of study</label> <br />
          <input type="text" name="course_of_study" class="userInput" :value="entry.course_of_study" />
        </div>
        <div>
          <label for="">Date of birth</label> <br />
          <input type="text" name="date_of_birth" class="userInput" :value="entry.date_of_birth" />
        </div>
        <div>
          <label for="">CGPA</label> <br />
          <input type="text" name="cgpa" class="userInput" :value="entry.cgpa" />
        </div>
      </div>
      <div class="btns-cont">
        <button class="approve-btn" @click="toggleM">Approve</button>
        <button class="decline-btn" @click="toggleM2">Decline</button>
      </div>
    </div>

    <div
      class="submodal-overlay"
      v-if="showSubModal"
    >
      <transition name="slide" appear>
        <div class="submodal-cont">
          <div class="yes_no-cont ">
            <p>
              Are you sure you want to approve <br />
              this application?
            </p>
            <div class="submodal-btns-cont">
              <button class="approve-btn" @click="approved">Yes</button>
              <button class="decline-btn">No</button>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div
      class="submodal-overlay"
      v-if="showSubModal2"
    >
      <transition name="slide" appear>
        <div class="submodal-cont">
          <div class="yes_no-cont ">
            <p>
              Are you sure you want to decline <br />
              this application?
            </p>
            <div class="submodal-btns-cont">
              <button class="approve-btn" @click="declined">Yes</button>
              <button class="decline-btn">No</button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "my-modal",
  data() {
    return {
      items: [this.forms],
      showSubModal: false,
      showSubModal2: false,
      showModal: true,
      email: '',
    };
  },
  props: ["entry"],

  computed: {
    forms() {
      return this.$store.state.auth.allForms.data;
    },
     ...mapGetters({ Statuses: "StateStatuses" }),
  },

  methods: {
    ...mapActions(["CreateStatus", "GetStatuses"]),

    toggleM() {
      this.showSubModal = true;
      this.showModal = false;
    },
    toggleM2() {
      this.showSubModal2 = true;
      this.showModal = false;
    },
    approved() {
      try {
        this.CreateStatus({ "status":"approved" })
      } catch (error) {
        throw "Sorry something went wrong"
      }
      this.showSubModal=false
    },
    declined() {
      try {
        this.CreateStatus({ "status":"declined", "email": this.email })
      } catch (error) {
        throw "Sorry something went wrong"
      }
    }
  },
};
</script>

<style>
.mymodal {
  padding: 25px;
  display: grid;
}
.image {
  margin-top: 30px;
  margin-bottom: 30px;
  width: 179px;
  height: 179px;
  border: 1px solid green;
}
.line {
  width: 480px;
  height: 1px;
  background: #f2f2f2;
}
.userInput {
  width: 231px;
  height: 48px;
  border: 1px solid #cdcfd6;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 7px;
}
.input-cont {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  margin-top: 20px;
}
.approve-btn {
  width: 125px;
  height: 48px;
  border-radius: 4px;
  border: none;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #4f4f4f;
  margin-right: 10px;
}
.decline-btn {
  width: 125px;
  height: 48px;
  box-sizing: border-box;
  border-radius: 4px;
  border: none;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #4f4f4f;
}

.approve-btn:hover {
  background: #7557d3;
  color: #ffffff;
}
.decline-btn:hover {
  background: #7557d3;
  color: #ffffff;
}

.btns-cont {
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.submodal-btns-cont {
  width: 100%;
  display: flex;
  justify-content: center;
}

.submodal-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  width: 100%;
  height: 120vh;
  /* background-color: #ffffff; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
}
.submodal-cont {
  width: 458px;
  height: 300px;
  background: #ffffff;
  border-radius: 4px;
  z-index: 99;
  display: flex;
  justify-content: center;
}
.yes_no-cont {
  width: 70%;
  height: 150px;
  margin: auto;
  display: flex;
  flex-direction: column;
}
.yes_no-cont p {
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: #4f4f4f;
}
</style>