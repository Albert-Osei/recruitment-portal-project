<template>
  <div class="quiz">
    <div class="slide-container">
      <carousel
        :per-page="1"
        :navigation-enabled="true"
        :paginationEnabled="false"
        ref="productDetails"
      >
        <!-- <div>  :navigation-next-label="nextLabel"
        :navigation-prev-label="prevLabel"</div> -->
        <slide v-for="qst in questions" :key="qst.id" :qst="qst">
          <h4>Question {{ qst.id }}</h4>
          <p>{{ qst.question_text }}</p>
          <div class="answers-container">
            <div>
              <input
                type="radio"
                id="answer-option1"
                name="answer1"
                value="option 1"
              />
              <label for="html">{{ qst.answers }}</label>
            </div>
            <div>
              <input
                type="radio"
                id="answer-options2"
                name="answer2"
                value="option 2"
              />
              <label for="css">{{ qst.answers }}</label>
            </div>
            <div>
              <input
                type="radio"
                id="answer-options3"
                name="answer3"
                value="option 3"
              />
              <label for="javascript">{{ qst.answers }}</label>
            </div>
            <div>
              <input
                type="radio"
                id="answer-options4"
                name="answer4"
                value="option 4"
              />
              <label for="javascript">{{ qst.answers }}</label>
            </div>
          </div>
          <div class="btn-container">
            <div>
              <button id="prev">
                Previous
              </button>
            </div>
            <div>
              <button id="next">
                Next
              </button>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
    <div class="finish">
      <router-link :to="{ name: 'Successful' }"
        ><button class="finish-btn">
          Finish
        </button></router-link
      >
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "Quiz",
  components: {
    Carousel,
    Slide,
  },

  computed: {
    // questions() {
    //   return this.$store.state.auth.questions.data;
    // },
    // answers() {
    //   const array = this.$store.state.auth.questions.data.answers;
    //   console.log(array);
    //   for (var i = 0; i < array.length; i++) {
    //     console.log(array[i]);
        
    //   }
    },
    // anschoice() {
    //   const answers = this.$store.state.auth.questions.data.answers;
    //   Object.entries(answers).forEach(([value]) => console.log(` ${value}`));
    // },

  // data() {
  //   return {
  //     nextLabel: S,
  //     prevLabel: S,
  //   };
  // },

  mounted() {
    this.$store.dispatch("GetQuestions");
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
/* .VueCarousel-slide {
  width: 100%;
} */
.slide-container {
  width: 60%;
  height: 50vh;
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
.slide-container p {
  font-family: Lato;
  font-style: italic;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #2b3c4e;
  text-align: center;
  padding: 10px;
}
label {
  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #2b3c4e;
  padding-left: 15px;
}
input[type="radio"] {
  width: 8px;
  height: 8px;
  border: 1px solid #2b3c4e;

  box-sizing: border-box;
}
.answers-container {
  width: 100%;
  height: 20vh;
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