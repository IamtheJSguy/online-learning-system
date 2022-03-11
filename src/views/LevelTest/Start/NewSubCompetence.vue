<template>
    <div class="pl-5" style="text-align: left;">
      <h2 style="color: white">Level test: Product Manager 2021</h2>
      <div class="row">
        <label class="test-item ml-3 mt-4">A.1</label>
        <h5 class="ml-4" style="margin-top: 29px; color: white">
          {{subcompetence.question}}
        </h5>
      </div>
      <div class="row">
        <div class="col-lg-10 col-md-12 col-sm-12">
          <input 
          v-model="subcompetence.question"
          type="text" 
          style="width:100%; height:60px; background-color:#19181F; border :1px solid #CCCCCC33; color: #CCCCCC;"
          placeholder="Add the discription of the subcompetence here."
          required
           >
          <h5 class="ml-4 w-50" style="margin-top: 29px">
            Indicators (check your experience)
          </h5>
          <div
          v-for="(indicators,index) in subcompetence.indicators"
          :key="index"
          style="display: flex"
          >
          <b-form-checkbox class="check-box-color mt-2">
            <input 
            v-model="subcompetence.indicators[index]"
            type="text"
            class="indicator-text "
            placeholder="indicator"
            required

            >
            
            <button
                      v-if="index !== 0"
                      class="mr-2 indicator-btn" @click="removeIndicator(index)"> - Indicator
                    </button>
          
            </b-form-checkbox
          >
          
          </div>
          <div class="mt-2">
                    <b-button class="indicator-btn" @click="addIndicator()">
                      + Indicator
                    </b-button> <br>
          </div>

          
         
         
          <div>
            <button class="review-button mt-3">Review assessor</button>
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

</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "EditSub",
  data() {
    return{
      subcompetence:{
        question:'',
        discription:'',
        indicators:[''],
        competence:''
      }
    }
  },
computed: {
  ...mapState({
    user: state => state.user
  })
},
created(){
  this.$store.dispatch('getSubCompetence')
  .then(
    (response)=>{
      this.subcompetence = response.data.data
    }
  )
},
methods: {
addIndicator(){
  this.subcompetence.indicators.push('')
},
removeIndicator(key){
  this.subcompetence.indicators = this.subcompetence.indicators.filter((indicator, index)=> index !==key)
},


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
.indicator-text{
  background: none;
 border: 1px solid #cccccc99;
 outline: none;
 color: #FFF;
}
.indicator-btn{
   background-color :red;
   border: none;

}
</style>

