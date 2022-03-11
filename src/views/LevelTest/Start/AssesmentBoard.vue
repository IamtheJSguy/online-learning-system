 <template>
  <div id="container " style="text-align:left;">
    <h3 style="color: #fff" class="pt-5 ml-5 ">Welcome at your Assessment Dashboard</h3>
    <div class="main pl-5 row" style="text-align: left; width:100%;">
      
       <div class="col-lg-8 col-md-10- col-sm-10">
          <div class="btn-group mt-5" style="width: 60%;" >
        <button type="button" style="text-align: left; background-color:#1c1a25; outline: none;   border: none;" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Introduction place holder
        </button>
        <div class="dropdown-menu dropdown-menu-right">
        <button class="dropdown-item" type="button">Action</button>
        <button class="dropdown-item" type="button">Another action</button>
        <button class="dropdown-item" type="button">Something else here</button>  
        </div>
          </div>    
       </div>
       <a class="col-lg-4 mt-5 float-right" style="color:red;" href="#">See all my tasks</a>
       <div class="col-lg-10 col-lg-8 col-sm-12" style="border: 1px solid gray; height:40px; border-radius: 5px;">     
      <div class="p-2">
        <b-icon icon="check-circle" style="width:18px; height:18px;" variant="success"> </b-icon>
        <label style="color: white; width:40%; font-size:14px; margin-left:14px;">Certified Leveltest PO of James Miles </label>
        <a style="color:red; font-size: 14px; margin-left: 300px;  " href="#">Start</a>
      </div>  
      </div>
       <div class="col-lg-10 col-lg-8 col-sm-12" style="border: 1px solid gray; height:40px; border-radius: 5px;">     
      <div class="p-2">
        <b-icon icon="check-circle" style="width:18px; height:18px;" variant="success"> </b-icon>
        <label style="color: white; width:40%; font-size:14px; margin-left:14px;">Certified Leveltest PO of James Miles </label>
        <a style="color:red; font-size: 14px; margin-left: 300px;  " href="#">Start</a>
      </div>  
      </div>
       <div class="col-lg-10 col-lg-8 col-sm-12" style="border: 1px solid gray; height:40px; border-radius: 5px;">     
      <div class="p-2">
        <b-icon icon="check-circle" style="width:18px; height:18px;" variant="success"> </b-icon>
        <label style="color: white; width:40%; font-size:14px; margin-left:14px;">Certified Leveltest PO of James Miles </label>
        <a style="color:red; font-size: 14px; margin-left: 300px;  " href="#">Start</a>
      </div>  
      </div>
       <div class="col-lg-10 col-lg-8 col-sm-12" style="border: 1px solid gray; height:40px; border-radius: 5px;">     
      <div class="p-2">
        <b-icon icon="check-circle" style="width:18px; height:18px;" variant="success"> </b-icon>
        <label style="color: white; width:40%; font-size:14px; margin-left:14px;">Certified Leveltest PO of James Miles </label>
        <a style="color:white; font-size: 14px; margin-left: 280px;" class="test-item" href="#">Claim new</a>
      </div>  
      </div>  

           
       <div class="col-lg-12 col-md-10- col-sm-12">
          <div class="btn-group mt-5" style="width: 83%;" >
        <button type="button" style="text-align: left; background-color:#1c1a25; outline: none;  border:none;  border-bottom: 1px solid gray;" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Where would you start?
        </button>
        <div class="dropdown-menu dropdown-menu-right">
        <button class="dropdown-item" type="button">Action</button>
        <button class="dropdown-item" type="button">Another action</button>
        <button class="dropdown-item" type="button">Something else here</button>  
        </div>
          </div>    
       </div>

       <div class="row">
         <div class="mt-5 col-12" style="background-color: red; padding: 55px; border-radius: 5px; height:170px; width : 180px;">
          <img src="@/assets/images/up-down-arrow.png" style="width:65px;" alt="">
         </div>
       </div>

       <div class="row">
         <div class="mt-5 col-12 " style="background-color: #CCCCCC; padding: 55px; margin-left: 20px; border-radius: 5px; height:170px; width : 170px;">
          <img src="@/assets/images/mountain.png" style="width:65px;" alt="">
         </div>
       </div>

       <div class="row">
         <div class="mt-5 col-12 " style="background-color: #19181F; padding: 58px;  margin-left: 20px; border-radius: 5px; margin-left:40px;  height:170px; width : 160px;">
          <img src="@/assets/images/arrow.png" style="width:65px;" alt="">
         </div>
       </div>
      </div>
    
  </div>  
</template> 

<script>

export default {
    name: 'Assesment Board'
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
</style>