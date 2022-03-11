<template>
  <div class="row">
    <div class="col-9 px-3">
      <div class="sub-competence-container fx-container jus-sb px-2 pt-1 mt-1">
        <div class="fx-container pt-1">
          <div class="test-item" style="color: #fff;">{{ symbol }} {{ index + 1 }}</div>
          <p class="pl-5">{{ data.subCompetence.question }}</p>
        </div>
        <router-link
          class="last-button pt-1"
          :to="'/candidate/courses/subcompetence/' + $route.params.id + '/' + data._id"
        >
          Open
        </router-link>
        <!-- <p v-else>{{ data.status }}</p> -->
      </div>
    </div>
    <div class="col-3">
      <div class="row pt-2">
        <div class="col-4">
          <radial-progress-bar
            :diameter="40"
            :completed-steps="data.rating"
            :total-steps="10"
            innerStrokeColor="white"
            startColor="#D6000E"
            stopColor="#D6000E"
            :innerStrokeWidth="3"
            :strokeWidth="3"
          >
            <p class="radial-text">
              {{ data.rating }}
            </p>
          </radial-progress-bar>
        </div>
        <div class="col-4">
          <radial-progress-bar
            :diameter="40"
            :completed-steps="data.assessorRating"
            :total-steps="10"
            innerStrokeColor="white"
            startColor="#D6000E"
            stopColor="#D6000E"
            :innerStrokeWidth="3"
            :strokeWidth="3"
          >
            <p class="radial-text">
              {{ data.assessorRating }}
            </p>
          </radial-progress-bar>
        </div>
        <div class="col-4">
          <radial-progress-bar
            :diameter="40"
            :completed-steps="data.subCompetence.rating"
            :total-steps="10"
            innerStrokeColor="white"
            startColor="#D6000E"
            stopColor="#D6000E"
            :innerStrokeWidth="3"
            :strokeWidth="3"
          >
            <p class="radial-text">
              {{ data.subCompetence.rating }}
            </p>
          </radial-progress-bar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RadialProgressBar from 'vue-radial-progress'

export default {
  name: 'CandidateSubCompetenceCard',
  components: {
    RadialProgressBar
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    },
    symbol: {
        type: String,
        default: ''
    },
    index: {
        type: Number,
        default: 1
    }
  },
  data() {
    return {
      value: 70.3,
      value1: 8,
    }
  }
}
</script>

<style scoped>
.sub-competence-container {
    background-color: #3f3c49;
    border-radius: 2px;
}
.fx-container {
    display: flex;
}
.jus-sb {
    justify-content: space-between;
}
.radial-text {
    margin-top: 15px;
}
</style>