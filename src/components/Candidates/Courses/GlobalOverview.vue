<template>
  <div class="row overview-container py-3">
    <div class="col-3 pl-5" style="border-right: 1px solid #888">
      <radial-progress-bar
        :diameter="100"
        :completed-steps="value"
        :total-steps="100"
        innerStrokeColor="white"
        startColor="green"
        stopColor="green"
        :innerStrokeWidth="5"
        :strokeWidth="5"
      >
        <p class="text-white">{{ value }}</p>
      </radial-progress-bar>
      <p style="margin-left: 25px">Overall</p>
    </div>
    <div
      class="col-9"
      style="display: flex; flex-wrap: wrap; justify-content: center"
    >
      <div class="row" style="justify-content: center">
        <div class="col-2" align="center">
          <radial-progress-bar
            class="pt-4 pl-2"
            :diameter="70"
            :completed-steps="value"
            :total-steps="100"
            innerStrokeColor="white"
            startColor="#D6000E"
            stopColor="#D6000E"
            :innerStrokeWidth="5"
            :strokeWidth="5"
          >
            <p class="text-white" style="margin: 50px 0 0 20px">
              {{ value }}
            </p>
          </radial-progress-bar>
          <p class="mt-4 ml-2">Flexibility</p>
        </div>
        <div class="col-2" align="center">
          <radial-progress-bar
            class="pt-4 pl-2"
            :diameter="70"
            :completed-steps="value"
            :total-steps="100"
            innerStrokeColor="white"
            startColor="#D6000E"
            stopColor="#D6000E"
            :innerStrokeWidth="5"
            :strokeWidth="5"
          >
            <p class="text-white" style="margin: 50px 0 0 20px">
              {{ value }}
            </p>
          </radial-progress-bar>
          <p class="mt-4 ml-2">Features</p>
        </div>
        <div class="col-2" align="center">
          <radial-progress-bar
            class="pt-4 pl-2"
            :diameter="70"
            :completed-steps="value"
            :total-steps="100"
            innerStrokeColor="white"
            startColor="#D6000E"
            stopColor="#D6000E"
            :innerStrokeWidth="5"
            :strokeWidth="5"
          >
            <p class="text-white" style="margin: 50px 0 0 20px">
              {{ value }}
            </p>
          </radial-progress-bar>
          <p class="mt-4 ml-2">Design</p>
        </div>
        <div class="col-3" align="center">
          <radial-progress-bar
            class="pt-4 pl-2"
            :diameter="70"
            :completed-steps="value"
            :total-steps="100"
            innerStrokeColor="white"
            startColor="#D6000E"
            stopColor="#D6000E"
            :innerStrokeWidth="5"
            :strokeWidth="5"
          >
            <p class="text-white" style="margin: 50px 0 0 20px">
              {{ value }}
            </p>
          </radial-progress-bar>
          <p class="mt-4 ml-2">Value for Money</p>
        </div>
        <div class="col-3" align="center">
          <radial-progress-bar
            class="pt-4 pl-2"
            :diameter="70"
            :completed-steps="value"
            :total-steps="100"
            innerStrokeColor="white"
            startColor="#D6000E"
            stopColor="#D6000E"
            :innerStrokeWidth="5"
            :strokeWidth="5"
          >
            <p class="text-white" style="margin: 50px 0 0 20px">
              {{ value }}
            </p>
          </radial-progress-bar>
          <p class="mt-4 ml-2">Ease of Use</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RadialProgressBar from 'vue-radial-progress'

export default {
  name: 'GlobalOverview',
  components: {
      RadialProgressBar
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
      value: 70.8,
      value1: 6
    }
  }
}
</script>