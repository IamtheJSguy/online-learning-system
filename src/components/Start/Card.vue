<template>
  <div
    @click="() => {
      if (popm.id === 2) { 
        $router.push(`/candidate/leveltest`)
      }
    }"
    class="module-container mt-5"
    :style="{
      backgroundColor: popm.backgroundColor ? popm.backgroundColor : '',
      backgroundImage: popm.backgroundImage
        ? `url(${popm.backgroundImage})`
        : '',
    }"
  >
    <div class="card-content" @click="popm.path">
      <p
        class="module-id mb-5"
        :style="{
          backgroundColor: popm.idBackground,
          color: popm.idBackground === '#D6000E' ? '#fff' : '#D6000E',
          textAlign: 'center',
        }"
      >
        {{ popm.id }}/8
      </p>
      <p class="module-heading">PO/PM</p>
      <p class="module-heading">{{ popm.heading }}</p>
      <p class="module-detail pr-3">{{ popm.detail }}</p>
      <div class="row mb-5">
        <div class="col-6 p-0" style="display: flex; justify-content: left">
          <div class="module-person-avatar">
            <img src="@/assets/images/person.png" height="23" />
          </div>
          <div class="module-person-avatar">
            <img src="@/assets/images/person.png" height="23" />
          </div>
          <div class="module-person-avatar">
            <img src="@/assets/images/person.png" height="23" />
          </div>
          <div class="module-person-avatar">
            <img src="@/assets/images/person.png" height="23" />
          </div>
          <div class="module-person-avatar">
            <img src="@/assets/images/person.png" height="23" />
          </div>
        </div>
        <div class="col-3">
          <p>
            <b-icon icon="heart-fill" :color="popm.id === 3 ? 'red' : 'white'"></b-icon>
            <span class="module-values">
              {{ popm.likes }}
            </span>
          </p>
        </div>
        <div class="col-3">
          <p>
            <b-icon icon="chat-text-fill" color="white"></b-icon>
            <span class="module-values">
              {{ popm.comments }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StartCard',
  props: {
    popm: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.module-container {
    height: 600px;
    width: 500px;
    padding: 10px;
    margin: 10px 20px;
    border-radius: 5px;
    position: relative;
    background-size: cover;
    cursor: pointer;
}
.card-content {
    position: absolute;
    width: 100%;
    padding: 10px;
    bottom: 20px;
    text-align: left;
}
.module-id {
    width: 60px;
    border-radius: 5px;
    margin: 0;
    padding: 0 5px;
    font-size: 10px;
    font-weight: 700;
    color: #fff;
}
.module-heading {
    font-size: 22px;
    margin: 0;
    font-weight: 700;
    color: #fff;
}
.module-detail {
    margin: 25px 0;
    font-size: 12px;
    color: #fff;
    text-align: justify;
    font-weight: 530;
}
.module-person-avatar {
    height: 20px;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #fff;
    padding: 0;
    width: 20px;
    margin: 2px !important;
}
.module-values {
    font-size: 10px;
    color: #fff;
}
</style>

<style lang="scss">
    ::-webkit-scrollbar {
        display: none;
        width: 0px !important;
        height: 0px;
    }

        /* Track */
    ::-webkit-scrollbar-track {
      display: none;
        background: #f1f1f1; 
        width: 0px !important;
    }
        
        /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888; 
    }

        /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }
</style>