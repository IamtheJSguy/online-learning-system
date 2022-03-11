<template>
    <div class="pl-5" style="text-align: left;">
      <h2 style="color: white">Level test: Product Manager 2021</h2>
      <div class="row">
        <label class="test-item ml-3 mt-4">A.1</label>
        <h5 class="ml-4" style="margin-top: 29px; color: white">
          This a test item name A
        </h5>
      </div>
      <div class="row">
        <div class="col-lg-10 col-md-12 col-sm-12">
          <input type="text" style="width:100%; height:60px; background-color:#19181F; border :1px solid #CCCCCC33;" placeholder="   Add the discription of the subcompetence here.">
          <h5 class="ml-4 w-50" style="margin-top: 29px">
            Indicators (check your experience)
          </h5>
          <b-form-checkbox class="check-box-color"
            >neque porro quisquam est, qui dolorem ipsum, quia dolor sit,
            amet</b-form-checkbox
          >
          <b-form-checkbox class="check-box-color"
            >neque porro quisquam est, qui dolorem ipsum, quia dolor sit,
            amet</b-form-checkbox
          >
          <b-form-checkbox class="check-box-color"
            >neque porro quisquam est, qui dolorem ipsum, quia dolor sit,
            amet</b-form-checkbox
          >
          <b-form-checkbox class="check-box-color"
            >neque porro quisquam est, qui dolorem ipsum, quia dolor sit,
            amet</b-form-checkbox
          >
          <h5 class="w-50" style="margin-top: 29px">Rate your experience</h5>
          <select-experience v-model="form.experience" />
          
        <div class="mt-5">
          <h5>Explain your answer</h5>
          <textarea
            class="text-explain"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea
          ><br />
          <input
            type="file"
            style="
              width: 50%;
              border: 1px solid #cccccc99;
              background-color: #19181F
            "
          />
          <button
            style="
              width: 115px;
              border: 1px solid #cccccc99;
              margin-left: 10px;
              height: 30px;
              background-color: #19181F;
            "
          >
            Upload</button
          ><br />
          <div>
            <button class="review-button mt-3">Review assessor</button>
            <button class="review-button float-right mt-3">Save</button>
            <button
              class="level-button mt-1 mr-3"
              @click="() => {
                $router.push('/admin/leveltest')
              }">
                Save Leveltest
              </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SelectExperience from '@/components/Candidates/RangeSelector/index.vue'
export default {
  name: "EditSub",
  components: {
    SelectExperience
  },
  data() {
    return {
      form: {
        experience: 0
      }
    }
  }
};
</script>

<style>
* {
  margin: 0;
}
.test-item {
  border: 1px solid red;
  padding: 5px;
  width: 70px;
  text-align: center;
  border-radius: 20px;
  background-color: red;
}
.check-box-color {
  color: #cccccc;
}
.text-explain {
  background-color: #19181F;
  height: 130px;
  border: 1px solid #cccccc99;
  border-radius: 5px;
  width: 100%;
}
.upload-button {
  width: 70%;
  border: 1px solid #cccccc99;
  background-color: #3f3c43;
}
.review-button {
  padding: 5px 10px;
  background-color: #D6000E;
  border-radius: 5px;
  color: #fff;
  outline: none;
  border: none;
}
p {
  color: #888;
}
h5 {
  color: #fff;
}
</style>

