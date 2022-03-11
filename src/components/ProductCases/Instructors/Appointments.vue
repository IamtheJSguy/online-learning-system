<template>
  <div>
    <form @submit="getAppointment">
      <input
        type="text"
        v-model="form.topic"
        placeholder="Add a Topic for your appointment"
      />
      <datetime
        class="mt-1"
        input-class="inp"
        type="datetime"
        v-model="form.start_time"
        title="Select time of the appointment"
        placeholder="Appointment Time"
      ></datetime>
      <div align="right" class="mt-2">
        <button class="submit-button" type="submit">Get Appointment</button>
      </div>
    </form>
  </div>
</template>

<script>
import { Datetime } from 'vue-datetime'
import { mapState } from 'vuex'

import 'vue-datetime/dist/vue-datetime.css'

export default {
  name: 'InstructorAppointment',
  components: {
    Datetime
  },
  props: {
    instructor: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      form: {
        topic: '',
        type: '2',
        instructor: '',
        candidate: '',
        start_time: '',
        duration: 15,
        timezone: 'America/New_York',
        settings: {
          alternative_hosts: '',
          enforce_login: false
        }
      },
      duration: 0
    }
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  methods: {
    getAppointment(e) {
      e.preventDefault()
      this.form.instructor = this.$props.instructor
      this.form.candidate = this.user._id
      this.$store.dispatch('createMeeting', this.form)
        .then(
          (response) => {
            this.makeToast('success', response.data)
            this.form = {
              topic: '',
              type: '2',
              instructor: '',
              candidate: '',
              start_time: '',
              duration: 15,
              timezone: 'America/New_York',
              settings: {
                alternative_hosts: '',
                enforce_login: false
              }
            }
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
input {
    border: 1px solid grey;
    background-color: #cccccc33;
    width: 100%;
    outline: none;
    color: white;
    height: 40px;
    font-size: 14px;
    padding: 10px;
}
.submit-button {
  border: none;
  background-color: red;
  border-radius: 5px;
  padding: 5px 20px;
  color: #fff;
  font-size: 14px;
}
</style>

<style>
.inp {
    border: 1px solid grey;
    background-color: #cccccc33;
    width: 100%;
    outline: none;
    color: white;
    height: 40px;
    font-size: 14px;
    padding: 10px;
}
</style>