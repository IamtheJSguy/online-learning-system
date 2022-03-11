<template>
  <div
    class="row w-100 mt-1 competence-card py-2"
  >
    <div
      class="col-10"
      style="display: inline-flex; background-color: #19181f"
    >
      <div class="test-item">{{symbol}}{{index + 1}}</div>
      <p class="ml-4 mt-1 card-text" style="background-color: #19181f">
        {{ subCompetence.question ? subCompetence.question : 'Add the name of the competences here'}}
      </p>
    </div>
    <div class="col-2" style="background-color: #19181f;" align="right">
      <router-link
        class="last-button"
        :to="'/admin/leveltest/subcompetence/' + subCompetence._id"
        >
        Edit
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubCompetenceCard',
  props: {
    subCompetence: {
      type: Object,
      default: () => {
        return {}
      }
    },
    index: {
      type: Number,
      default: 0
    },
    symbol: {
      type: String,
      default: 'A'
    }
  }
}
</script>

<style scoped>
.competence-card {
    border: 1px solid #cccccc33;
    padding: 0 10px;
    display: flex;
    background-color: #19181f;
}
.test-item {
  margin-top: 3px;
  border: 1px solid red;
  width: 60px;
  padding: 3px;
  height: 20px;
  font-size: 10px;
  font-weight: 900;
  text-align: center;
  border-radius: 10px;
  background-color: red;
}
.last-button {
  color: #fff;
  font-size: 12px;
}
.last-button:hover {
  color: #999;
}
.card-text {
  text-overflow: ellipsis;
  font-size: 12px;
}
</style>