<template>
  <div id="container" style="text-align: left; color: white; font-size: 12px">
    <form @submit="createCourse">
    <div class="row p-5">
      <div class="col-lg-8 col-md-12 col-sm-12">
        <div class="add-image-card">
          <img
            src="@/assets/images/leveltest-card-image.png"
            style="height: 100%"
            alt=""
          />
          <div class="px-3" style="margin-top: 40px">
            <p class="" style="background-color: #19181f">
              <span><button type="button" class="test-item mr-2">+</button></span>
              Choose an image from the library
            </p>
          </div>
        </div>
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
              <li class="nav-item pill-3">
                <a class="nav-link" data-toggle="tab" href="#tab3">Assessor</a>
              </li>
              <li class="nav-item pill-4">
                <a class="nav-link" data-toggle="tab" href="#tab4">Reviews</a>
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
                <div>
                  <input required
                    type="text"
                    v-model="overview.title"
                    placeholder="Add Course title"
                    style="background-color: #3F3C49;"
                  />
                  <select name="leveltest" id="select-leveltest" v-model="overview.leveltest">
                    <option value="" disabled selected>Insert Leveltest</option>
                    <option
                      v-for="(lt, index) in leveltests"
                      :key="index"
                      :value="lt._id"
                    >
                      {{ lt.name || "Leveltest .." }}
                    </option>
                  </select>
                  <textarea
                    class="introduction"
                    style="background-color: #19181f"
                    id="exampleFormControlTextarea1"
                    placeholder="Type a short introduction…………….."
                    rows="5"
                    v-model="overview.description"
                  ></textarea>
                </div>
                <h5
                  style="
                    background-color: #1c1a25;
                    margin-top: 10px;
                    text-align: left;
                  "
                  for=""
                >
                  Key Take aways
                </h5>
                <div
                  v-for="(keyTakeAway, index) in overview.keyTakeAways"
                  :key="index"
                  style="display: flex"
                  class="key-take-aways mt-1"
                >
                  <input required
                    type="text"
                    v-model="overview.keyTakeAways[index]"
                    placeholder="Add a key take away"
                  />
                  <button type="button"
                    class="remove-part-button"
                    @click="removeTakeAway(index)"
                  >
                    -
                  </button>
                </div>
                <div align="left">
                  <button type="button"
                    class="px-0 mt-2"
                    style="
                      width: 100px;
                      color: #fff;
                      background: none;
                      outline: none;
                      border: none;
                    "
                    @click="addTakeAway(index)"
                  >
                    + Key Takeaway
                  </button>
                </div>
              </div>
              <div
                class="tab-pane mytab pt-5"
                style="border: 0px"
                id="tab2"
                role="tabpanel"
              >
                <div v-for="(part, index) in overview.parts" :key="index">
                  <div class="part-container part-input">
                    <input required
                      type="number"
                      style="width: 10%"
                      placeholder="Sr. No"
                      v-model="overview.parts[index].index"
                    />
                    <input required
                      type="text"
                      style="width: 85%"
                      placeholder="Add Part title"
                      v-model="overview.parts[index].title"
                    />
                    <button type="button"
                      class="remove-part-button"
                      @click="removePart(index)"
                    >
                      -
                    </button>
                  </div>
                  <div
                    v-for="(subPart, subIndex) in part.subParts"
                    :key="subIndex"
                    class="part-container m-1"
                  >
                    <div class="test-item m-1" style="width: 10%; margin: 0">
                      {{ part.index + "." + (subIndex + 1) }}
                    </div>
                    <input required
                      type="text"
                      style="width: 85%"
                      placeholder="Add Sub Part"
                      v-model="overview.parts[index].subParts[subIndex]"
                    />
                    <button type="button"
                      class="remove-part-button"
                      @click="removeSubPart(index, subIndex)"
                    >
                      -
                    </button>
                  </div>
                  <div class="my-1" align="left">
                    <button type="button"
                      class="px-0"
                      style="
                        width: 70px;
                        color: #fff;
                        background: none;
                        outline: none;
                        border: none;
                      "
                      @click="addSubPart(index)"
                    >
                      + Sub Part
                    </button>
                  </div>
                </div>
                <div align="left">
                  <button type="button"
                    class="level-button px-0"
                    style="width: 70px; color: #fff"
                    @click="addPart"
                  >
                    + Part
                  </button>
                </div>
              </div>
              <div
                class="tab-pane mytab"
                style="border: 0px"
                id="tab3"
                role="tabpanel"
              >
                <div>
                  <h3>Add Assessors in the course</h3>
                  <div class="p-2 row" style="border: 1px solid #cccccc33; background-color: #19181F;">
                    <div
                      class="col-lg-6 col-md-12 col-sm-12"
                      v-for="assessor in selectedAssessors"
                      :key="assessor.email"
                    >
                      <assessors-card :assessor="assessor" />
                    </div>
                  </div>
                  <b-form-select
                    v-model="selectAssessor"
                    @change="onSelectingAnAssessor"
                    @select="onSelectingAnAssessor"
                    class="select-assessor"
                  >
                    <b-form-select-option
                      v-for="assessor in assessors"
                      :key="assessor._id"
                      :value="assessor"
                      style="background-color: #19181F;"
                    >
                      <div class="fx-con" style="background-color: #19181F; width: 100%;">
                        <img src="@/assets/images/1.png" height="20px" alt="">
                        <p>{{ assessor.firstName }} {{ assessor.lastName }}</p>
                      </div>
                    </b-form-select-option>
                  </b-form-select>
                </div>
              </div>
              <div
                class="tab-pane mytab"
                style="border: 0px"
                id="tab4"
                role="tabpanel"
              >
                <div class="mytab">
                  <a
                    style="color: white; font-size: 12px; margin-right: 8px"
                    href="#"
                    ><fa-icon :icon="['fas', 'plus-circle']" /></a
                  >File
                </div>
                <div class="mytab1">+File</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="col-lg-4 col-md-12 col-sm-12 basic-info-container"
        style="background-color: #19181f"
      >
        <div
          class="row mt-3 basic-info"
          style="
            font-size: 14px;
            display: flex;
            border-bottom: 1px solid #333333;
          "
        >
          <p style="width: 20%;">
            <span class="mr-2">
              <img
                src="@/assets/images/Layer 17.png"
                style="width: 15px"
                alt=""
              />
            </span>
            Price
          </p>
          <input required type="text" placeholder="$49.99" style="color: red" v-model="overview.price" />
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
          <p style="color: #cccccc;">POPM Global</p>
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
          <p style="width: 30%;">
            <span class="mr-2">
              <img
                src="@/assets/images/Layer 12.png"
                style="width: 10px"
                alt=""
              />
            </span>
            Duration
          </p>
          <input required type="text" placeholder="1 day" style="color: #cccccc; width: 70%;" v-model="overview.duration" />
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
          <p style="width: 40%;">
            <span class="mr-2">
              <img
                src="@/assets/images/Layer 16.png"
                style="width: 20px"
                alt=""
              />
            </span>
            Language
          </p>
          <input required type="text" placeholder="English.. " style="color: #cccccc; width: 60%;" v-model="overview.language"/>
        </div>
        <div
          class="row mt-2"
          style="font-size: 14px; display: flex; justify-content: space-between"
        >
          <p style="width: 30%;">
            <span class="mr-2">
              <img
                src="@/assets/images/Layer 13.png"
                style="width: 12px;"
                alt=""
              />
            </span>
            Deadline
          </p>
          <input required type="text" placeholder="October 1, 2021" style="color: #cccccc; width: 70%;" v-model="overview.deadline" />
        </div>
      </div>
    </div>
    <div style="text-align: -webkit-right">
        <button type="submit" class="level-button mr-5" style="color: #fff;">Add Course</button>
    </div>
    </form>
  </div>
</template>

<script>
import AssessorsCard from '@/components/Assessors/Card.vue'
export default {
  name: 'CertifiedLevelTest',
  components: {
    AssessorsCard
  },
  data() {
    return {
      index: 0,
      overview: {
        title: '',
        description: '',
        keyTakeAways: [''],
        parts: [
          {
            index: 0,
            title: '',
            subParts: ['']
          }
        ],
        leveltest: '',
        price: '',
        duration: '',
        language: '',
        deadline: '',
        assessors: []
      },
      leveltests: [],
      assessors: [],
      selectAssessor: {},
      selectedAssessors: []
    }
  },
  created() {
    this.$store.dispatch('getLevelTests')
      .then(
        (response) => {
          const res = response.data.data
          this.leveltests = res
        }
      )
    this.$store.dispatch('getAssessors')
      .then(
        (response) => {
          this.assessors = response.data.data
        }
      )
  },
  methods: {
    addTakeAway() {
      this.overview.keyTakeAways.push('')
    },
    removeTakeAway(key) {
      this.overview.keyTakeAways = this.overview.keyTakeAways.filter((takeaway, index) => index !== key)
    },
    addPart() {
      this.overview.parts.push({
        index: 0,
        title: '',
        subParts: ['']
      })
    },
    removePart(index) {
      this.overview.parts = this.overview.parts.filter((part, key) => key !== index)
    },
    addSubPart(index) {
      this.overview.parts[index].subParts.push('')
    },
    removeSubPart(index, subIndex) {
      this.overview.parts[index].subParts = this.overview.parts[index].subParts.filter((subPart, key) => key !== subIndex)
    },
    createCourse(e) {
        e.preventDefault()
        this.$store.dispatch('createCourse', this.overview)
            .then(
                (response) => {
                    if (response) {
                        this.$router.push('/admin/courses')
                    }
                }
            )
            .catch(
                (error) => {
                    console.log(error.response.data)
                }
            )
    },
    onSelectingAnAssessor(doc) {
      this.overview.assessors.push(doc._id)
      this.selectedAssessors.push(doc)
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
  width: 200px;
  padding: 10px;
  background:red;
  border:none;
  border-radius: 5px;
  font-weight: 700;
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
    border: 1px solid #cccccc33;
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
    border: 1px solid #cccccc33;
    outline: none;
    font-size: 14px;
    color: #cccccc;
    margin-top: 5px;
    padding: 10px;
}
.part-container {
    display: flex;
    border: none;
    border: 1px solid #cccccc33;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}
.part-input {
  background-color: #3F3C49;
}
.part-input input {
  background: transparent !important;
  color: #fff;
  font-size: 14px;
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
    height: 40px;
    border: none;
    border-left: 1px solid #cccccc33;
    outline: none;
    color: #cccccc;
    padding-left: 10px;
}
.key-take-aways input {
    background-color: #19181F;
    border: 1px solid #cccccc33;
    height: 40px;
    /* border-right: 1px solid #333333; */
    outline: none;
    color: #cccccc;
    width: 100%;
    padding-left: 10px;
}
input {
    background-color: #19181F;
    border: 1px solid #cccccc33;
    height: 40px;
    border-bottom: 1px solid #333333;
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
.fx-con {
  display: flex;
}
.fx-wrap {
  flex-wrap: wrap;
}
.select-assessor {
  background-color: #19181F;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #cccccc33;
  outline: none;
  color: #cccccc99;
  margin-top: 10px;
}
option {
  height: 40px;
}
</style>