 <template>
  <div id="container " style="text-align: left" class="p-5">
    <h3 style="color: #fff">
      Welcome at your Instructor Dashboard
    </h3>
    <div class="row mt-5" style="text-align: left;">
      <div class="col-8">
        <div class="btn-group">
          <button
            type="button"
            style="
              text-align: left;
              background-color: #1c1a25;
              outline: none;
              border: none;
            "
            class="btn btn-secondary dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Introduction place holder
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <button class="dropdown-item" type="button">Action</button>
            <button class="dropdown-item" type="button">Another action</button>
            <button class="dropdown-item" type="button">
              Something else here
            </button>
          </div>
        </div>
      </div>
      <div class="col-4" align="right">
        <a style="color: red" href="#">
            See all my tasks
        </a>
      </div>
    </div>
    <div>
        <board-product-case-card
            v-for="(productCase, index) in productCases"
            :key="index"
            :data="productCase"
        />
    </div>
      <div class="btn-group mt-5" style="width: 100%;">
        <button
          type="button"
          style="
            text-align: left;
            background-color: #1c1a25;
            outline: none;
            border: none;
            border-bottom: 1px solid gray;
          "
          class="btn btn-secondary dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Where would you start?
        </button>
        <div class="dropdown-menu dropdown-menu-right">
          <button class="dropdown-item" type="button">Action</button>
          <button class="dropdown-item" type="button">Another action</button>
          <button class="dropdown-item" type="button">
            Something else here
          </button>
        </div>
    </div>

    <div class="fx-con jus-c mt-5">
        <div class="link-card" style="background-color: red;" align="center">
          <img
            src="@/assets/images/up-down-arrow.png"
            style="width: 65px"
            alt=""
          />
        </div>
        <div class="link-card" style="background-color: #cccccc;" align="center">
          <img src="@/assets/images/mountain.png" style="width: 65px" alt="" />
        </div>
        <div class="link-card" style="background-color: #19181f; border: 1px solid #cccccc33" align="center">
          <img src="@/assets/images/arrow.png" style="width: 65px" alt="" />
        </div>
    </div>
  </div>
</template> 

<script>
import BoardProductCaseCard from '@/components/ProductCases/DashboardCard.vue'
export default {
  name: 'CoachDashboard',
  components: {
      BoardProductCaseCard
  },
  data() {
      return {
          productCases: []
      }
  },
  created() {
      this.$store.dispatch('candidateProductCasesByAssessor')
        .then(
            (response) => {
                this.productCases = response.data.data
            }
        )
  }
}
</script>
<style >
.test-item {
  border: 1px solid red;
  padding: 2px;
  width: 70px;
  height:25px;
  font-size: 12px;
  text-align: center;
  border-radius: 20px;
  background-color: red;
}
.link-card {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    width: 180px;
    border-radius: 15px;
    margin: 10px;
}
.fx-con {
    display: flex;
}
.jus-c {
    justify-content: center;
}
</style>