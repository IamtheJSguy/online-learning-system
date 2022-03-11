<template>
  <div class="p-5 sub-competence-edit" style="text-align: left">
    <h2 style="color: white">Level test: {{leveltest.name}}</h2>
    <div class="row">
      <div class="col-12 p-0">
        <input
          v-model="subCompetence.question"
          type="text"
          class="question-input"
          placeholder="Add the discription of the subCompetence here."
          required
        />
        <textarea
          class="mt-2"
          name="description"
          id="description"
          cols="30"
          rows="5"
          placeholder="Describe your question here"
          v-model="subCompetence.description"
        ></textarea>
        <h5 class="mt-3">
          Indicators (Checklist)
        </h5>
        <div
          v-for="(indicators, index) in subCompetence.indicators"
          :key="index"
          class="mt-1"
          style="display: flex"
        >
            <input
              v-model="subCompetence.indicators[index]"
              type="text"
              class="indicator-text"
              placeholder="Indicator"
              required
            />

            <button
              v-if="index !== 0"
              class="indicator-btn"
              @click="removeIndicator(index)"
            >
              -
            </button>
        </div>
        <div class="mt-2">
          <button class="add-indicator-btn" @click="addIndicator()">
            + Indicator
          </button>
          <br />
        </div>

        <div class="button-container">
          <button
            class="level-button"
            @click="updateSubCompetence"
          >
            Save Sub Competence
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "EditsubCompetence",
  data() {
    return {
      subCompetence: {
        question: '',
        description: '',
        indicators: [''],
      },
      competence: {},
      leveltest: {}
    }
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  created() {
    this.$store.dispatch('getSubCompetenceDetail', this.$route.params.id)
      .then(
        (response) => {
          const res = response.data.data
          console.log(res.subCompetence)
          res.subCompetence.indicators = res.subCompetence.indicators.length > 0 ? res.subCompetence.indicators : ['']
          this.subCompetence = res.subCompetence
          this.competence = res.competence
          this.leveltest = res.leveltest
        }
      )
  },
  methods: {
    addIndicator() {
      this.subCompetence.indicators.push('')
    },
    removeIndicator(key) {
      this.subCompetence.indicators = this.subCompetence.indicators.filter((indicator, index) => index !== key)
    },
    updateSubCompetence() {
      const data = {
        id: this.$route.params.id,
        payload: this.subCompetence
      }
      this.$store.dispatch('updateSubCompetence', data)
        .then(
          (response) => {
            const res = response.data.data
            this.subCompetence = res.subCompetence
            this.$router.push(`/admin/leveltest/competence/${res.competence}`)
          }
        )
        .catch(
          (error) => {
            console.log(error.response.data)
          }
        )
    }
  }
};
</script>

<style lang="scss">
.sub-competence-edit {
  margin: 0;
  #description {
    background: none;
    border: none;
    border-bottom: 1px solid #cccccc99;
    width: 100%;
    outline: none;
    font-size: 14px;
    color: #fff;
  }
  .upload-button {
    width: 70%;
    border: 1px solid #cccccc99;
    background-color: #3f3c43;
  }
  .review-button {
    padding: 5px 10px;
    background-color: #D6000E;
    border-radius: 5px;
    color: #fff;
    outline: none;
    border: none;
  }
  p {
    color: #888;
  }
  h5 {
    color: #fff;
  }
  .indicator-text{
    background: none;
    width: 100%;
    border: none;
    border-bottom: 1px solid #cccccc99;
    outline: none;
    color: #FFF;
    font-size: 14px;
  }
  .indicator-btn{
    background-color :red;
    border: none;
    padding: 5px 15px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    color: #fff;
    font-size: 18px;
    font-weight: 800;
  }
  .add-indicator-btn{
    background-color :red;
    border: none;
    padding: 5px 15px;
    border-radius: 5px;
    color: #fff;
  }
  .question-input {
    width: 100%;
    height: 40px;
    /* color: #fff; */
    font-size: 12px;
    font-weight: 700;
    background-color: #19181f;
    border: none;
    border-bottom: 2px solid #cccccc33;
    color: #cccccc;
    outline: none;
  }
  .row {
    margin: 0;
    padding: 0;
  }
  .button-container {
    text-align: -webkit-right;
  }
  .level-button {
    padding: 5px 20px;
    background-color: red;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-weight: 550;
    font-size: 14px;
    outline: none;
  }
}
</style>

