<template>
    <div class="main-sidebar">
        <img class="mt-5 mb-3" src="@/assets/icons/logo.png" height="50" alt="">
        <button
            v-for="route in routes"
            :key="route.path"
            :class="sidebarClass(route)"
            @click="() => {
                $router.push(route.path)
            }"
        >
            <img :src="route.icon" alt="" height="20">
        </button>
        <img class="profile-icon" src="@/assets/icons/profile.png" height="50" alt="">
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Sidebar',
    data() {
        return {
            routes: [
                {
                    name: 'Leveltest',
                    path: '/leveltest/start',
                    icon: require('@/assets/icons/level.png')
                },
                {
                    name: 'Product Cases',
                    path: '/productcases',
                    icon: require('@/assets/icons/mycourses.svg')
                }
            ]
        }
    },
    computed: {
        ...mapState({
            user: state => state.user
        })
    },
    created() {
        if (this.user.role === 'candidate') {
            this.routes[7].path = '/productcases/candidate'
        } else if (this.user.role === 'assessor') {
            this.routes[7].path = '/productcases/coach'
        }
    },
    methods: {
        sidebarClass (route) {
            const routeName = this.$route.name
            const isIncluded = routeName.includes(route.name)
            if (isIncluded) {
                return 'sidebar-button active'
            } else {
                return 'sidebar-button'
            }
        }
    }
}
</script>

<style scoped>
.main-sidebar {
    height: 100vh;
    position: relative;
    background-color: #1C1A25;
    width: 60px;
}
.sidebar-button {
    margin: 5px auto;
    height: 50px;
    width: 50px;
    display: block;
    background-color: transparent;
    color: #fff;
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    outline: none;
    border: none;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.active {
    background-color: #D6000E;
    border-radius: 8px;
}
.profile-icon {
    position: absolute;
    bottom: 10px;
    left: 3px;
}
</style>
