<template>
  <div class="meeting">
    <div class="container-zoom" v-if="meeting._id">
      <ZoomFrame
        :nickname="user.firstName + ' ' + user.lastName"
        :meetingId="meeting.meetingId"
        :passcode="meeting.passcode"
        :email="user.email"
      />
    </div>
  </div>
</template>

<script>
import ZoomFrame from "@/components/Meetings/ZoomFrame.vue"
import { mapState } from 'vuex'

export default {
  name: "ZoomCallFrame",
  components: {
    ZoomFrame,
  },
  data() {
    return {
      meeting: {}
    }
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  created() {
    this.$store.dispatch('getMeeting', this.$route.params.id)
      .then(
        (response) => {
          this.meeting = response.data.data
        }
      )
  }
};
</script>

<style>
.container-zoom {
  width: 100%;
  height: 100%;
}
</style>