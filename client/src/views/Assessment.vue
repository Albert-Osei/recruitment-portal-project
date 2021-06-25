<template>
  <div class="root">
    <Sidebar />
    <div class="content">
        <h2 class="content-header">Compose Assessment</h2>
        <form action="" class="content-input">
            <div class="dots">
                <div class="plus">
                    <img src="../assets/plus.svg" alt="plus sign"/>
                </div>
                <div class="dot-text">
                    <h3>Choose file</h3>
                </div>
            </div>
            <div class="question-input">
                <label for="question">Questions</label>
                <input type="text" name="question" class="question-field">
            </div>
            <div class="options-column1">
                <div class="optionA">
                    <label for="option_a">Option A</label>
                    <input type="text" class="option-column-field" name="option_a">
                </div>
                <div class="optionB">
                    <label for="option_b">Option B</label>
                    <input type="text" class="option-column-field" name="option_b">
                </div>
            </div>
            <div class="options-column2">
                <div class="optionC">
                    <label for="option_c">Option C</label>
                    <input type="text" class="option-column-field" name="option_c">
                </div>
                <div class="optionD">
                    <label for="option_d">Option D</label>
                    <input type="text" class="option-column-field" name="option_d">
                </div>              
            </div>
            <div class="scroll-btn">
                <button class="scroll">Previous</button>
                <button class="scroll">Next</button>
            </div>
            <div>
                <button class="over">Finish</button>
            </div>
           
        </form>
    </div>
    


  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue"

export default {
    components: {
        Sidebar
    },

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

.plus {
    width: 12.41px;
    height: 12.41px;
}
.plus img {
    width: 100%;
    height: 100%;
}

.dot-text {
    font-family: 'Lato';
    font-weight: normal;
    font-size: 14px;
    color: #2B3C4E;
    margin-left: 14px;
}

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