<template>
<div id="container" style="text-align: left; color: white; font-size:12px;">
    <div class="row p-5">
        <div class="col-lg-8 col-md-12 col-sm-12">
            <div class="row" style="display: flex; ">
               
            <img src="@/assets/images/leveltest-card-image.png" style="width: 150px ;" alt="">
            <div class=" row ml-3 " style="border: 2px solid #cccccc33;padding:15px; padding-top: 30px;border-radius: 5px;  flex-wrap: wrap; display:inline-flex;background-color: #19181F;"> 
        <div  style="display:inline-flex; width:max-content; background-color: #19181F;">
          <div class="test-item ">+</div>
        <p class="pl-5" style="background-color: #19181F;">Choose a image  </p>
         <a href="#" style="margin-left: 65px;" > Edit</a>
        </div>
        </div>
         
           </div>
        <div class="mt-2">
         
          <div style=" " class="task">
            <ul class="nav nav-pills" style="border-bottom: 1px solid white; height:29px;">
              <li class="nav-item pill-1">
                <a class="nav-link active" data-toggle="tab" href="#tab1"
                  >Overview</a
                >
              </li>
              <li class="nav-item pill-2">
                <a class="nav-link" data-toggle="tab" href="#tab2">Curriculum</a>
              </li>
              <li class="nav-item pill-3">
                <a class="nav-link" data-toggle="tab" href="#tab3"
                  >Assessor</a
                >
              </li>
              <li class="nav-item pill-4">
                <a class="nav-link" data-toggle="tab" href="#tab4">Reviews</a>
              </li>
            </ul>

            <div class="tab-content">
              <div
                class="tab-pane show  mytab"
                style="border:0px"
                id="tab1"
                role="tabpanel"
              >
                <div class="mytab">
                  <a
                    style="color:white;font-size:12px;margin-right:8px"
                    href="#"
                    ><fa-icon :icon="['fas', 'plus-circle']"/></a
                  >
                </div>
                 <div class=" row w-100 mt-1 " style="border: 2px solid #cccccc33;padding:12px;border-radius: 5px; font-size:14px; height: 70px; flex-wrap: wrap; display:inline-flex;background-color: #19181F;"> 
                <div class="col-lg-7 pt-2" style="display:inline-flex; background-color: #19181F;">
                <div class="test-item ">A</div>
                <p class="pl-5" style="background-color: #19181F;">Insert LevelTest </p>
                </div>
                <div class="col-lg-3 pt-2" style="background-color: #19181F;  ">
                
                <a class="last-buttons pt-1" href="#">Edit</a>
                </div>
           
            </div>
             <div class="form-group" style="font-size: 16px; text-align: left;">
                    
                    <textarea class="form-control" style="background-color: #19181F; outline:none; border:2px solid  #cccccc33; "  id="exampleFormControlTextarea1" placeholder="Type a short introduction…………….." rows="3"></textarea>
               <label  style="background-color: 1C1A25; margin-top:10px;" for="">Key Take aways</label> 
            </div>    
            <div
            ></div>   
            <div class=" take-aways row w-100 mt-1 "
            
            >
                <div class="col-lg-7 pt-2" style="display:inline-flex; background-color:#3F3C49;">
                <div class="test-item ">A</div>
                <p class="pl-5" style="background-color:#3F3C49;">Insert LevelTest </p>
                </div>
                <div class="col-lg-3 pt-2" style=" background-color:#3F3C49;  ">
                
                <a class="last-buttons pt-1" href="#">Edit</a>
                </div>
           
            </div>
            
            </div>
              <div
                class="tab-pane mytab"
                style="border:0px"
                id="tab2"
                role="tabpanel"
              >
                <div class="mytab">
                  <a
                    style="color:white;font-size:12px;margin-right:8px"
                    href="#"
                    ><fa-icon :icon="['fas', 'plus-circle']"/></a
                  >Tasks
                </div>
                
              </div>
              <div
                class="tab-pane mytab"
                style="border:0px"
                id="tab3"
                role="tabpanel"
              >
                <div class="mytab">
                  <a
                    style="color:white;font-size:12px;margin-right:8px"
                    href="#"
                    ><fa-icon :icon="['fas', 'plus-circle']"/></a
                  >Appointments
                </div>
                <div class="mytab1">
               
                </div>
              </div>
              <div
                class="tab-pane mytab"
                style="border:0px"
                id="tab4"
                role="tabpanel"
              >
                <div class="mytab">
                  <a
                    style="color:white;font-size:12px;margin-right:8px"
                    href="#"
                    ><fa-icon :icon="['fas', 'plus-circle']"/></a
                  >File
                </div>
                <div class="mytab1">+File</div>
              </div>
            </div>
          </div>
        
        </div>
        <button class="level-button mt-1 mr-3">Save Leveltest</button>
        </div>
      
        <div class="col-lg-4 col-md-12 col-sm-12" style="background-color:#19181F;  ">
            <div class="row mt-3 basic-info " style="font-size: 14px; display: flex;  justify-content: space-between;">
              <p> <span class="mr-2"> <img src="@/assets/images/Layer 17.png" style="width:20px;" alt=""> </span> Price</p>
              <p style="color: #FF1545">€49.00</p>
            </div>

            <div class="row mt-2 " style="font-size: 14px; display: flex; justify-content: space-between; border-bottom: 1px solid #CCCCCC; ">
              <p> <span class="mr-2"> <img src="@/assets/images/Layer 14.png" style="width:13px;" alt=""> </span> Assessor</p>
              <p >POPM Global</p>
            </div>

            <div class="row mt-2 " style="font-size: 14px; display: flex; justify-content: space-between;  border-bottom: 1px solid #CCCCCC;">
              <p> <span class="mr-2"> <img src="@/assets/images/Layer 12.png" style="width:20px;" alt=""> </span> Duration</p>
              <p >1 days</p>
            </div>
            <div class="row mt-2 " style="font-size: 14px; display: flex; justify-content: space-between;  border-bottom: 1px solid #CCCCCC;">
              <p> <span class="mr-2"> <img src="@/assets/images/Layer 15.png" style="width:17px;" alt=""> </span> Competences</p>
              <p >8</p>
            </div>
              <div class="row mt-2 " style="font-size: 14px; display: flex; justify-content: space-between;  border-bottom: 1px solid #CCCCCC;">
              <p> <span class="mr-2"> <img src="@/assets/images/Layer 14.png" style="width:17px;" alt=""> </span> Enrolled</p>
              <p >298 students</p>
            </div>
              <div class="row mt-2 " style="font-size: 14px; display: flex; justify-content: space-between;  border-bottom: 1px solid #CCCCCC;">
              <p> <span class="mr-2"> <img src="@/assets/images/Layer 16.png" style="width:20px;" alt=""> </span> Language</p>
              <p >English</p>
            </div>
            <div class="row mt-2 " style="font-size: 14px; display: flex; justify-content: space-between; ">
              <p> <span class="mr-2"> <img src="@/assets/images/Layer 13.png" style="width:20px; height:17px;" alt=""> </span> Deadline</p>
              <p >01 Oct 2021</p>
            </div>
            <div class="mr-4">
            <button class="level-button  ">Buy Pro App</button> 
            <button class="level-button  ">Buy this Leveltest</button>
            </div>

        </div>
    </div>
     
</div>
</template>

<script>
export default {
    name: 'Certified LevelTest',
  data(){
    return{
      index: 0,
      Overview:{
        title:'',
        discription:'',
        takeaway:[''],
      }
    }
  },
    methods: {
addIndicator(){
  this.subcompetence.indicators.push('')
},
removeIndicator(key){
  this.subcompetence.indicators = this.subcompetence.indicators.filter((indicator, index)=> index !==key)
},


},
}
</script>

<style scoped>

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
.take-aways{
border: 2px solid #cccccc33;font-size: 16px; padding:12px;border-radius: 5px; height: 70px; flex-wrap: wrap; display:inline-flex; background-color:#3F3C49;
}

</style>
<style lang="scss">
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
  float: right;
}
</style>