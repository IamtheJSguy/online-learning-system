<template>
  <div class="p-5">
    <h3 style="text-align: center; color: #fff;" class="mt-1">My Meetings</h3>
    <div v-for="(meeting, index) in meetings" :key="index">
      <div class="meeting-card row p-2">
        <div class="col-lg-6 col-md-12 col-sm-12 fx-con">
          <img
            src="@/assets/images/Ellipse 1.png"
            height="40px"
            style="border-radius: 50%"
            alt=""
          />
          <p class="pl-2 m-0 mb-0 mt-2" style="color: #fff;">{{ meeting.candidate.firstName }} {{ meeting.candidate.lastName }}</p>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 fx-con jus-sb">
            <p class="mt-2" style="color: #fff;">{{ getStartTime(meeting.time) }}</p>
            <router-link :to="'/productcases/meetings/' + meeting._id">Start</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'MyMeetings',
  data() {
    return {
      meetings: []
    }
  },
  created() {
    this.$store.dispatch('getMyMeetings')
      .then(
        (response) => {
          this.meetings = response.data.data
        }
      )
  },
  methods: {
      getStartTime(date) {
          return moment(date).format('MMMM DD, YYYY hh:mm:ss a')
      }
  }
}
</script>

<style scoped>
.meeting-card {
    border: 1px solid grey;
    width: 100%;
}
.fx-con {
    display: flex;
}
.jus-sb {
    justify-content: space-between;
}
</style>