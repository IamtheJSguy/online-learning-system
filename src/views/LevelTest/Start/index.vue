<template>
  <div class="page">
    <img
      class="popmlogo"
      src="@/assets/images/start_logo.png"
      alt=""
      height="30"
    />
    <h2 class="mt-3" style="color: #fff">What is your product Level?</h2>
    <p>
      With our level test you can determine your level and you will receive a
      personal action plan and you can also go further for a certification.
    </p>
    <img src="@/assets/images/start_image.png" class="mt-3" alt="" /><br />
    <button class="start w-50 mt-5" @click="() =>{
      $router.push('/admin/leveltest')
      }" >START</button>
  </div>
</template>

<script>
export default {
  name: "start",
};
</script>

<style scoped>
  .selected{
    background-color: red;
  }
  .page{
    padding-top: 50px;
  }
  p{
    color: lightslategrey;
  }
  .start{
    background-color: #D6000E;
    height: 50px;
    border: none;
    color: #fff;
    border-radius: 5px;
  }

</style>