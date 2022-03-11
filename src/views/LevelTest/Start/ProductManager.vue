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
          <p style="margin-top: 10px; color: #cccccc">
            neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt, ut labore et dolore magnam aliquam quaerat voluptatem.
            Lorem ipsum is een deel van dolorem ipsum
          </p>
          <h5 class="ml-4 w-50" style="margin-top: 29px">
            Indicators (check your experience)
          </h5>
          <b-form-checkbox class="check-box-color"
            >neque porro quisquam est, qui dolorem ipsum, quia dolor sit,</b-form-checkbox>
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
          <div style="position: relative; margin: 0">
            <div
              style="
                min-height: 10px;
                background-color: #D6000E;
                border-radius: 5px;
                margin: 0 20px 0 10px;
                position: absolute;
                top: 15px;
                width: 98%;
              "
            ></div>
            <div
              style="
                display: flex;
                justify-content: space-around;
                position: absolute;
                width: 100%;
              "
            >
              <button
                style="
                  margin: 0 10px;
                  border-radius: 50%;
                  height: 40px;
                  width: 40px;
                  border: none;
                  background-color: #D6000E;
                  color: white;
                "
              >
                1
              </button>
              <button
                style="
                  margin: 0 10px;
                  border-radius: 50%;
                  height: 40px;
                  width: 40px;
                  border: none;
                  background-color: #D6000E;
                  color: white;
                "
              >
                2
              </button>
              <button
                style="
                  margin: 0 10px;
                  border-radius: 50%;
                  height: 40px;
                  width: 40px;
                  border: none;
                  background-color: #D6000E;
                  color: white;
                "
              >
                3
              </button>
              <button
                style="
                  margin: 0 10px;
                  border-radius: 50%;
                  height: 40px;
                  width: 40px;
                  border: none;
                  background-color: #D6000E;
                  color: white;
                "
              >
                4
              </button>
              <button
                style="
                  margin: 0 10px;
                  border-radius: 50%;
                  height: 40px;
                  width: 40px;
                  border: none;
                  background-color: #D6000E;
                  color: white;
                "
              >
                5
              </button>
              <button
                style="
                  margin: 0 10px;
                  border-radius: 50%;
                  height: 40px;
                  width: 40px;
                  background-color: white;
                  color: #D6000E;
                  border: 1px solid #D6000E;
                "
              >
                6
              </button>
              <button
                style="
                  margin: 0 10px;
                  border-radius: 50%;
                  height: 40px;
                  width: 40px;
                  background-color: white;
                  color: #D6000E;
                  border: 1px solid #D6000E;
                "
              >
                7
              </button>
              <button
                style="
                  margin: 0 10px;
                  border-radius: 50%;
                  height: 40px;
                  width: 40px;
                  background-color: white;
                  color: #D6000E;
                  border: 1px solid #D6000E;
                "
              >
                8
              </button>
              <button
                style="
                  margin: 0 10px;
                  border-radius: 50%;
                  height: 40px;
                  width: 40px;
                  background-color: white;
                  color: #D6000E;
                  border: 1px solid #D6000E;
                "
              >
                9
              </button>
              <button
                style="
                  margin: 0 10px;
                  border-radius: 50%;
                  height: 40px;
                  width: 40px;
                  background-color: white;
                  color: #D6000E;
                  border: 1px solid #D6000E;
                "
              >
                10
              </button>
            </div>
        </div>
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
              background-color: #3f3c43;
            "
          />
          <button
            style="
              width: 115px;
              border: 1px solid #cccccc99;
              margin-left: 10px;
              height: 30px;
            "
          >
            Upload</button
          ><br />
          <div>
            <button class="review-button mt-3">Review assessor</button>
            <button class="review-button float-right mt-3">Save your answer</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "start",
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
  background-color: #3f3c43;
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
