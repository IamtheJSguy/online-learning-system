<template>
  <div id="container" class="p-5">
    <div
      class="main"
      style="width: 100%; text-align: left"
    >
      <h2 style="color: white">Overview Level Test</h2>
      <select class="selection" aria-label="Default select example">
        <option selected>Sort by:Active</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <leveltest-overview
        v-for="(leveltest, index) in leveltests"
        :key="leveltest.id"
        :leveltest="leveltest"
        :index="index"
      />
    </div>
    <div class="button-container mt-5">
      <button class="level-button" @click="createLeveltest">
        Add new Leveltest
      </button>
    </div>
  </div>
</template>
<script>
import LeveltestOverview from '@/components/LevelTest/Overview/Card'
export default {
  name: "OverView",
  components: {
    LeveltestOverview
  },
  data() {
    return {
      leveltests: [
        {
          id: '1',
          name: 'Project Manager',
          status: 'Active'
        },
        {
          id: '2',
          name: 'Project Owner',
          status: 'In-active'
        },
        {
          id: '3',
          name: 'Project Analyst',
          status: 'Active'
        },
        {
          id: '4',
          name: 'Business Analyst',
          status: 'In-active'
        },
        {
          id: '5',
          name: 'Custom',
          status: 'Active'
        }
      ]
    }
  },
  created() {
    this.$store.dispatch('getLevelTests')
      .then(
        (response) => {
          this.leveltests = response.data.data
        }
      )
  },
  methods: {
    createLeveltest() {
      this.$store.dispatch('createLevelTest', {})
        .then(
          (response) => {
            this.leveltests = response.data.data
          }
        )
    }
  }
};
</script>

<style>
.selection {
  width: 200px;
  font-size: 14px;
  border: 1px solid #cccccc33;
  border-radius: 5px;
  background-color: #19181F;
  padding: 10px;
  text-align: center;
  color: white;
}
.level-button{
  width: 200px;
  padding: 10px;
  background:#D6000E;
  border:none;
  border-radius: 5px;
  color: #fff;
}
.button-container {
  text-align: -webkit-right;
}
</style>
