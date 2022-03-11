<template>
  <div class="inner-card mt-1">
    <div style="display: flex">
      <img
        src="@/assets/images/Ellipse 1.png"
        width="60px;"
        height="60px"
        alt=""
      />
      <div style="margin-left: 5px" align="left">
        <p style="font-size: 13px">
          {{ assessor.firstName }} {{ assessor.lastName }}
        </p>
        <p style="font-size: 13px; margin-bottom: 0; color: #ccccccee;">Product Manager</p>
      </div>
      <img
        src="@/assets/images/1.png"
        style="margin-top: 8px; height: 25px; margin-right: 2px; margin-left: auto;"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AssessorsCard',
  props: {
    assessor: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.inner-card{
    background-color: #3F3C49;
    border-radius: 5px;
    margin-left: 7px;
    width: 97%;
    padding:10px;
}
.inner-card-button{
    background: none;
    border:1px solid #CCCCCC33;
    font-size:13px;
    width: 60px;
    border-radius: 50px;
    color: white;
    margin-left: 8px;
}
.inner-card-button-active{
    color: #09D175;
}
</style>