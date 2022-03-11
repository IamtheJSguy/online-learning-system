<template>
  <div id="container" style="text-align: left; color: white; font-size: 12px">
    <!-- <h4 align="center">{{ productCase.title }}</h4> -->
    <div class="row p-5">
      <div class="col-lg-7 col-md-12 col-sm-12">
        <img src="@/assets/images/Layer 11.png" style="width: 100%" alt="" />
        <div class="mt-2">
          <div style="" class="task">
            <ul
              class="nav nav-pills"
              style="border-bottom: 1px solid white; height: 29px"
            >
              <li class="nav-item pill-1">
                <a class="nav-link active" data-toggle="tab" href="#tab1"
                  >Overview
                </a>
              </li>
              <li class="nav-item pill-2">
                <a class="nav-link" data-toggle="tab" href="#tab2"
                  >Curriculum
                </a>
              </li>
            </ul>

            <div class="tab-content">
              <div
                class="tab-pane show mytab active"
                style="border: 0px"
                id="tab1"
                role="tabpanel"
              >
                <!-- <div class="mytab">
                  <a
                    style="color: white; font-size: 12px; margin-right: 8px"
                    href="#"
                    ><fa-icon :icon="['fas', 'plus-circle']"
                  /></a>
                </div> -->
                <div style="text-align: left">
                  <h5>{{ productCase.title }}</h5>
                  <p>{{ productCase.description }}</p>
                </div>
                <h5
                  style="
                    background-color: #1c1a25;
                    margin-top: 10px;
                    text-align: left;
                  "
                >
                  Key Take aways
                </h5>
                <ul>
                  <li
                    v-for="keyTakeAway in productCase.keyTakeAways"
                    :key="keyTakeAway"
                    style="text-align: left"
                  >
                    {{ keyTakeAway }}
                  </li>
                </ul>
              </div>
              <div
                class="tab-pane mytab pt-5"
                style="border: 0px"
                id="tab2"
                role="tabpanel"
              >
                <div
                  v-for="(part, index) in productCase.parts"
                  :key="index"
                  style="text-align: left"
                >
                  <div class="">
                    <p>
                      <span class="text-label">{{ index + 1 }}</span
                      >{{ part.title }}
                    </p>
                  </div>
                  <ul>
                    <li
                      v-for="(subPart, subIndex) in part.subParts"
                      :key="subPart"
                    >
                      <p>
                        <span class="text-label">{{
                          index + 1 + "." + (subIndex + 1)
                        }}</span
                        >{{ subPart.title || 'Sub Part Title for ' + (index + 1) + '.' + ( subIndex + 1 ) }}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-1 col-md-0 col-sm-0"></div>

      <div class="col-lg-4 col-md-12 col-sm-12 basic-info-container">
        <div style="background-color: #19181f" class="px-2 py-1 w-100">
          <div
            class="row mt-3 basic-info"
            style="
            font-size: 14px;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #333333;
          "
          >
            <p style="width: 30%">
              <span class="mr-2">
                <img
                  src="@/assets/images/Layer 17.png"
                  style="width: 15px"
                  alt=""
                />
              </span>
              Price
            </p>
            <p style="color: red">
              {{ productCase.price === "Free" ? "Free" : "$" + productCase.price }}
            </p>
          </div>

          <div
            class="row mt-2"
            style="
              font-size: 14px;
              display: flex;
              justify-content: space-between;
              border-bottom: 1px solid #333333;
            "
          >
            <p>
              <span class="mr-2">
                <img
                  src="@/assets/images/Layer 14.png"
                  style="width: 12px"
                  alt=""
                />
              </span>
              Assessor
            </p>
            <p style="color: #cccccc">POPM Global</p>
          </div>

          <div
            class="row mt-2"
            style="
              font-size: 14px;
              display: flex;
              justify-content: space-between;
              border-bottom: 1px solid #333333;
            "
          >
            <p style="width: 30%">
              <span class="mr-2">
                <img
                  src="@/assets/images/Layer 12.png"
                  style="width: 10px"
                  alt=""
                />
              </span>
              Duration
            </p>
            <p style="color: #cccccc">{{ productCase.duration }}</p>
          </div>
          <div
            class="row mt-2"
            style="
              font-size: 14px;
              display: flex;
              justify-content: space-between;
              border-bottom: 1px solid #333333;
            "
          >
            <p style="width: 40%">
              <span class="mr-2">
                <img
                  src="@/assets/images/Layer 16.png"
                  style="width: 20px"
                  alt=""
                />
              </span>
              Language
            </p>
            <p style="color: #cccccc">{{ productCase.language[0] }}</p>
          </div>
          <div
            class="row mt-2"
            style="
              font-size: 14px;
              display: flex;
              justify-content: space-between;
            "
          >
            <p style="width: 30%">
              <span class="mr-2">
                <img
                  src="@/assets/images/Layer 13.png"
                  style="width: 12px"
                  alt=""
                />
              </span>
              Deadline
            </p>
            <p style="color: #cccccc">{{ productCase.deadline }}</p>
          </div>
          <button class="level-button mt-2" @click="buyproductCase">Buy this Product Case</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BuyProductCase',
  data() {
    return {
      productCase: {}
    }
  },
  created() {
    this.$store.dispatch('getProductCase', this.$route.params.id)
      .then(
        (response) => {
          const res = response.data.data
          this.productCase = res
        }
      )
  },
  methods: {
    buyproductCase() {
      this.$store.dispatch('buyProductCase', this.$route.params.id)
        .then(
          (response) => {
            console.log(response.data.message)
            this.$router.push('/productcases/my');
          }
        )
        .catch(
          (error) => {
            console.log(error.response.data)
          }
        )
    }
  },
}
</script>

<style scoped>

.test-item {
  border: 1px solid red;
  padding: 1px;
  width: 50px !important;
  height:20px;
  font-weight: 700;
  font-size: 12px;
  text-align: center;
  border-radius: 20px;
  background-color: red;
  color: #fff;
}
.take-aways{
border: 2px solid #cccccc33;font-size: 16px; padding:12px;border-radius: 5px; height: 70px; flex-wrap: wrap; display:inline-flex; background-color:#3F3C49;
}

</style>
<style scoped>
.nav-pills .pill-1 .nav-link {
  background-color: #1c1a25;
  color: white;
  
  border-radius: 0px;
  font-size: 12px;
  padding: 5px 11px 5px 11px;
}

.nav-pills .pill-2 .nav-link {
  background-color: #1c1a25;
  color: white;

  border-radius: 0px;
  font-size: 12px;
  padding: 5px 12px 5px 12px;
}

.nav-pills .pill-3 .nav-link {
  background-color: #1c1a25;
  color: white;
  
  border-radius: 0px;
  font-size: 12px;
  padding: 5px 11px 5px 11px;
}
.nav-pills .pill-4 .nav-link {
  background-color: #1c1a25;
  color: white;

  border-radius: 0px;
  font-size: 12px;
  padding: 5px 12px 5px 12px;
}
.active {

  border-bottom: 1px solid red;
  
}
.mytab {
  background-color: #1c1a25;
  color: white;
  width: auto;
  text-align: center;

  padding: 2px 0px;
  font-size: 10px;
}
.mytab1 {
  background-color: #1c1a25;
  color: white;
  width: auto;
  text-align: center;
  border-bottom: 0px;
}
.panehead {
  margin: 10px 0px 10px 20px;
  text-align: left;
}
.pane {
  margin: 0px 0px 0px 20px;
  text-align: left;
  color: red;
}
.pane1 {
  margin: 0px 0px 0px 35px;
  text-align: left;
  font-size: 8px;
}
.panefoot {
  margin: 0px;
  text-align: left;
  margin: 7px 0px 0px 35px;
  font-size: 8px;
}
.my {
  height: 30px;
  margin: 0px;
  padding-top: 0px;
  vertical-align: center;
  border-radius: 0px;
  background: #1c1a25;
  border-color: #555;
  font-size: 12px;
}
.my1 {
  margin: 0px;
  padding: 0px;
  font-size: 12px;
  border-radius: 0px;
  background: #1c1a25;
  border-color: #555;
}
.level-button{
  width: 100%;
  padding: 10px;
  background:red;
  border:none;
  border-radius: 5px;
  font-weight: 700;
  color: white;
}
.add-image-card {
    border: 1px solid #cccccc33;
    height: 100px;
    border-radius: 5px;
    display: inline-flex;
    background-color: #19181f;
    width: 100%;
}
#select-leveltest {
    width: 100%;
    margin-top: 5px;
    background: none;
    border: none;
    border-bottom: 1px solid #55555599;
    outline: none;
    color: #cccccc;
    height: 40px;
    font-size: 14px;
    background-color: #19181F;
}
option {
    height: 40px;
    font-size: 16px;
    font-weight: 500;
    font-style: italic;
}
.introduction {
    width: 100%;
    border: none;
    border-bottom: 1px solid #55555599;
    outline: none;
    color: #cccccc;
    margin-top: 5px;
}
.part-container {
    display: flex;
    border: none;
    border-bottom: 1px solid #55555599;
}
.remove-part-button {
    background-color: red;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    font-size: 18px;
    font-weight: 700;
    outline: none;
    border: none;
    width: 5%;
    color: #fff;
}
.part-container input {
    background-color: #19181F;
    border: none;
    height: 40px;
    border-right: 1px solid #333333;
    outline: none;
    color: #cccccc;
    padding-left: 10px;
}
.key-take-aways input {
    background-color: #19181F;
    border: none;
    height: 40px;
    border-right: 1px solid #333333;
    outline: none;
    color: #cccccc;
    width: 100%;
    padding-left: 10px;
}
.basic-info-container p {
    font-size: 12px;
    color: #555555;
}
.basic-info-container input {
    text-align: right;
    width: 80%;
    height: 30px;
    margin: 0;
    border: none;
    margin: 0;
    height: 30px;
}
.text-label {
  background-color: red;
  border-radius: 10px;
  margin-right: 10px;
  padding: 2px 10px;
}
</style>