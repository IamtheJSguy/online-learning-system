<template>
  <div id="container" style="color: white; text-align: left; padding: 30px">
    <h2>My Leveltest</h2>
    <div class="row mt-4">
      <div class="col-lg-4 col-md-12 col-sm-12 sm-cards-background mt-2">
        <div class="claimed-level px-2">
          <b-icon
            icon="star"
            style="width: 28px; height: 28px"
            variant="success"
          >
          </b-icon>
          <p style="font-size: 13px; padding-top: 6px; padding-left: 10px">
            New Product Cases
          </p>
          <p style="font-size: 13px; padding-top: 6px; padding-left: 70px">
            5/10
          </p>
        </div>
        <assessor-product-case-card
            v-for="productCase in newProductCases"
            :key="productCase._id"
            :productCase="productCase"
            @claimedProductCase="getProductCases"
        />
        <!--  -->
      </div>
      <div class="col-lg-4 col-md-9 sm-cards-background mt-2">
        <div class="claimed-level px-2">
          <b-icon
            icon="star"
            style="width: 28px; height: 28px"
            variant="success"
          >
          </b-icon>
          <p style="font-size: 13px; padding-top: 6px; padding-left: 10px">
            Review Product Cases
          </p>
          <p style="font-size: 13px; padding-top: 6px; padding-left: 70px">
            5/10
          </p>
        </div>
        <assessor-product-case-card
            v-for="productCase in reviewProductCases"
            :key="productCase._id"
            :productCase="productCase"
            @claimedProductCase="getProductCases"
        />
        <!--  -->
      </div>
      <div class="col-lg-4 col-md-9 sm-cards-background mt-2">
        <div class="claimed-level px-2">
          <b-icon
            icon="star"
            style="width: 28px; height: 28px"
            variant="success"
          >
          </b-icon>
          <p style="font-size: 13px; padding-top: 6px; padding-left: 10px">
            Done Product Case
          </p>
          <p style="font-size: 13px; padding-top: 6px; padding-left: 70px">
            5/10
          </p>
        </div>
        <assessor-product-case-card
            v-for="productCase in doneProductCases"
            :key="productCase._id"
            :productCase="productCase"
            @claimedProductCase="getProductCases"
        />
        <!--  -->
      </div>
    </div>
  </div>
</template>

<script>
import AssessorProductCaseCard from '@/components/ProductCases/AssessorCard.vue'
export default {
  name: 'ClaimProductCase',
  components: {
      AssessorProductCaseCard
  },
  data() {
      return {
          newProductCases: [],
          reviewProductCases: [],
          doneProductCases: []
      }
  },
  created() {
      this.getProductCases()
  },
  methods: {
      getProductCases() {
          this.$store.dispatch('candidateProductCasesByAssessors')
            .then(
                (response) => {
                    this.newProductCases = response.data.data.newProductCases
                    this.reviewProductCases = response.data.data.reviewProductCases
                    this.doneProductCases = response.data.data.doneProductCases
                }
            )
      }
  }
}
</script>

<style>
.claimed-level{
    background: #D6000E80;
    padding-top:12px;
    width: 100%;
    border-radius: 5px;
    display: inline-flex;

}
.sm-cards-background{
    background-color: #29272F;
    border-radius: 5px;
    padding: 15px;
    height: 620px;
}
.inner-card{
    background-color: #3F3C49;
    border-radius: 5px;
    margin-left: 7px;
    height: 105px;
    width: 97%;
    padding:10px;
}
.inner-card-button{
    background: none;
    border:1px solid #CCCCCC33;
    font-size:13px;
    width: 60px;
    border-radius: 50px;
    color: white;
    margin-left: 8px;
}
.inner-card-button-active{
    color: #09D175;
}
</style>