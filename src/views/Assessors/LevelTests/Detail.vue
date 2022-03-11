<template>
  <div id="container">
    <div class="main ml-3" style="text-align: left">
      <h2 style="color: #fff" class="pt-3">Level test: Personal plan</h2>
      <div class="row">
        <div class="col-lg-9 col-md-12 col-sm-12 px-5 ml-0">
            <global-overview />
        </div>
      </div>
      <div class="mt-3">
          <assessor-competence-card
            class="mt-1"
            v-for="competence in course.leveltest.competences"
            :key="competence._id"
            :data="competence"
          />
      </div>
    </div>
  </div>
</template>

<script>
import GlobalOverview from '@/components/Candidates/Courses/GlobalOverview.vue'
import AssessorCompetenceCard from '@/components/LevelTest/Assessors/Competences.vue'

export default {
  name: 'LevelTestOverview',
  components: {
    GlobalOverview,
    AssessorCompetenceCard
  },
  data() {
    return {
      value: 70.8,
      value1: 6,
      course: {}
    }
  },
  created() {
      this.$store.dispatch('getCandidateCourse', this.$route.params.id)
        .then(
            (response) => {
                this.course = response.data.data
            }
        )
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
