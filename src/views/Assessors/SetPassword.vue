<template>
  <div class="row">
    <div class="col-lg-4 col-md-12 col-sm-12 form-container flex-con-center">
      <div>
        <div style="display: flex; justify-content: center">
          <img src="@/assets/icons/logo.png" height="50" class="mt-2" alt="" />
          <div>
            <p class="main-text">Welcome to PO/PM Global</p>
            <p class="fade-text">Set your password to continue.</p>
          </div>
        </div>
        <form @submit="setPassword">
          <input type="password" id="password" v-model="form.password" placeholder="Password" />
          <input type="password" v-model="form.confirmPassword" placeholder="Confirm Password" />
          <button type="submit">Set Password</button>
        </form>
      </div>
    </div>
    <div class="col-lg-8 col-md-0 col-sm-0 flex-con-center">
        <img
            src="@/assets/images/start_logo.png"
            alt=""
            height="60"
        />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SetPassword',
  data() {
    return {
      form: {
        password: '',
        confirmPassword: ''
      }
    }
  },
  created() {
    console.log(this.form)
  },
  methods: {
    setPassword(e) {
      e.preventDefault()
      const data = {
        id: this.$route.params.id,
        payload: this.form
      }
      this.$store.dispatch('setAssessorPassword', data)
        .then(
          (response) => {
            console.log(response.data.data)
            this.$router.push(`/assessor/setprofile/${this.$route.params.id}`)
          }
        )
        .catch(
          (error) => {
            console.log(error.response.data)
          }
        )
    }
  }
}
</script>

<style scoped>
.flex-con-center {
    display: flex;
    justify-content: center;
    align-items: center;
}
.form-container {
    height: 100vh;
    padding: auto 10px;
    background-color: #19181F;
}
input {
    border: none;
    background-color: transparent;
    border-bottom: 1px solid #cccccc33;
    margin-top: 10px;
    width: 100%;
    outline: none;
    color: white;
}
button {
    color: #fff;
    border: none;
    background-color: red;
    width: 100%;
    margin-top: 10px;
    height: 40px;
    border-radius: 5px;
    font-weight: bold;
}
.main-text {
    font-size: 24px;
    color: #fff;
    font-weight: 600;
    margin: 0 10px;
}
.fade-text {
    color: #707070;
    font-size: 13px;
    font-weight: 600;
}
</style>