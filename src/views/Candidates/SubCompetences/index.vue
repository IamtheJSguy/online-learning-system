<template>
  <div class="pl-5" style="text-align: left">
    <h2 style="color: white">Level test: {{ data.course.leveltest.name }}</h2>
    <div class="row">
      <label class="test-item ml-3 mt-4">{{ symbol() }}</label>
      <h5 class="ml-4" style="margin-top: 29px; color: white">
        {{ subCompetence.subCompetence.question }}
      </h5>
    </div>
    <div class="row">
      <div class="col-lg-10 col-md-12 col-sm-12">
        <div
          class="p-1"
          style="
            width: 100%;
            height: 60px;
            background-color: #19181f;
            border: 1px solid #cccccc33;
          "
        >
          <p>{{ subCompetence.subCompetence.description }}</p>
        </div>
        <form @submit="attempSubCompetence">
          <h5 class="w-50" style="margin-top: 29px">
            Indicators (check your experience)
          </h5>
          <b-form-checkbox-group
            class="check-box-color"
            :options="subCompetence.indicators"
            stacked
            v-model="form.selectedIndicators"
          >
          </b-form-checkbox-group>
          <h5 class="w-50" style="margin-top: 29px">Rate your experience</h5>
          <select-experience
            :value="form.rating"
            @experienceSelected="selectExperience"
          />

          <div class="mt-5" v-if="form.rating >= 5">
            <h5>Explain your answer</h5>
            <textarea
              class="text-explain"
              id="exampleFormControlTextarea1"
              v-model="form.answer"
              rows="3"
              required
            ></textarea
            ><br />
            <input
              type="file"
              style="
                width: 50%;
                border: 1px solid #cccccc99;
                background-color: #19181f;
              "
            />
            <button
              style="
                width: 115px;
                border: 1px solid #cccccc99;
                margin-left: 10px;
                height: 30px;
                background-color: #19181f;
              "
            >
              Upload</button
            ><br />
          </div>
          <div class="mt-5">
            <button class="review-button mt-3" type="button">Review assessor</button>
            <button class="review-button float-right mt-3" type="submit">Submit answer</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import SelectExperience from '@/components/Candidates/RangeSelector/index.vue'
export default {
  name: "AttempSubCompetence",
  components: {
    SelectExperience
  },
  data() {
    return {
      form: {
        rating: 0,
        selectedIndicators: [],
        answer: '',
        status: 'Done',
        course: ''
      },
      subCompetence: {},
      data: {}
    }
  },
  created() {
    this.$store.dispatch('getCandidateSubCompetence', this.$route.params.id)
      .then(
        (response) => {
          const res = response.data.data
          this.subCompetence = res
          this.form.rating = res.rating
          this.form.selectedIndicators = res.selectedIndicators
          this.form.answer = res.answer
        }
      )
    this.$store.dispatch('getCandidateCourse', this.$route.params.course)
      .then(
        (response) => {
          this.data = response.data.data
        }
      )
  },
  methods: {
    selectExperience(value) {
      this.form.rating = value
    },
    symbol() {
      let sym = ''
      let key = 0
      this.data.leveltest.competences.map(comp => {
        sym = comp.competence.symbol
        comp.subCompetences.map((subCom, index) => {
          if (subCom._id === this.subCompetence._id) {
            key = index + 1
          }
        })
      })
      return sym + key
    },
    attempSubCompetence(e) {
      e.preventDefault()
      if (this.subCompetence.status === 'Done') {
        this.makeToast('warning', {
          status: 'Already Submitted',
          message: 'You have already submitted your answer.'
        })
        return
      }
      this.form.course = this.$route.params.course
      const data = {
        id: this.$route.params.id,
        payload: this.form
      }
      this.$store.dispatch('attempCandidateSubCompetence', data)
        .then(
          (response) => {
            this.makeToast('success', response.data)
            this.$router.push(`/candidate/courses/${this.$route.params.course}`)
          }
        )
        .catch(
          (error) => {
            this.makeToast('error', error.response.data)
          }
        )
    },
    makeToast(variant, data) {
        this.$bvToast.toast(data.message, {
          title: `${data.status}`,
          variant: variant,
          solid: true
        })
      }
  }
};
</script>

<style>
* {
  margin: 0;
}
.test-item {
  border: 1px solid red;
  padding: 5px;
  width: 70px;
  text-align: center;
  border-radius: 20px;
  background-color: red;
}
.check-box-color {
  color: #cccccc;
}
.text-explain {
  background-color: #19181F;
  height: 130px;
  border: 1px solid #cccccc33;
  border-radius: 5px;
  width: 100%;
  color: #cccccc;
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
input[type="checkbox"]:checked {
  background: red;
}
#__BVID__13_BV_option_0 {
  background: brown;
}
</style>

<style lang="scss">
input[type="checkbox"]:checked {
  background: red;
}
</style>