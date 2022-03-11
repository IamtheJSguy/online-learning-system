<template>
  <div class="card-course">
    <img
      src="@/assets/images/leveltest-card-image.png"
      style="width: 100%;"
      alt=""
    />
    <div class="row card-course">
        <router-link style="color: #ff1545; margin-left: 5px" to="/productcases/instructorselection" >Open</router-link>
      <!-- <a  href="#">Open</a> -->

      <div
        class="progress"
        style="width: 80%; height: 5px; margin-top: 10px; margin-left: 10px"
      >
        <div class="progress-bar bg-success" style="width: 20%"></div>
      </div>
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
        >10 competences</label
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