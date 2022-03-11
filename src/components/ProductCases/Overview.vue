<template>
  <div class="row w-100 mt-1 overview-card py-2">
    <div
      class="col-6"
      style="display: inline-flex; background-color: #19181f"
    >
      <div class="test-item">{{ index + 1 }}</div>
      <p class="ml-4 mt-1 card-text" style="color: #CCCCCC">
        {{ productCase.title || '...' }}
      </p>
    </div>
    <div
      class="col-6"
      style="background-color: #19181f; display: flex; justify-content: flex-end;"
    >
      <!-- <button
        class="state-button"
        :class="leveltest.status === 'Active' ? 'active' : 'in-active'"
      >
        {{ productCase.status }}
      </button> -->
      <!-- <a class="last-buttons pt-1" href="#">Edit Front</a> -->
      <router-link class="last-buttons pt-1" :to="'/productcases/' + productCase._id">Edit</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCaseOverview',
  props: {
    productCase: {
      type: Object,
      default: () => {
        return {}
      }
    },
    index: {
        type: Number,
        default: 0
    }
  }
}
</script>

<style scoped>
.overview-card {
    border: 1px solid #cccccc33;
    padding: 7px 15px 0px 15px;
    background-color: #19181f;
}

.state-button {
  border:none; 
  border-radius: 5px;
  padding: 0px 10px;
  color: #fff;
  font-size: 14px;
  min-width: 70px;
  max-height: 30px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.active {
  background-color: #098040;
}
.in-active {
  background-color: #D6000E;
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
  color: #fff;
  background-color: red;
}
.last-buttons {
  color: #fff;
  font-size: 12px;
  margin: 0 10px;
}
.last-buttons:hover {
  color: #999;
}
.card-text {
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 12px;
}
</style>