<template>
  <div class="root">
    <Sidebar />
    <div class="content">
        <h2 class="content-header">Compose Assessment</h2>
        <form @submit.prevent="submit" enctype="multipart/form-data" class="content-input">
            <div class="dots">
                <button class="upload-btn">
                    <strong>+</strong>
                </button>
                <input type="file" name="file" ref="file" @change="handleFileUpload">
            </div>
            <div class="question-input">
                <label for="question">Questions</label>
                <input type="text" name="question" class="question-field" v-model="question">
            </div>
            <div class="options-column1">
                <div class="optionA">
                    <label for="option_a">Option A</label>
                    <input type="text" class="option-column-field" name="option_a" v-model="option_a">
                </div>
                <div class="optionB">
                    <label for="option_b">Option B</label>
                    <input type="text" class="option-column-field" name="option_b" v-model="option_b">
                </div>
            </div>
            <div class="options-column2">
                <div class="optionC">
                    <label for="option_c">Option C</label>
                    <input type="text" class="option-column-field" name="option_c" v-model="option_c">
                </div>
                <div class="optionD">
                    <label for="option_d">Option D</label>
                    <input type="text" class="option-column-field" name="option_d" v-model="option_d">
                </div>              
            </div>
            <div class="scroll-btn">
                <button class="scroll">Previous</button>
                <button class="scroll">Next</button>
            </div>
            <div>
                <button class="over" type="submit">Finish</button>
            </div>
           
        </form>
    </div>
    


  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue"
import { mapGetters, mapActions } from "vuex";

export default {
    name: "Assessment",
    components: {
        Sidebar
    },
    data() {
        return {
            // assessment: {
                question: '',
                option_a: '',
                option_b: '',
                option_c: '',
                option_d: '',
                file: '',
            // }
        };
    },
    created: function () {
        // a function to call getassessments action
        this.GetAssessments()
    },
    computed: {
        ...mapGetters({ Assessments: "StateAssessments", Admin: "StateAdmin"}),

        // isValid() {
        //     if (
        //         this.question == "" ||
        //         this.option_a == "" ||
        //         this.option_b == "" ||
        //         this.option_c == "" ||
        //         this.option_d == "" ||
        //         this.file == ""
                
        //     ) {
        //         return false;
        //     } else {
        //         return true;
        //     }
        // }
    },
    methods: {
        ...mapActions(["CreateAssessment", "GetAssessments"]),

        handleFileUpload() {
            this.file = this.$refs.file.files[0];
        },

        submit() {
            // if (this.isValid) {
                let formData = new FormData();
                formData.append("question", this.question);
                formData.append("option_a", this.option_a);
                formData.append("option_b", this.option_b);
                formData.append("option_c", this.option_c);
                formData.append("option_d", this.option_d);
                formData.append("file", this.file);
                this.CreateAssessment(formData);
                this.question = '';
                this.option_a = '';
                this.option_b = '';
                this.option_c = '';
                this.option_d = '';
                this.file = '';
                // try {
                //     await this.CreateAssessment(this.assessment);
                // } catch (error) {
                //     throw "Sorry an error occured while creating quiz"
                // }
            // } else {
            //     alert("All fields are required");
            // }
        },
        
    }

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

.root {
    display: flex;
}

.content {
    margin: 100px 0 0 79px;
}

.content-header{
    font-family: 'Lato';
    font-weight: 300;
    font-size: 43.5555px;
    color: #2B3C4E;
}

.dots {
    width: 456px;
    height: 108px;
    border: 1.55172px dashed #2B3C4E;
    border-radius: 6.2069px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 103px 0 25px 0;
}

/* .dot-text {
    font-family: 'Lato';
    font-weight: normal;
    font-size: 14px;
    color: #2B3C4E;
    margin-left: 14px;
} */

.question-input {
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
}

label {
    font-family: 'Lato';
    font-weight: normal;
    font-size: 14px;
    color: #2B3C4E;
}

.question-field {
    width: 976px;
    height: 144px;
    border: 1.5px solid #2B3C4E;
    border-radius: 4px;
}

.options-column1 {
    display: flex;
}

.optionA {
    display: flex;
    flex-direction: column;
}

.option-column-field {
    width: 456px;
    height: 41px;
    border: 1.5px solid #2B3C4E;
    border-radius: 4px;
}

.optionB {
    display: flex;
    flex-direction: column;
    margin-left: 64px;
}

.options-column2 {
    display: flex;
    margin-top: 25px;
}

.optionC {
    display: flex;
    flex-direction: column;
}

.optionD {
    display: flex;
    flex-direction: column;
    margin-left: 64px;
}

.scroll-btn {
    display: flex;
    justify-content: space-around;
    margin: 52px 0 55px 0;
}
.scroll {
    width: 125px;
    height: 41px;
    background: #2B3C4E;
    border-radius: 4px;
    font-family: 'Lato';
    font-weight: bold;
    font-size: 16px;
    color: #FFFFFF;
    border: none;
}

.over {
    width: 205px;
    height: 41px;
    background: #CECECE;
    border-radius: 4px;
    font-family: 'Lato';
    font-weight: bold;
    font-size: 16px;
    color: #FFFFFF;
    border: none;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}



</style>