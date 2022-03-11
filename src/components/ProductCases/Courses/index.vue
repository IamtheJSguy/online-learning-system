<template>
  <div class="card-course">
    <img
      src="@/assets/images/leveltest-card-image.png"
      style="width: 100%;"
      alt=""
    />
    <div class="row card-course">
      <router-link style="color: #ff1545; margin-left: 5px" to="/productcases/buycourses">€75.00</router-link>
      <!-- <a style="color: #ff1545; margin-left: 5px" href="#">€75.00</a> -->

      
      <p style="font-size: 13px; margin-left: 10px">
        A1. Placeholder for name product case 2021
      </p>
      <b-icon
        icon="file-earmark-richtext-fill"
        style="background: none"
        variant="success"
      >
      </b-icon>
      <label style="font-size: 13px; margin-left: 5px" for=""
        >7 Lessons</label
      >
      <b-icon
        icon="person-fill"
        style="background: none; margin-left: 10px"
        variant="success"
      >
      </b-icon>
      <label style="font-size: 13px; margin-left: 5px" for=""
        >303 Students</label
      >
    </div>
  </div>
</template>

<script>
export default {
    name: 'ProductCaseCard'
}
</script>

<style scoped>
.card-course:hover .card-course p {
    color: #FF1545;
}
.card-course:hover .card-course label {
    color: #FF1545;
}
</style>