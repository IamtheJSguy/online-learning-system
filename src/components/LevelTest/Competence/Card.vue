<template>
  <div
    class="row w-100 mt-1 competence-card py-2"
  >
    <div
      class="col-10"
      style="display: inline-flex; background-color: #19181f"
    >
      <div class="test-item">{{ competence.symbol || 'AA' }}</div>
      <p class="pl-5 card-text mt-1" style="background-color: #19181f">
        {{ competence.name || '...' }}
      </p>
    </div>
    <div class="col-2" style="background-color: #19181f; text-align: right;">
      <router-link class="last-button pt-1" :to="'/admin/leveltest/competence/' + competence._id">Edit</router-link>
    </div>
  </div>
</template>

<script>
export default {
    name: 'CompetenceCard',
    props: {
        competence: {
            type: Object,
            default: () => {
                return {}
            }
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
  margin-top: 2px;
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