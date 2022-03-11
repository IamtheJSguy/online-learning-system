<template>
  <div id="container" style="text-align: left; color: white">
    <h2 class="mt-2" align="center" style="color: white">Courses</h2>
    <div
      class="main px-5"
      style="width: 100%; text-align: left"
    >
      <div class="right-align">
        <!-- <p style="margin-top: 10px">We found 6 Leveltest available for you</p> -->
        <select class="selection" aria-label="Default select example">
          <option selected>Sort by:Active</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="row mt-2">
        <div
          class="col-lg-4 col-md-6 col-sm-12"
          v-for="(course, index) in courses"
          :key="index"
        >
          <product-case-card />
        </div>
      </div>
      <div style="text-align: -webkit-right;">
          <router-link class="add-button" to="/admin/courses/add">Add Course</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCaseCard from '@/components/ProductCases/Courses/card.vue'

export default {
  name: 'LevelTest-Courses',
  components: {
    ProductCaseCard
  },
  data() {
    return {
      courses: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
        {
          id: 4
        },
        {
          id: 5
        },
        {
          id: 6
        },
      ]
    }
  }
}
</script>
<style scoped>
.right-align {
    text-align: -webkit-right;
}
.selection {
  width: 200px;
  font-size: 14px;
  border: 1px solid #cccccc33;
  border-radius: 5px;
  background-color: #19181F;
  /* float: right; */
  padding: 10px;
  text-align: center;
  color: white;
  margin-left: 40%;
}
.card-course:hover .card-course p {
    color: #FF1545;
}
.card-course:hover .card-course label {
    color: #FF1545;
}
.add-button {
    background-color: red;
    color: #fff;
    font-weight: 500;
    font-size: 14px;
    border: none;
    border-radius: 5px;
    outline: none;
    padding: 5px 20px;
}
</style>