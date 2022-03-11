<template>
  <div id="container">
    <div class="main ml-3" style="text-align: left">
      <h2 style="color: #fff" class="pt-3">Level test: Sub-competences</h2>
      <div class="row">
        <div class="col-lg-9 col-md-12 col-sm-12 p-1 ml-0">
          <div class="row overview-container py-3">
            <div class="col-3 pl-5" style="border-right: 1px solid #888;">
              <radial-progress-bar
                :diameter="100"
                :completed-steps="value"
                :total-steps="100"
                innerStrokeColor="white"
                startColor="green"
                stopColor="green"
                :innerStrokeWidth="5"
                :strokeWidth="5"
              >
                <p class="text-white">{{ value }}</p>
              </radial-progress-bar>
              <p style="margin-left: 25px">Overall</p>
            </div>
            <div
              class="col-9"
              style="display: flex; flex-wrap: wrap; justify-content: center"
            >
              <div class="row" style="justify-content: center;">
                <div class="col-2" align="center">
                  <radial-progress-bar
                    class="pt-4 pl-2"
                    :diameter="70"
                    :completed-steps="value"
                    :total-steps="100"
                    innerStrokeColor="white"
                    startColor="#D6000E"
                    stopColor="#D6000E"
                    :innerStrokeWidth="5"
                    :strokeWidth="5"
                  >
                    <p class="text-white" style="margin: 50px 0 0 20px">
                      {{ value }}
                    </p>
                  </radial-progress-bar>
                  <p class="mt-4 ml-2">Flexibility</p>
                </div>
                <div class="col-2" align="center">
                  <radial-progress-bar
                    class="pt-4 pl-2"
                    :diameter="70"
                    :completed-steps="value"
                    :total-steps="100"
                    innerStrokeColor="white"
                    startColor="#D6000E"
                    stopColor="#D6000E"
                    :innerStrokeWidth="5"
                    :strokeWidth="5"
                  >
                    <p class="text-white" style="margin: 50px 0 0 20px">
                      {{ value }}
                    </p>
                  </radial-progress-bar>
                  <p class="mt-4 ml-2">Features</p>
                </div>
                <div class="col-2" align="center">
                  <radial-progress-bar
                    class="pt-4 pl-2"
                    :diameter="70"
                    :completed-steps="value"
                    :total-steps="100"
                    innerStrokeColor="white"
                    startColor="#D6000E"
                    stopColor="#D6000E"
                    :innerStrokeWidth="5"
                    :strokeWidth="5"
                  >
                    <p class="text-white" style="margin: 50px 0 0 20px">
                      {{ value }}
                    </p>
                  </radial-progress-bar>
                  <p class="mt-4 ml-2">Design</p>
                </div>
                <div class="col-3" align="center">
                  <radial-progress-bar
                    class="pt-4 pl-2"
                    :diameter="70"
                    :completed-steps="value"
                    :total-steps="100"
                    innerStrokeColor="white"
                    startColor="#D6000E"
                    stopColor="#D6000E"
                    :innerStrokeWidth="5"
                    :strokeWidth="5"
                  >
                    <p class="text-white" style="margin: 50px 0 0 20px">
                      {{ value }}
                    </p>
                  </radial-progress-bar>
                  <p class="mt-4 ml-2">Value for Money</p>
                </div>
                <div class="col-3" align="center">
                  <radial-progress-bar
                    class="pt-4 pl-2"
                    :diameter="70"
                    :completed-steps="value"
                    :total-steps="100"
                    innerStrokeColor="white"
                    startColor="#D6000E"
                    stopColor="#D6000E"
                    :innerStrokeWidth="5"
                    :strokeWidth="5"
                  >
                    <p class="text-white" style="margin: 50px 0 0 20px">
                      {{ value }}
                    </p>
                  </radial-progress-bar>
                  <p class="mt-4 ml-2">Ease of Use</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div class="row">
        <div class="col-lg-9 p-1">
          <div
            class="row overview-container p-2"
           
          >
            <div
              class="col-lg-7 pt-2"
              style="display: inline-flex; background-color: #19181f"
            >
              <div class="test-item">A</div>
              <p class="pl-5" style="background-color: #19181f">
                This is an example competentence
              </p>
            </div>
            <div class="col-lg-3 pt-2" style="background-color: #19181f">
              <a class="last-button pt-1" style="color: white" href="#">Open</a>
            </div>
          </div>

          <div class="row mt-2 mx-4 overview-container" style="background-color: #3f3c49; ">
            <div
              class="col-lg-5 pt-2"
              style="display: flex;"
            >
              <div class="test-item">A1</div>
              <p class="pl-5" style="background-color: #3f3c49; width: 100%;">
                This is a Place Holder
              </p>
            </div>
            <div class="col-lg-6 pt-1" style="background-color: #3f3c49">
              <a class="last-button pt-5 pl-5" href="#">Edit</a> 
              <button  style="background:none; border:none; margin-left:10%; " ><svg xmlns="http://www.w3.org/2000/svg" width="16" style="background-color: #0A8844; width:35px; height:35px; border-radius: 50%; " height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
            </svg></button>
            </div>
          </div>
             <div class="row mt-2 mx-4 overview-container" style="background-color: #3f3c49; ">
            <div
              class="col-lg-5 pt-2"
              style="display: flex;"
            >
              <div class="test-item">A1</div>
              <p class="pl-5" style="background-color: #3f3c49; width: 100%;">
                This is a Place Holder
              </p>
            </div>
            <div class="col-lg-6 pt-1" style="background-color: #3f3c49">
              <a class="last-button pt-5 pl-5" href="#">Edit</a> 
              <button  style="background:none; border:none; margin-left:10%; " ><svg xmlns="http://www.w3.org/2000/svg" width="16" style="background-color: #0A8844; width:35px; height:35px; border-radius: 50%; " height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
            </svg></button>
            </div>
          </div>
           <div class="row mt-2 mx-4 overview-container" style="background-color: #3f3c49; ">
            <div
              class="col-lg-5 pt-2"
              style="display: flex;"
            >
              <div class="test-item">A1</div>
              <p class="pl-5" style="background-color: #3f3c49; width: 100%;">
                This is a Place Holder
              </p>
            </div>
            <div class="col-lg-6 pt-1" style="background-color: #3f3c49">
              <a class="last-button pt-5 pl-5" href="#">Edit</a> 
              <button  style="background:none; border:none; margin-left:10%; " ><svg xmlns="http://www.w3.org/2000/svg" width="16" style="background-color: #0A8844; width:35px; height:35px; border-radius: 50%; " height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
            </svg></button>
            </div>
          </div>
          <div class="row mt-2 mx-4 overview-container" style="background-color: #3f3c49; ">
            <div
              class="col-lg-5 pt-2"
              style="display: flex;"
            >
              <div class="test-item">A1</div>
              <p class="pl-5" style="background-color: #3f3c49; width: 100%;">
                This is a Place Holder
              </p>
            </div>
            <div class="col-lg-6 pt-1" style="background-color: #3f3c49">
              <a class="last-button pt-5 pl-5" href="#">Edit</a> 
              <button  style="background:none; border:none; margin-left:10%; " ><svg xmlns="http://www.w3.org/2000/svg" width="16" style="background-color: #0A8844; width:35px; height:35px; border-radius: 50%; " height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
            </svg></button>
            </div>
          </div>
          <div class="row mt-2 mx-4 overview-container" style="background-color: #3f3c49; ">
            <div
              class="col-lg-5 pt-2"
              style="display: flex;"
            >
              <div class="test-item">A1</div>
              <p class="pl-5" style="background-color: #3f3c49; width: 100%;">
                This is a Place Holder
              </p>
            </div>
            <div class="col-lg-6 pt-1" style="background-color: #3f3c49">
              <a class="last-button pt-5 pl-5" href="#">Edit</a> 
              <button  style="background:none; border:none; margin-left:10%; " ><svg xmlns="http://www.w3.org/2000/svg" width="16" style="background-color: #0A8844; width:35px; height:35px; border-radius: 50%; " height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
            </svg></button>
            </div>
          </div>
          <div
            class="row overview-container p-2 mt-2"
          >
            <div
              class="col-lg-7 pt-2"
              style="display: inline-flex; background-color: #19181f"
            >
              <div class="test-item">A</div>
              <p class="pl-5" style="background-color: #19181f">
                This is an example competentence
              </p>
            </div>
            <div class="col-lg-3 pt-2" style="background-color: #19181f">
              <a class="last-button pt-1" style="color: white " href="#">Open</a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 pt-2">
          <div class="row">
            <div class="col-4">
              <p class="remarks-heading">Self Score</p>
            </div>
            <div class="col-4">
              <p class="remarks-heading">Certified Score</p>
            </div>
            <div class="col-4">
              <p class="remarks-heading">Global Score</p>
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <radial-progress-bar
                class="pt-4 pl-2"
                :diameter="40"
                :completed-steps="value"
                :total-steps="100"
                innerStrokeColor="white"
                startColor="#D6000E"
                stopColor="#D6000E"
                :innerStrokeWidth="3"
                :strokeWidth="3"
              >
                <p class="text-white" style="margin: 50px 0 0 18px">
                  {{ value1 }}
                </p>
              </radial-progress-bar>
            </div>
            <div class="col-4">
              <radial-progress-bar
                class="pt-4 pl-2"
                :diameter="40"
                :completed-steps="value"
                :total-steps="100"
                innerStrokeColor="white"
                startColor="#D6000E"
                stopColor="#D6000E"
                :innerStrokeWidth="3"
                :strokeWidth="3"
              >
                <p class="text-white" style="margin: 50px 0 0 18px">
                  {{ value1 }}
                </p>
              </radial-progress-bar>
            </div>
            <div class="col-4">
              <radial-progress-bar
                class="pt-4 pl-2"
                :diameter="40"
                :completed-steps="value"
                :total-steps="100"
                innerStrokeColor="white"
                startColor="#D6000E"
                stopColor="#D6000E"
                :innerStrokeWidth="3"
                :strokeWidth="3"
              >
                <p class="text-white" style="margin: 50px 0 0 18px">
                  {{ value1 }}
                </p>
              </radial-progress-bar>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-4">
              <radial-progress-bar
                class="pt-4 pl-2"
                :diameter="40"
                :completed-steps="value"
                :total-steps="100"
                innerStrokeColor="white"
                startColor="#D6000E"
                stopColor="#D6000E"
                :innerStrokeWidth="3"
                :strokeWidth="3"
              >
                <p class="text-white" style="margin: 50px 0 0 18px">
                  {{ value1 }}
                </p>
              </radial-progress-bar>
            </div>
            <div class="col-4">
              <radial-progress-bar
                class="pt-4 pl-2"
                :diameter="40"
                :completed-steps="value"
                :total-steps="100"
                innerStrokeColor="white"
                startColor="#D6000E"
                stopColor="#D6000E"
                :innerStrokeWidth="3"
                :strokeWidth="3"
              >
                <p class="text-white" style="margin: 50px 0 0 18px">
                  {{ value1 }}
                </p>
              </radial-progress-bar>
            </div>
            <div class="col-4">
              <radial-progress-bar
                class="pt-4 pl-2"
                :diameter="40"
                :completed-steps="value"
                :total-steps="100"
                innerStrokeColor="white"
                startColor="#D6000E"
                stopColor="#D6000E"
                :innerStrokeWidth="3"
                :strokeWidth="3"
              >
                <p class="text-white" style="margin: 50px 0 0 18px">
                  {{ value1 }}
                </p>
              </radial-progress-bar>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-4">
              <radial-progress-bar
                class="pt-4 pl-2"
                :diameter="40"
                :completed-steps="value"
                :total-steps="100"
                innerStrokeColor="white"
                startColor="#D6000E"
                stopColor="#D6000E"
                :innerStrokeWidth="3"
                :strokeWidth="3"
              >
                <p class="text-white" style="margin: 50px 0 0 18px">
                  {{ value1 }}
                </p>
              </radial-progress-bar>
            </div>
            <div class="col-4">
              <radial-progress-bar
                class="pt-4 pl-2"
                :diameter="40"
                :completed-steps="value"
                :total-steps="100"
                innerStrokeColor="white"
                startColor="#D6000E"
                stopColor="#D6000E"
                :innerStrokeWidth="3"
                :strokeWidth="3"
              >
                <p class="text-white" style="margin: 50px 0 0 18px">
                  {{ value1 }}
                </p>
              </radial-progress-bar>
            </div>
            <div class="col-4">
              <radial-progress-bar
                class="pt-4 pl-2"
                :diameter="40"
                :completed-steps="value"
                :total-steps="100"
                innerStrokeColor="white"
                startColor="#D6000E"
                stopColor="#D6000E"
                :innerStrokeWidth="3"
                :strokeWidth="3"
              >
                <p class="text-white" style="margin: 50px 0 0 18px">
                  {{ value1 }}
                </p>
              </radial-progress-bar>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-4">
              <radial-progress-bar
                class="pt-4 pl-2"
                :diameter="40"
                :completed-steps="value"
                :total-steps="100"
                innerStrokeColor="white"
                startColor="#D6000E"
                stopColor="#D6000E"
                :innerStrokeWidth="3"
                :strokeWidth="3"
              >
                <p class="text-white" style="margin: 50px 0 0 18px">
                  {{ value1 }}
                </p>
              </radial-progress-bar>
            </div>
            <div class="col-4">
              <radial-progress-bar
                class="pt-4 pl-2"
                :diameter="40"
                :completed-steps="value"
                :total-steps="100"
                innerStrokeColor="white"
                startColor="#D6000E"
                stopColor="#D6000E"
                :innerStrokeWidth="3"
                :strokeWidth="3"
              >
                <p class="text-white" style="margin: 50px 0 0 18px">
                  {{ value1 }}
                </p>
              </radial-progress-bar>
            </div>
            <div class="col-4">
              <radial-progress-bar
                class="pt-4 pl-2"
                :diameter="40"
                :completed-steps="value"
                :total-steps="100"
                innerStrokeColor="white"
                startColor="#D6000E"
                stopColor="#D6000E"
                :innerStrokeWidth="3"
                :strokeWidth="3"
              >
                <p class="text-white" style="margin: 50px 0 0 18px">
                  {{ value1 }}
                </p>
              </radial-progress-bar>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-4">
              <radial-progress-bar
                class="pt-4 pl-2"
                :diameter="40"
                :completed-steps="value"
                :total-steps="100"
                innerStrokeColor="white"
                startColor="#D6000E"
                stopColor="#D6000E"
                :innerStrokeWidth="3"
                :strokeWidth="3"
              >
                <p class="text-white" style="margin: 50px 0 0 18px">
                  {{ value1 }}
                </p>
              </radial-progress-bar>
            </div>
            <div class="col-4">
              <radial-progress-bar
                class="pt-4 pl-2"
                :diameter="40"
                :completed-steps="value"
                :total-steps="100"
                innerStrokeColor="white"
                startColor="#D6000E"
                stopColor="#D6000E"
                :innerStrokeWidth="3"
                :strokeWidth="3"
              >
                <p class="text-white" style="margin: 50px 0 0 18px">
                  {{ value1 }}
                </p>
              </radial-progress-bar>
            </div>
            <div class="col-4">
              <radial-progress-bar
                class="pt-4 pl-2"
                :diameter="40"
                :completed-steps="value"
                :total-steps="100"
                innerStrokeColor="white"
                startColor="#D6000E"
                stopColor="#D6000E"
                :innerStrokeWidth="3"
                :strokeWidth="3"
              >
                <p class="text-white" style="margin: 50px 0 0 18px">
                  {{ value1 }}
                </p>
              </radial-progress-bar>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RadialProgressBar from 'vue-radial-progress'

export default {
  name: 'Sub-Competences',
  components: {
    RadialProgressBar
  },
  data() {
    return {
      value: 70.8,
      value1: 6
    }
  }
}
</script>

<style>
p {
  color: #fff;
}
.overview-container {
    border: 1px solid #FFFFFF33;
    border-radius: 5px;
    background-color:#19181F;
}
.review-button{
  background-color: #00B048;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  font-weight: 600;
  color: #fff;
  /* width: 70%; */
}
.test-item {
  border: 1px solid red;
  padding: 2px;
  width: 60px;
  height:25px;
  font-size: 12px;
  text-align: center;
  border-radius: 20px;
  background-color: red;
}

.last-button{
  color:#00B048;
  margin-left: 140px;
  
}
.remarks-heading {
  font-size: 12px;
  transform: rotate(-45deg);
}

</style>

