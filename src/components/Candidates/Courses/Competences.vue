<template>
  <div class="competence-main-con">
    <div class="row">
      <div class="col-9 overview-container fx-container">
        <div class="fx-container jus-sb w-100">
          <div class="fx-container pt-2">
            <div class="test-item" style="color: #fff;">{{ data.competence.symbol }}</div>
            <p class="pl-5" style="background-color: #19181f">
              {{ data.competence.name }}
            </p>
          </div>
          <button
            class="open-button"
            :style="{color: show ? 'green' : 'red'}"
            @click="() => {
                show = !show
            }"
            >
                {{ show ? 'Close' : 'Open' }}
            </button>
          <!-- </div> -->
        </div>
      </div>
      <div class="col-3" v-if="show">
        <div class="row">
          <div class="col-4">
            <p class="remarks-heading">Self Score</p>
          </div>
          <div class="col-4">
            <p class="remarks-heading">Certified Score</p>
          </div>
          <div class="col-4">
            <p class="remarks-heading">Global Score</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="show">
      <div v-for="(subCompetence, index) in data.subCompetences" :key="subCompetence._id">
        <candidate-sub-competence-card
            :data="subCompetence"
            :symbol="data.competence.symbol"
            :index="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CandidateSubCompetenceCard from './SubCompetences.vue'
export default {
  name: 'CandidateCompetenceCard',
  components: {
      CandidateSubCompetenceCard
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
      return {
        show: false
      }
  }
}
</script>

<style scoped>
.overview-container {
    border: 1px solid #FFFFFF33;
    border-radius: 5px;
    background-color:#19181F;
}
.sub-competence-container {
    background-color: #3f3c49;
    border-radius: 5px;
}
.remarks-heading {
  font-size: 12px;
  transform: rotate(-45deg);
  margin-bottom: 0;
}
.fx-container {
    display: flex;
}
.jus-sb {
    justify-content: space-between;
}
.radial-text {
    margin-top: 10px;
}
.open-button {
    background: none;
    border: none;
    outline: none;
}
</style>