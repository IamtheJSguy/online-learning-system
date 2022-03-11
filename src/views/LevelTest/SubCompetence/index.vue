<template>
  <div id="container" style="color: white;">
    <div
      class="main p-5"
      style="width: 100%; text-align: left;"
    >
        <input
        type="text"
        v-model="name"
        placeholder="New Competence - edit title"
        >
        <input
            type="text"
            placeholder="Symbol to define Leveltest number (A, B, AA, AB ...)"
            v-model="symbol"
        >
        <div>
            <sub-competence-card
                v-for="(subCompetence, index) in competence.subCompetences"
                :key="index"
                :subCompetence="subCompetence"
                :index="index"
                :symbol="competence.symbol"
            />
        </div>
        <div class="button-container">
            <button class="level-button" @click="addNewSubCompetence">Add Sub Competence</button>
        </div>
        <div class="button-container">
            <button class="level-button" @click="saveCompetence">Save Competence</button>
        </div>
  </div>
  </div>
 
</template>
<script>
import SubCompetenceCard from '@/components/LevelTest/SubCompetence/Card'

export default {
  name: "OverView",
  components: {
      SubCompetenceCard
  },
  data() {
      return {
        competence: {},
        name: '',
        symbol: ''
      }
  },
  created() {
      this.$store.dispatch('getCompetence', this.$route.params.id)
        .then(
            (response) => {
                const res = response.data.data
                this.competence = res
                this.name = res.name
                this.symbol = res.symbol
            }
        )
  },
  methods: {
      addNewSubCompetence() {
          const payload = {
            competence: this.$route.params.id
          }
          this.$store.dispatch('createSubCompetence', payload)
            .then(
                (response) => {
                    const res = response.data.data
                    this.competence = res
                }
            )
            .catch(
                (error) => {
                    console.log(error.response.data)
                }
            )
      },
      saveCompetence() {
          const data = {
              id: this.$route.params.id,
              payload: {
                name: this.name,
                symbol: this.symbol
              }
          }
          this.$store.dispatch('updateCompetence', data)
          .then(
              (response) => {
                  const res = response.data.data
                  this.competence = res.competence
                  this.name = res.competence.name
                  this.$router.push(`/admin/leveltest/${res.leveltest}`)
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

.test-item {
  border: 1px solid red;
  padding: 2px;
  width: 60px;
  height:2px;
  font-size: 12px;
  text-align: center;
  border-radius: 20px;
  background-color: red;
}

input {
    width: 100%;
    height: 40px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #999999;
    color: #fff;
    outline: none;
    font-size: 12px;
    font-weight: 700;
}
.level-button{
  width: 200px;
  padding: 5px;
  background:red;
  border:none;
  border-radius: 5px;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  margin-top: 10px;
}
.button-container {
    text-align: -webkit-right;
}
</style>
