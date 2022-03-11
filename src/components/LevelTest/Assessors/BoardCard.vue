<template>
    <div class="mt-1 p-2" style="border: 1px solid gray; border-radius: 5px;">     
      <div class="fx-con">
          <p style="color: white; font-size:14px; margin-bottom: 0; width: 90%;">
              <span>
                <b-icon icon="check-circle" style="width:18px; height:18px;" variant="success"> </b-icon>
              </span>
                Leveltest: {{ data.course.leveltest.name }} of {{ data.user.firstName }} {{ data.user.lastName }}
          </p>
            <router-link style="color:red; font-size: 14px; margin-left: 300px;" :to="'/assessor/leveltest/' + data._id">Start</router-link>
      </div>  
      </div>
</template>

<script>
export default {
    name: 'BoardLeveltestCard',
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
.fx-con {
    display: flex;
}
.jus-sb {
    justify-content: space-between;
}
</style>