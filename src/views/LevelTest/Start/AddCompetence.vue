<template>
  <div id="container mt-4" style="color: white;">
    <div
      class="main "
      style="height: 45px; width: 80%; text-align: left;" >
      <h2>New sub Competence</h2>
  
      <div class=" row w-100 mt-5 " style="border: 2px solid #cccccc33;padding:15px;border-radius: 5px; flex-wrap: wrap; display:inline-flex;background-color: #19181F;"> 
        <div class="col-lg-7 pt-2" style="display:inline-flex; background-color: #19181F;">
          <div class="test-item ">A</div>
        <p class="pl-5" style="background-color: #19181F;">Add the name of the competences here </p>
        </div>
          <div class="col-lg-3 pt-2" style="background-color: #19181F;  ">
        
        <a class="last-buttons pt-1" href="#">Edit</a>
        </div>
      </div>

      <div class=" row  mt-2 ml-4 " style="border: 2px solid #cccccc33;padding:15px; width: 90%; border-radius: 5px; flex-wrap: wrap; display:inline-flex;background-color: #3F3C49"> 
        <div class="col-lg-5 pt-2" style="display:inline-flex; background-color: #3F3C49; height: 45px;">
          <div class="test-item ">A1</div>
        <p class="pl-5" style="background-color: #3F3C49;">Naam training course</p>
        </div>
          <div class="col-lg-6 pt-2" style="background-color: #3F3C49;  ">
        
        <a class="last-buttons pt-1" href="#">View Courses</a>
        </div>
      </div>

      <br>
    <button class="level-button mt-3 mr-3">Add new Competence</button><br><br><br>
    <button class="level-button mt-1 mr-3">Save Leveltest</button>
  </div>
  </div>
 
</template>
<script>
export default {
  name: "Add Competences",
};
</script>

<style>

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

.last-buttons{
  color: white;
  margin-left: 140px;
  
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
