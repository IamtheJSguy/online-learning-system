<template>
  <div id="container" style="color: white;">
    <div
      class="main pl-5 pt-5"
      style="height: 500px; width: 80%; text-align: left"
    >
      <h2>{{ leveltest.name ? leveltest.name : 'New Level test - edit name'}}</h2>
      <competence-card
        v-for="(competence, index) in adminCompetences"
        :key="index"
        :competence="competence"
      />
      <button class="level-button mt-3 mr-3" @click="addCompetence">Add new Competence</button
      ><br /><br /><br />
      <button
        class="level-button mt-1 mr-3"
        @click="() => {
          $router.push('/admin/leveltest')
        }">
          Save Leveltest
        </button>
    </div>
  </div>
</template>
<script>
import CompetenceCard from '@/components/LevelTest/Competence/Card'

export default {
  name: "Edit Name",
  components: {
    CompetenceCard
  },
  data() {
    return {
      leveltest: {},
      adminCompetences: [
        {
          name: 'First'
        },
        {
          name: 'Second'
        },
        {
          name: ''
        }
      ]
    }
  },
  created() {
    this.$store.dispatch('getLevelTest', this.$route.params.id)
      .then(
        (response) => {
          this.leveltest = response.data.data
          this.adminCompetences = response.data.data.adminCompetences
        }
      )
  },
  methods: {
    addCompetence() {
      const payload = {
        leveltest: this.$route.params.id
      }
      this.$store.dispatch('createCompetence', payload)
        .then(
          (response) => {
            this.leveltest = response.data.data
            this.adminCompetences = response.data.data.adminCompetences
          }
        )
    }
  }
};
</script>
<style scoped>
.level-button{
  width: 200px;
  padding: 10px;
  background: red;
  border: none;
  border-radius: 5px;
  float: right;
}
</style>