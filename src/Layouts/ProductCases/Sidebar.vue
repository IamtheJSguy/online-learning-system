<template>
    <div class="sidebar">
        <div class="sidebar-header">
            <p>
                <b-icon icon="arrow-left" style="font-size: 24px;"></b-icon> {{ $route.name }}
            </p>
        </div>
        <div class="sidebar-content">
            <button
                v-for="route in getRoutes()"
                :key="route.path"
                :class="activeRoute(route)"
                @click="() => {
                    $router.push(route.path)
                }"
            >
                {{ route.name }}
            </button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Sidebar',
    data () {
        return {
            adminRoutes: [
                {
                    path: '/productcases',
                    name: 'Admin Dashboard',
                },
                {
                    path: '/productcases/workflow',
                    name: 'Workflow',
                },
                {
                    path: '/productcases/adminworkflow',
                    name: 'Admin Workflow',
                },
                {
                    path: '/productcases/courses',
                    name: 'Resources',
                }
            ],
            candidateRoutes: [
                {
                    path: '/productcases/candidate',
                    name: 'Product Courses Catalogue',
                },
                {
                    path: '/productcases/my',
                    name: 'My Product Courses',
                },
                {
                    path: '/productcases/meetings',
                    name: 'My Appointments',
                },
                {
                    path: '/productcases/messages',
                    name: 'My Messages',
                }
            ],
            assessorRoutes: [
                {
                    path: '/productcases/coach',
                    name: 'Dashboard Coach',
                },
                {
                    path: '/productcases/coach/my',
                    name: 'My Product Courses',
                },
                {
                    path: '/productcases/claim',
                    name: 'Claim New',
                },
                {
                    path: '/productcases/coach/messages',
                    name: 'Messages',
                },
                {
                    path: '/productcases/meetings',
                    name: 'Meetings',
                },
                {
                    path: '/productcases/availability',
                    name: 'My Availability',
                },
                {
                    path: '/productcases/archieved',
                    name: 'Archieved Product Cases',
                }
            ],
            routes: [
                {
                    name: 'PRODUCT COURSES CATALOG',
                    path: '/productcases'
                },
            ]
        }
    },
    computed: {
        ...mapState({
            user: state => state.user
        })
    },
    methods: {
        activeRoute(route) {
            if (this.$route.path === route.path) {
                return 'sidebar-button active'
            } else {
                return 'sidebar-button'
            }
        },
        getRoutes() {
            if (this.user.role === 'admin') {
                return this.adminRoutes
            } else if (this.user.role === 'candidate') {
                return this.candidateRoutes
            } else {
                return this.assessorRoutes
            }
        }
    }
}
</script>

<style scoped>
.sidebar {
    width: 300px;
}
.sidebar-header {
    height: 100px;
    background-color: #19181F;
    width: 100%;
    padding-top: 60px;
}
.sidebar-content {
    margin-top: 10px;
    height: calc(100vh - 110px);
    background-color: #19181F;
    position: relative;
    width: 100%;
    padding: 10px;
    overflow-x: scroll;
}
.sidebar-button {
    background: none;
    border-radius: 10px;
    color: #FFFFFF;
    font-size: 12px;
    outline: none;
    border: none;
    text-transform: uppercase;
    margin: 5px 0;
    width: 100%;
    padding: 10px 0;
}
.active {
    background-color: #D6000E;
}
.sidebar-header p {
    text-align: left;
    padding: 10px;
    color: #ffffff;
    font-weight: 700;
}
</style>