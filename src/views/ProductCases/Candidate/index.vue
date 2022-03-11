<template>
  <div id="container" style="text-align: left; color: white">
    <h2 class="mt-2" align="center" style="color: white">Product Cases</h2>
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
          v-for="(productCase, index) in productCases"
          :key="index"
        >
          <product-case-card :productCase="productCase" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCaseCard from '@/components/ProductCases/index.vue'

export default {
  name: 'ProductCasesCandidate',
  components: {
    ProductCaseCard
  },
  data() {
    return {
      productCases: []
    }
  },
  created() {
      this.$store.dispatch('getProductCases')
        .then(
            (response) => {
                this.productCases = response.data.data
            }
        )
  }
}
</script>
<style scoped>
.right-align {
  display: block;
    width: 100%;
    text-align: right;
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