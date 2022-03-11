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
            <p><img :src="route.icon" alt="" height="20"><span class="item-name">{{ route.name}}</span></p>
        </button>
        <img class="profile-icon" src="@/assets/icons/profile.png" height="50" style="width: 50px;" alt="">
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
                    path: '/candidate/leveltest',
                    icon: require('@/assets/icons/level.png')
                },
              
                {
                    name: 'Product',
                    path: '/leveltest/start',
                    icon: require('@/assets/icons/productcases.png')
                },
                {
                    name: 'SKS Meetings',
                    path: '/leveltest/start',
                    icon: require('@/assets/icons/sks.png')
                },
                {
                    name: 'Knowledge Base',
                    path: '/leveltest/start',
                    icon: require('@/assets/icons/knowledgebase.svg')
                },
                {
                    name: 'Product Tools',
                    path: '/leveltest/start',
                    icon: require('@/assets/icons/producttools.svg')
                },
                {
                    name: 'Product Jobs',
                    path: '/leveltest/start',
                    icon: require('@/assets/icons/jobs.png')
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
    text-align: left;
    height: 100vh;
    position: relative;
    background-color: #19181F;
    width: 300px;
    padding: 10px;
}
.button-container {
    width: 100%;
    display: flex;
    justify-content: flex-start;
}
.item-name {
    margin-left: 20px;
    text-transform: uppercase;
    text-align: left;
    margin-top: 15px;
    font-size: 12px;
    color: #fff;
    font-weight: 500;
}
.sidebar-button {
    height: 50px;
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
