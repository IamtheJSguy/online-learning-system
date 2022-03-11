<template>
  <div
    id="container"
    style="text-align: left; color: white; font-size: 12px"
    v-if="data"
  >
    <!-- <h4 align="center">{{ productCase.title }}</h4> -->
    <div class="row p-5">
      <div class="col-12">
        <div style="border: 1px solid #cccccc33; padding: 10px">
          <img
            src="@/assets/images/Layer 11.png"
            style="height: 100px"
            alt=""
          />
        </div>
        <div class="mt-2">
          <div style="" class="task">
            <ul
              class="nav nav-pills"
              style="border-bottom: 1px solid white; height: 29px"
            >
              <li class="nav-item pill-1">
                <a class="nav-link active" data-toggle="tab" href="#tab1"
                  >Overview
                </a>
              </li>
              <li class="nav-item pill-2">
                <a class="nav-link" data-toggle="tab" href="#tab2"
                  >Curriculum
                </a>
              </li>
              <li class="nav-item pill-2">
                <a class="nav-link" data-toggle="tab" href="#tab3"
                  >Appointments
                </a>
              </li>
            </ul>

            <div class="tab-content">
              <div
                class="tab-pane show mytab active"
                style="border: 0px"
                id="tab1"
                role="tabpanel"
              >
                <!-- <div class="mytab">
                  <a
                    style="color: white; font-size: 12px; margin-right: 8px"
                    href="#"
                    ><fa-icon :icon="['fas', 'plus-circle']"
                  /></a>
                </div> -->
                <div style="text-align: left" v-if="data.productCase">
                  <h5>{{ data.productCase.title }}</h5>
                  <p style="font-size: 14px">
                    {{ data.productCase.description }}
                  </p>
                </div>
                <h5
                  style="
                    background-color: #1c1a25;
                    margin-top: 10px;
                    text-align: left;
                  "
                >
                  Key Take aways
                </h5>
                <ul v-if="data.productCase">
                  <li
                    v-for="keyTakeAway in data.productCase.keyTakeAways"
                    :key="keyTakeAway"
                    style="text-align: left; font-size: 14px"
                  >
                    {{ keyTakeAway }}
                  </li>
                </ul>
              </div>
              <div
                class="tab-pane mytab"
                style="border: 0px"
                id="tab2"
                role="tabpanel"
              >
                <div class="row">
                  <div class="col-lg-7 col-md-12 col-sm-12 pt-2">
                    <div class="parts-container">
                      <p>
                        {{ selectedPart.title || "Sub Part Title" }}
                      </p>
                    </div>
                    <div
                      style="
                        border: 1px solid #cccccc33;
                        padding: 10px;
                        height: 100%;
                      "
                    >
                      <div
                        v-if="selectedPart.type === 'Info'"
                        style="padding: 10px 30px; text-align: left"
                      >
                        <p
                          style="
                            font-size: 16px;
                            font-style: italic;
                            font-weight: 520;
                          "
                        >
                          "{{ selectedPart.text }}"
                        </p>
                      </div>
                      <div v-else-if="selectedPart.type === 'Quiz'">
                        <p
                          style="
                            font-size: 14px;
                            font-style: italic;
                            font-weight: 520;
                          "
                        >
                          {{
                            selectedPart.questions[
                              selectedQuestion.questionIndex
                            ].text
                          }}
                        </p>
                        <div
                          v-for="(option, optIndex) in selectedPart.questions[
                            selectedQuestion.questionIndex
                          ].options"
                          :key="optIndex"
                          style="
                            display: flex;
                            justify-content: flex-start;
                            margin-bottom: 2px;
                          "
                        >
                          <button
                            style="
                              padding: 0px 12px;
                              border-radius: 50%;
                              outline: none;
                              border: 2px solid red;
                            "
                            :style="
                                  selectedQuestion.answer === option
                                  ? 'background-color: red'
                                  : 'background-color: transparent'
                            "
                            @click="setAnswer(option)"
                          ></button>
                          <p class="m-1" style="font-size: 14px">
                            {{ option }}
                          </p>
                        </div>
                        <div
                          class="mt-2"
                          style="display: flex; justify-content: space-between"
                        >
                          <button
                            class="px-3 py-2"
                            style="
                              background-color: red;
                              border-radius: 5px;
                              outline: none;
                              border: none;
                              color: #fff;
                            "
                            :disabled="selectedQuestion.questionIndex === 0"
                            @click="previousQuestion"
                          >
                            Previous
                          </button>
                          <button
                            class="px-3 py-2"
                            style="
                              background-color: red;
                              border-radius: 5px;
                              outline: none;
                              border: none;
                              color: #fff;
                            "
                            :disabled="
                              selectedQuestion.questionIndex ===
                              selectedQuestion.total - 1
                            "
                            @click="nextQuestion"
                          >
                            Next
                          </button>
                        </div>
                      </div>
                      <div v-else>
                        <div
                          v-for="(question, index) in selectedPart.questions"
                          :key="index"
                        >
                          <p
                          style="
                            font-size: 14px;
                            font-style: italic;
                            font-weight: 520;
                          "
                        >
                          {{
                            question.text
                          }}
                        </p>
                        <text-area
                          class="answer-area"
                          row="3"
                          v-model="data.parts[selectedPart.partIndex].subParts[selectedPart.subPartIndex].questions[index].answer">
                        </text-area>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-5 col-md-12 col-sm-12 pt-2">
                    <div
                      v-for="(part, index) in data.parts"
                      :key="index"
                      style="text-align: left"
                    >
                      <div class="parts-container">
                        <p>
                          <span class="text-label">{{ index + 1 }}</span
                          >{{ part.title }}
                        </p>
                      </div>
                      <div
                        class="subpart-container"
                        style="display: flex; justify-content: space-between"
                        v-for="(subPart, subIndex) in part.subParts"
                        :key="subPart._id"
                        :style="
                          subPart._id === selectedPart._id
                            ? 'background-color: green'
                            : ''
                        "
                      >
                        <p>
                          <span class="text-label">{{
                            index + 1 + "." + (subIndex + 1)
                          }}</span
                          >{{
                            subPart.title ||
                            "Sub Part Title for " +
                              (index + 1) +
                              "." +
                              (subIndex + 1)
                          }}
                        </p>
                        <button
                          @click="selectPart(subPart, index, subIndex, 0)"
                          style="
                            background: none;
                            outline: none;
                            border: none;
                            color: #fff;
                          "
                        >
                          Start
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane mytab"
                style="border: 0px"
                id="tab3"
                role="tabpanel"
              >
                <div v-if="data.assessor" style="border: 1px solid #cccccc33;" class="p-5 mt-2">
                  <instructor-appointment :instructor="data.assessor._id" />
                </div>
                <div v-else style="border: 1px solid #cccccc33;" class="p-5 mt-2">
                  <p>Sorry the instructor for this product course would be available soon!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div align="right">
          <button
            style="background-color: red; border-radius: 5px; border: none; color: #fff; outline: none;"
            class="py-2 px-3"
            @click="attemptProductCase"
          >
            Submit your Answers
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InstructorAppointment from '@/components/ProductCases/Instructors/Appointments.vue'

export default {
  name: 'ProductCaseDetail',
  components: {
    InstructorAppointment
  },
  data() {
    return {
      data: {
        parts: [
          {
            index: 0,
            title: '',
            subParts: [
              {
                title: '',
                text: '',
                type: '',
                video: '',
                questions: [{
                  text: '',
                  options: [''],
                  answer: ''
                }]
              }
            ]
          }
        ]
      },
      selectedQuestion: {
        partIndex: 0,
        subPartIndex: 0,
        questionIndex: 0,
        total: 0,
        answer: ''
      },
      selectedPart: {}
    }
  },
  created() {
    this.$store.dispatch('getMyProductCase', this.$route.params.id)
      .then(
        (response) => {
          const res = response.data.data
          this.data = res
          //   console.log(res.parts[0].subParts[0])
          this.selectedPart = res.parts[0].subParts[0]
          this.setQuestion(res.parts[0].subParts[0], 0, 0, 0)
        }
      )
  },
  methods: {
    attemptProductCase() {
      const data = {
        id: this.$route.params.id,
        payload: {
          parts: this.data.parts
        }
      }
      this.$store.dispatch('updateMyProductCase', data)
        .then(
          (response) => {
            console.log(response.data.message)
            this.$router.push('/productcases/my');
          }
        )
        .catch(
          (error) => {
            console.log(error.response.data)
          }
        )
    },
    selectPart(data, partIndex, subPartIndex, questionIndex) {
      this.selectedPart = data
      this.setQuestion(data, partIndex, subPartIndex, questionIndex)
    },
    setQuestion(data, partIndex, subPartIndex, questionIndex) {
      this.selectedQuestion.partIndex = partIndex
      this.selectedQuestion.subPartIndex = subPartIndex
      this.selectedQuestion.questionIndex = questionIndex
      this.selectedQuestion.total = data.questions.length
      this.selectedQuestion.answer = this.data.parts[this.selectedQuestion.partIndex].subParts[this.selectedQuestion.subPartIndex].questions[this.selectedQuestion.questionIndex].answer

    },
    previousQuestion() {
      if (this.selectedQuestion.questionIndex > 0) {
        this.selectedQuestion.questionIndex--
        this.selectedQuestion.answer = this.data.parts[this.selectedQuestion.partIndex].subParts[this.selectedQuestion.subPartIndex].questions[this.selectedQuestion.questionIndex].answer
      }
    },
    nextQuestion() {
      if (this.selectedQuestion.questionIndex < this.selectedQuestion.total) {
        this.selectedQuestion.questionIndex++
        this.selectedQuestion.answer = this.data.parts[this.selectedQuestion.partIndex].subParts[this.selectedQuestion.subPartIndex].questions[this.selectedQuestion.questionIndex].answer
      }
    },
    setAnswer(option) {
      this.data.parts[this.selectedQuestion.partIndex].subParts[this.selectedQuestion.subPartIndex].questions[this.selectedQuestion.questionIndex].answer = option
      this.selectedQuestion.answer = option
    }
  },
}
</script>

<style scoped>

.test-item {
  border: 1px solid red;
  padding: 1px;
  width: 50px !important;
  height:20px;
  font-weight: 700;
  font-size: 12px;
  text-align: center;
  border-radius: 20px;
  background-color: red;
  color: #fff;
}
.parts-container {
    border: 1px solid #3F3C49;
    background-color: #3F3C49;
    padding: 10px 10px 0 10px;
    margin: 5px 0;
    font-size: 14px;
}
.subpart-container {
    background-color: #19181F;
    border: 1px solid #cccccc33;
    padding: 10px 10px 0 10px;
    margin: 5px 0;
    font-size: 14px;
}
.take-aways{
border: 2px solid #cccccc33;font-size: 16px; padding:12px;border-radius: 5px; height: 70px; flex-wrap: wrap; display:inline-flex; background-color:#3F3C49;
}
.answer-area {
  border: 1px solid #cccccc33;
  padding: 10px;
  width: 100%;
  background: #19181F;
}
</style>
<style scoped>
.nav-pills .pill-1 .nav-link {
  background-color: #1c1a25;
  color: white;
  
  border-radius: 0px;
  font-size: 12px;
  padding: 5px 11px 5px 11px;
}

.nav-pills .pill-2 .nav-link {
  background-color: #1c1a25;
  color: white;

  border-radius: 0px;
  font-size: 12px;
  padding: 5px 12px 5px 12px;
}

.nav-pills .pill-3 .nav-link {
  background-color: #1c1a25;
  color: white;
  
  border-radius: 0px;
  font-size: 12px;
  padding: 5px 11px 5px 11px;
}
.nav-pills .pill-4 .nav-link {
  background-color: #1c1a25;
  color: white;

  border-radius: 0px;
  font-size: 12px;
  padding: 5px 12px 5px 12px;
}
.active {

  border-bottom: 1px solid red;
  
}
.mytab {
  background-color: #1c1a25;
  color: white;
  width: auto;
  text-align: center;

  padding: 2px 0px;
  font-size: 10px;
}
.mytab1 {
  background-color: #1c1a25;
  color: white;
  width: auto;
  text-align: center;
  border-bottom: 0px;
}
.panehead {
  margin: 10px 0px 10px 20px;
  text-align: left;
}
.pane {
  margin: 0px 0px 0px 20px;
  text-align: left;
  color: red;
}
.pane1 {
  margin: 0px 0px 0px 35px;
  text-align: left;
  font-size: 8px;
}
.panefoot {
  margin: 0px;
  text-align: left;
  margin: 7px 0px 0px 35px;
  font-size: 8px;
}
.my {
  height: 30px;
  margin: 0px;
  padding-top: 0px;
  vertical-align: center;
  border-radius: 0px;
  background: #1c1a25;
  border-color: #555;
  font-size: 12px;
}
.my1 {
  margin: 0px;
  padding: 0px;
  font-size: 12px;
  border-radius: 0px;
  background: #1c1a25;
  border-color: #555;
}
.level-button{
  width: 100%;
  padding: 10px;
  background:red;
  border:none;
  border-radius: 5px;
  font-weight: 700;
  color: white;
}
.add-image-card {
    border: 1px solid #cccccc33;
    height: 100px;
    border-radius: 5px;
    display: inline-flex;
    background-color: #19181f;
    width: 100%;
}
#select-leveltest {
    width: 100%;
    margin-top: 5px;
    background: none;
    border: none;
    border-bottom: 1px solid #55555599;
    outline: none;
    color: #cccccc;
    height: 40px;
    font-size: 14px;
    background-color: #19181F;
}
option {
    height: 40px;
    font-size: 16px;
    font-weight: 500;
    font-style: italic;
}
.introduction {
    width: 100%;
    border: none;
    border-bottom: 1px solid #55555599;
    outline: none;
    color: #cccccc;
    margin-top: 5px;
}
.part-container {
    display: flex;
    border: none;
    border-bottom: 1px solid #55555599;
}
.remove-part-button {
    background-color: red;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    font-size: 18px;
    font-weight: 700;
    outline: none;
    border: none;
    width: 5%;
    color: #fff;
}
.part-container input {
    background-color: #19181F;
    border: none;
    height: 40px;
    border-right: 1px solid #333333;
    outline: none;
    color: #cccccc;
    padding-left: 10px;
}
.key-take-aways input {
    background-color: #19181F;
    border: none;
    height: 40px;
    border-right: 1px solid #333333;
    outline: none;
    color: #cccccc;
    width: 100%;
    padding-left: 10px;
}
.basic-info-container p {
    font-size: 12px;
    color: #555555;
}
.basic-info-container input {
    text-align: right;
    width: 80%;
    height: 30px;
    margin: 0;
    border: none;
    margin: 0;
    height: 30px;
}
.text-label {
  background-color: red;
  border-radius: 10px;
  margin-right: 10px;
  padding: 2px 10px;
}
</style>