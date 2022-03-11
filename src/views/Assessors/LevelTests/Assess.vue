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
        <form @submit="assessSubCompetence">
          <h5 class="w-50" style="margin-top: 29px">
            Selected Indicators
          </h5>
          <ul>
              <li
                class="mt-1 p-2"
                v-for="(indicator, index) in subCompetence.selectedIndicators"
                :key="index"
                style="border: 1px solid #cccccc33; background-color: #19181f; color: #cccccc99;"
            >
                {{ indicator }}
            </li>
          </ul>
          <h5 class="w-50" style="margin-top: 29px">Candiate Experiece</h5>
          <select-experience
            :value="subCompetence.rating"
            :disabled="true"
          />

          <div class="mt-5">
            <h5>Explaination</h5>
            <div class="p-2" style="border: 1px solid #cccccc33">
                <p>{{ subCompetence.answer }}</p>
            </div>
          </div>
          <h5 class="w-50" style="margin-top: 29px">Rate this Sub Competence</h5>
          <select-experience
            :value="form.assessorRating"
            @experienceSelected="selectExperience"
          />
          <div class="mt-5">
            <!-- <button class="review-button mt-3" type="button">Review assessor</button> -->
            <button class="review-button float-right mt-3" type="submit">Submit</button>
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
          assessorRating: 0,
          status: 'Assessed'
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
      this.form.assessorRating = value
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
    assessSubCompetence(e) {
      e.preventDefault()
      if (this.subCompetence.status === 'Assessed') {
        this.makeToast('warning', {
          status: 'Already Submitted',
          message: 'You have already assessed this sub competence.'
        })
        return
      }
      const data = {
        id: this.$route.params.id,
        payload: this.form
      }
      this.$store.dispatch('updateCandidateSubCompetence', data)
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