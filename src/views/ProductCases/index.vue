<template>
  <div id="container" class="p-5">
    <div
      class="main"
      style="width: 100%; text-align: left"
    >
      <h2 style="color: white">Overview Product Course</h2>
      <select class="selection" aria-label="Default select example">
        <option selected>Sort by: Active</option>
        <option value="1">Active</option>
        <option value="2">In active</option>
      </select>
      <product-case-overview
        v-for="(productCase, index) in productCases"
        :key="productCase.id"
        :productCase="productCase"
        :index="index"
      />
    </div>
    <div class="button-container mt-5">
      <button class="level-button" @click="createProductCase">
        Add new Product Course
      </button>
    </div>
  </div>
</template>
<script>
import ProductCaseOverview from '@/components/ProductCases/Overview.vue'
export default {
  name: "OverView",
  components: {
    ProductCaseOverview
  },
  data() {
    return {
      productCases: [
        {
          id: '1',
          name: 'Product Course A',
          status: 'Active'
        },
        {
          id: '2',
          name: 'Product Course B',
          status: 'In-active'
        },
        {
          id: '3',
          name: 'Product Course C',
          status: 'Active'
        },
        {
          id: '4',
          name: 'Product Course D',
          status: 'In-active'
        },
        {
          id: '5',
          name: 'Product Course E',
          status: 'Active'
        }
      ]
    }
  },
  created() {
    this.$store.dispatch('getProductCases')
      .then(
        (response) => {
          this.productCases = response.data.data
        }
      )
  },
  methods: {
    createProductCase() {
      this.$router.push('/productcases/add')
    }
  }
};
</script>

<style>
.selection {
  width: 200px;
  font-size: 14px;
  border: 1px solid #cccccc33;
  border-radius: 5px;
  background-color: #19181F;
  padding: 10px;
  text-align: center;
  color: white;
}
.level-button{
  width: 200px;
  padding: 10px;
  background:#D6000E;
  border:none;
  border-radius: 5px;
  color: #fff;
}
.button-container {
  text-align: -webkit-right;
}
</style>
