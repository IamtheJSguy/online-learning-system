<template>
  <div
    class="card-course shadow"
    style="cursor: pointer;"
    @click="() => {
      $router.push(`/candidate/leveltest/${course._id}`)
    }">
    <img
      src="@/assets/images/leveltest-card-image.png"
      style="width: 100%;"
      alt=""
    />
    <div class="card-course p-2">
      <div
        class="progress"
        style="width: 100%; height: 5px; margin-top: 10px;"
      >
        <div class="progress-bar bg-success" style="width: 20%"></div>
      </div>
      <p style="font-size: 13px; margin-bottom: 0; font-weight: bold;">
        {{ course.title }}
      </p>
      <div class="card-course">
          <b-icon
        icon="file-earmark-richtext-fill"
        style="background: none"
        variant="success"
      >
      </b-icon>
      <label style="font-size: 13px; margin-left: 5px" for=""
        >{{ course.leveltest ? course.leveltest.competences.length : 0 }}</label
      >
      <b-icon
        icon="person-fill"
        style="background: none; margin-left: 10px"
        variant="success"
      >
      </b-icon>
      <label style="font-size: 13px; margin-left: 5px" for=""
        >{{ course.candidates.length }} Students</label
      >
      <p style="color: red; margin: 0; text-align: right;" href="#">
        {{course.price === 'Free' ? 'Free' : '$' + course.price}}
      </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'CandidateCourseCard',
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
.card-course:hover {
    background-color: #18191F;
}
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