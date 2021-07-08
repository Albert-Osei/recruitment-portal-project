<template>
  <div class="quiz">
    <div class="quiz-cont">
      <div class="slide-container">
        <carousel :per-page="1" :paginationEnabled="false" ref="productDetails">
          <!-- <div>  :navigation-next-label="nextLabel"
        :navigation-prev-label="prevLabel"</div> -->
          <slide
            v-for="(qst, index) in questions"
            :key="index"
            v-show="index === questionindex"
          >
            <h4>Question {{ qst.id }}</h4>
            <p class="qst-text" id="qst_text">{{ qst.question }}</p>
            <div class="answers-container">
              <div class="options-container">
                <ul>
                  <li>
                    <div class="dot-div-container">
                      <div class="dot-div"></div>
                    </div>
                    <label for="radinput" class="optn">
                      <!-- bind the options to the array index of the answers array that matches this index -->
                      <input
                        type="radio"
                        id="radinput"
                        name="answer"
                        v-model="answers[index]"
                        :value="qst.option_a"
                      />

                      <span class="optn-index">A.</span>{{ qst.option_a }}
                    </label>
                  </li>
                  <li>
                    <div class="dot-div-container">
                      <div class="dot-div"></div>
                    </div>
                    <label class="optn">
                      <input
                        type="radio"
                        id="radinput"
                        name="answer"
                        v-model="answers[index]"
                        :value="qst.option_b"
                      />
                      <span class="optn-index">B.</span>{{ qst.option_b }}
                    </label>
                  </li>
                  <li>
                    <div class="dot-div-container">
                      <div class="dot-div"></div>
                    </div>
                    <label class="optn">
                      <input
                        type="radio"
                        id="radinput"
                        name="answer"
                        v-model="answers[index]"
                        :value="qst.option_c"
                      />
                      <span class="optn-index">C.</span>{{ qst.option_c }}
                    </label>
                  </li>
                  <li>
                    <div class="dot-div-container">
                      <div class="dot-div"></div>
                    </div>
                    <label class="optn">
                      <input
                        type="radio"
                        id="radinput"
                        name="answer"
                        v-model="answers[index]"
                        :value="qst.option_d"
                      />
                      <span class="optn-index">D.</span>{{ qst.option_d }}
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </slide>
        </carousel>
        <!-- <span v-if="questionindex == questions.length"
        >Your total score is {{ score }} / {{ questions.length }}</span
      > -->
      </div>
      <div class="btn-container">
        <div>
          <button v-on:click="prev" id="prev">
            Previous
          </button>
        </div>
        <div>
          <button v-on:click="next" id="next">
            Next
          </button>
          <!-- <span v-if="(questions.length = 0)"
            >Click on the finish button to finish test</span
          > -->
        </div>
      </div>
    </div>
    <div class="finish">
      <router-link :to="{ name: 'Successful' }"
        ><button
          v-show="questionindex <= questions.length - 1"
          @click="endQuiz"
          class="finish-btn"
        >
          Finish
        </button></router-link
      >
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import { mapState } from "vuex";
import { mapActions } from "vuex";

// var quiz_qsts = this.$store.state.auth.questions.data;

export default {
  name: "Quiz",
  components: {
    Carousel,
    Slide,
  },

  data: () => {
    return {
      questionindex: 0,

      // score: "",
    };
  },

  async mounted() {
    this.$store.dispatch("GetAssessments");

    await this.timed();
  },

  methods: {
    ...mapActions(["Answers"]),

    next: function() {
      this.questionindex++;
    },
    prev: function() {
      this.questionindex--;
    },

    timed() {
      this.times = setInterval(() => this.countdown(), 1000);
    },

    endQuiz() {
      this.time = 0;
      this.$router.push({ name: "Successful" });
      var result = JSON.stringify("score", this.score);
      this.Answers(result);
      console.log(result);
    },

    countdown() {
      if (this.time > 0) {
        this.time--;
      } else if (this.time == 1) {
        this.endQuiz();
      }
    },
  },

  computed: {
    ...mapState(["setAssessments"]),
    assessments() {
      return this.$store.state.auth.assessments.data;
    },

    // Calculate total score of quiz person
    score: function() {
      var total = 0;
      for (var i = 0; i < this.answers.length; i++) {
        if (this.answers[i] == this.assessments[i].correct_answer) {
          total += 1;
        }
      }
      return total;
    },

    answers: function() {
      //create an array of the length of the questions, and assign them to an empty value.
      var ans = Array(this.assessments.length).fill("");
      return ans;
    },
  },
};
</script>

<style scoped>
.quiz {
  width: 100%;
  height: 70vh;
  background-color: #fdfdff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.quiz-cont {
  margin-top: 50px;
  width: 60%;
  height: 55vh;
}
ul {
  width: 100%;
  height: 20vh;
}
li {
  list-style-type: none;
  display: flex;
  width: 100%;
  height: 33px;
}

label {
  width: 80%;
  height: 30px;
  margin: auto;
  display: flex;
  /* justify-content: center; */
  align-items: center;
}

.dot-div {
  width: 8px;
  height: 8px;
  border: 1px solid #2b3c4e;
}
.optn-index {
  margin-right: 5px;
}
#radinput {
  position: relative;
  left: -156px;
}
input[type="radio"] {
  visibility: hidden;
  width: 8px;
  height: 8px;
  border: none;
  box-sizing: border-box;
  background: #31d283;
}

.dot-div-container {
  width: 15%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  /* border: 1px solid blue; */
}
.slide-container {
  width: 60%;
  height: 45vh;
  margin: auto;
  border: 1px solid black;
}
.slide-container h4 {
  font-family: Lato;
  font-style: italic;
  font-weight: bolder;
  font-size: 14px;
  line-height: 17px;
  color: #2b3c4e;
  text-align: center;
  padding: 10px;
}
.options-container {
  display: flex;
  width: 100%;
  height: 30vh;
  padding: 3px;
  justify-content: space-evenly;
  align-items: center;
  /* border: 1px solid red; */
}

.qst-text {
  font-family: Lato;
  font-style: italic;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #2b3c4e;
  text-align: center;
  padding: 10px;
}

.optn {
  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #2b3c4e;
  text-align: center;
}
.optn:active,
.optn:focus {
  background: #31d231;
}

.answers-container {
  width: 100%;
  height: 30vh;
  display: flex;
  grid-gap: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.btn-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
#next {
  width: 125px;
  height: 41px;
  background: #7557d3;
  border-radius: 4px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
}
#prev {
  width: 125px;
  height: 41px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #211f26;
}

.finish-btn {
  width: 205px;
  height: 41px;
  background: #cecece;
  border-radius: 4px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
}
</style>