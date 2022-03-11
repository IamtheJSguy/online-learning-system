<template>
    <div class="main-sidebar">
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
        <img class="mt-3" src="@/assets/icons/profile.png" height="30" alt="">
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'MainMobileSidebar',
    data() {
        return {
            routes: [
                {
                    name: 'Leveltest',
                    path: '/leveltest/start',
                    icon: require('@/assets/icons/level.png')
                },
                {
                    name: 'My Courses',
                    path: '/leveltest/start',
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
    height: 60px;
    position: relative;
    background-color: #1C1A25;
    display: flex;
    width: 100%;    
    max-width: 100%;
    overflow-x: scroll;
}
.sidebar-button {
    margin: 5px;
    height: 50px;
    min-height: 50px;
    width: 50px;
    min-width: 50px;
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
</style>
