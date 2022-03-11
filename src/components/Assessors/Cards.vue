<template>
  <div class="inner-card mt-1">
    <div style="display: inline-flex">
      <img src="@/assets/images/Ellipse 1.png" width="60px;" alt="" />
      <p style="margin-left: 5px; font-size: 13px; margin-top: 10px">
        {{ course.user.username }}
      </p>
      <img
        src="@/assets/images/1.png"
        style="margin-left: 35px; margin-top: 8px; height: 25px"
        alt=""
      />
    </div>
    <p style="margin-left: 65px; margin-top: -38px; font-size: 13px">
      Product Manager
    </p>
    <div style="display: inline-flex">
      <button
        v-if="course.status === 'Claimed'"
        class="inner-card-button inner-card-button-active"
      >
        Claimed
      </button>
      <button v-else class="inner-card-button" @click="claimCourse">
        Claim
      </button>
      <button class="inner-card-button" disabled>Review</button>
      <button class="inner-card-button" disabled>Done</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AssessorCoursesCard',
  props: {
    course: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  methods: {
    claimCourse() {
      const data = {
        id: this.$props.course._id,
        payload: {
          assessor: this.user._id,
          status: 'Claimed'
        }
      }
      this.$store.dispatch('claimCourse', data)
        .then(
          (response) => {
            this.makeToast('success', response.data)
            this.$emit('claimedCourse')
          }
        )
        .catch(
          (error) => {
            this.makeToast('warning', error.response.data)
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
}
</script>

<style scoped>
.inner-card{
    background-color: #3F3C49;
    border-radius: 5px;
    margin-left: 7px;
    height: 105px;
    width: 97%;
    padding:10px;
}
.inner-card-button{
    background: none;
    border:1px solid #CCCCCC33;
    font-size:13px;
    width: 60px;
    border-radius: 50px;
    color: white;
    margin-left: 8px;
}
.inner-card-button-active{
    color: #09D175;
}
</style>