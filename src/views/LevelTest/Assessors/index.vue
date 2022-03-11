<template>
  <div id="container" class="pt-2">
    <h2 style="color: white">Overview Assessor</h2>
    <div
      class="main p-5"
      style="width: 100%; text-align: left"
    >
      <assessor-card
        v-for="(assessor, index) in assessors"
        :key="index"
        :assessor="assessor"
      />
      <div class="right-align">
        <button class="level-button mt-3" v-b-modal.add-assessor>Add Assessor</button>
      </div>
    </div>
    <b-modal id="add-assessor" hide-footer hide-header centered body-bg-variant="dark">
      <form @submit="addAssessor">
        <h4 align="center">Add Assessor</h4>
        <input type="text" placeholder="First Name" v-model="form.firstName" required>
        <input type="text" placeholder="Last Name" v-model="form.lastName" required>
        <input type="email" placeholder="Email" v-model="form.email" required>
        <div class="right-align mt-2">
          <button class="level-button" style="width: 100px;">Add</button>
        </div>
      </form>
    </b-modal>
  </div>
</template>
<script>
import AssessorCard from '@/components/LevelTest/Assessors/Card.vue'

export default {
  name: "OverView",
  components: {
    AssessorCard
  },
  data() {
    return {
      assessors: [],
      form: {
        firstName: '',
        lastName: '',
        email: '',
        role: 'assessor'
      }
    }
  },
  created() {
    this.$store.dispatch('getAssessors')
      .then(
        (response) => {
          this.assessors = response.data.data
        }
      )
  },
  methods: {
    addAssessor(e) {
      e.preventDefault()
      this.$store.dispatch('addAssessor', this.form)
        .then(
          (response) => {
            this.assessors = response.data.data
            this.$bvModal.hide('add-assessor')
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

<style scoped>
*{
    color: white;
}
.test-item {
  border: 1px solid red;
  padding: 2px;
  width: 60px;
  height:25px;
  font-size: 12px;
  text-align: center;
  border-radius: 20px;
  background-color: red;
}
.active-state{
 
  background-color: #098040; 
  border:none; 
  border-radius:55px; 
  font-size: 16px; 
  width:70px; 
 
}
.last-buttons{
  color: white;
  margin-left: 30px;
}
.level-button{
  width: 200px;
  padding: 5px 10px;
  background:red;
  border:none;
  border-radius: 5px;
  outline: none;
  font-weight: bold;
}
.right-align {
  text-align: right;
}
input {
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  border-bottom: 1px solid #55555599;
  margin-top: 5px;
  padding-left: 10px;
  color: #cccccc;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 5px;
}
</style>
