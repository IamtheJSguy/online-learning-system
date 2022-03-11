<template>
  <div
    class="row w-100 mt-1 py-2 assessor-card"
  >
    <div
      class="col-10"
      style="display: inline-flex; background-color: #19181f"
    >
      <img
        style="width: 25px; height: 25px; border-radius: 50%"
        src="@/assets/images/flag-of-Australia.png"
        alt=""
      />
      <p class="pl-5" style="background-color: #19181f">
        {{ assessor.firstName }} {{ assessor.lastName }}
      </p>
    </div>
    <div
      class="col-2"
      style="background-color: #19181f;"
      align="right"
    >
      <router-link class="last-button pt-1" :to="'/admin/resources/' + assessor._id">Edit</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AssessorCard',
  props: {
      assessor: {
          type: Object,
          default: () => {
              return {}
          }
      }
  }
}
</script>

<style scoped>
.row {
    padding: 0;
    margin: 0;
}
.assessor-card {
    border: 1px solid #cccccc33;
    border-radius: 5px;
    background-color: #19181f;
}
.last-button {
  color: #fff;
  font-size: 12px;
}
.last-button:hover {
  color: #999;
}
p {
    margin-bottom: 0;
}
</style>