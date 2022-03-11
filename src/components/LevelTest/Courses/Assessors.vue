<template>
  <div class="card-course">
    <img
      src="@/assets/images/leveltest-card-image.png"
      style="width: 100%;"
      alt=""
    />
    <div class="row card-course">
      <a style="color: #ff1545; margin-left: 5px" href="#">Open</a>

      <div
        class="progress"
        style="width: 80%; height: 5px; margin-top: 10px; margin-left: 10px"
      >
        <div class="progress-bar bg-success" style="width: 20%"></div>
      </div>
      <p style="font-size: 13px; margin-left: 10px">
        {{ course.title }}
      </p>
    </div>
      <div class="pl-2 card-course">
          <b-icon
        icon="file-earmark-richtext-fill"
        style="background: none"
        variant="success"
      >
      </b-icon>
      <label style="font-size: 13px; margin-left: 5px" for=""
        >Competences: {{ course.leveltest ? course.leveltest.competences.length : 0 }}</label
      >
      </div>
  </div>
</template>

<script>
export default {
    name: 'AssessorCourseCard',
    props: {
        course: {
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
</style>