<template>
    <div class="main-container">
        <div class="row" style="justify-content: center">
            <div class="col-lg-6 col-md-0 col-sm-0 main-container-background">
            </div>
            <div class="col-lg-6 col-md-8 col-sm-12 mt-5 pt-5 px-2" align="center">
                <div style="display: flex; justify-content: center">
                    <img src="@/assets/icons/logo.png" height="50" class="mt-2" alt="">
                    <div>
                        <p class="main-text">Welcome to PO/PM Global</p>
                        <p class="main-text">Sign In to getting started.</p>
                        <p class="fade-text">Enter your details to procees further.</p>
                    </div>
                </div>
                <form @submit="login">
                    <input type="email" v-model="form.email" id="email" placeholder="Email">
                    <input type="password" v-model="form.password" id="password" placeholder="Password">
                    <button
                        type="submit"
                        class="signin-btn"
                    >Sign In</button>
                </form>
                <button class="forpass">Forgot Password?</button>
                <button
                    class="forpass"
                    @click="() => {
                        $router.push('/register')
                    }">Signup</button>
                <p class="or">OR</p>
               
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data () {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        login(e) {
            e.preventDefault()
            this.$store.dispatch('userLogin', this.form)
                .then(
                    (response) => {
                        this.$store.commit('currentUser', response.data.data)
                        if (response.data.data.role === 'candidate') {
                            this.$router.push('/start')
                        } else if (response.data.data.role === 'admin') {
                            this.$router.push('/admin/leveltest')
                        } else {
                            this.$router.push('/assessor/leveltest')
                        }
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
.main-container {
    min-height: 100vh;
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
input {
    border: none;
    background-color: transparent;
    border-bottom: 1px solid grey;
    margin-top: 40px;
    width: 400px;
    outline: none;
    color: white;
}

.forpass {
    border: none;
    outline: none;
    background-color: transparent;
    color: red;
    font-size: 13px;
}

.signin-btn {
    border: none;
    outline: none;
    background-color: #D6000E;
    color: white;
    margin-top: 50px;
    width: 400px;
    border-radius: 8px;
    height: 35px;
}
.signin-links {
    background-color: transparent;
    border: 0.5px solid grey;
    color: white;
    border-radius: 5px;
    margin-top: 10px;
    width: 400px;
    text-align: left;
    height: 40px;
    outline: none;
}
.social-icon {
    padding: 10px;
    border-right: 1px solid grey;
}
.or {
  text-transform: uppercase;
  margin-top: 10px;
  color: #707070;
  font-size: 12px;
}
.or::before {
  content: '';
  width: 150px;
  height: 2px;
  background: #707070;
  display: inline-block;
  margin: 0 5px 3px 15px;
}
.or::after {
  content: '';
  width: 150px;
  height: 2px;
  background: #707070;
  display: inline-block;
  margin: 0 15px 3px 5px;
}
.main-container-background {
    background-image: url('../assets/auth/login.png');
    background-size: cover;
    background-position-x: right;
    min-height: 100vh;
}
@media screen and (max-width: 768px) {
    .main-container-background {
        display: none;
    }
}
</style>