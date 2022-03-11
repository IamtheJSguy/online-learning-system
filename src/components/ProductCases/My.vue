<template>
  <div class="card-course shadow">
    <img
      src="@/assets/images/leveltest-card-image.png"
      style="width: 100%;"
      alt=""
    />
    <div class="row card-course">
      <router-link style="color: #ff1545; margin-left: 5px" :to="'/productcases/my/' + data._id">Open</router-link>

      <div
        class="progress"
        style="width: 80%; height: 5px; margin-top: 10px; margin-left: 10px"
      >
        <div class="progress-bar bg-success" style="width: 20%"></div>
      </div>
      <p style="font-size: 16px; margin-left: 10px; font-weight: 550;">
        {{ data.productCase.title }}
      </p>
    </div>
      <div class="pl-2 card-course">
      <b-icon
        icon="person-fill"
        style="background: none; margin-left: 10px"
        variant="success"
      >
      </b-icon>
      <label style="font-size: 13px; margin-left: 5px" for=""
        >{{ data.productCase.candidates.length }} Students</label
      >
      </div>
  </div>
</template>

<script>
export default {
    name: 'MyProductCaseCard',
    props: {
        data: {
            type: Object,
            default: () => {
                return {}
            }
        }
    }
}
</script>

<style scoped>
.card-course:hover .card-course p {
    color: #FF1545;
}
.card-course:hover .card-course label {
    color: #FF1545;
}
.shadow {
  box-shadow: 0px 3px 1px 0px rgba(0, 0, 0, 0.16);
}
</style>