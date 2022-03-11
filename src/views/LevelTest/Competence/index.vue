<template>
  <div id="container" style="color: white;">
    <div
      class="main p-5"
      style="width: 100%;"
    >
      <input
        type="text"
        v-model="name"
        placeholder="New Level test - edit name"
        >
      <competence-card
        v-for="(competence, index) in leveltest.competences"
        :key="index"
        :competence="competence"
      />
      <div class="button-container">
        <button
            class="level-button"
            @click="addCompetence"
            >
            Add new Competence
        </button>
      </div>
      <div class="button-container">
        <button
            class="level-button"
            @click="saveLeveltest">
            Save Leveltest
            </button>
      </div>
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
      name: ''
    }
  },
  created() {
    this.$store.dispatch('getLevelTest', this.$route.params.id)
      .then(
        (response) => {
          this.leveltest = response.data.data
          this.name = response.data.data.name
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
            this.name = response.data.data.name
          }
        )
    },
    saveLeveltest() {
        const data = {
            id: this.$route.params.id,
            payload: {
                name: this.name
            }
        }
        this.$store.dispatch('updateLeveltest', data)
            .then(
                (response) => {
                    this.leveltest = response.data.data
                    this.name = response.data.data
                    this.$router.push('/admin/leveltest')
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
.level-button{
  width: 200px;
  padding: 5px;
  background: red;
  border: none;
  border-radius: 5px;
  display: block !important;
  color: #fff;
  margin-top: 10px;
}
input {
    width: 100%;
    height: 50px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #999999;
    color: #fff;
    outline: none;
}
.button-container {
    text-align: -webkit-right;
}
</style>