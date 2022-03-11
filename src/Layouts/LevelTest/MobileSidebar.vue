<template>
    <div>
        <div v-if="toggleSidebar" class="sidebar">
            <div class="sidebar-header">
                <p>
                    <b-icon icon="arrow-left" style="font-size: 24px;"></b-icon> {{ $route.name }}
                </p>
                <button class="header-toggle-button toggle-button" @click="toggleSidebar = !toggleSidebar">
                    <img src="@/assets/icons/buttonBars.png" height="20" alt="">
                </button>
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
        <button v-if="!toggleSidebar" class="toggle-button-bg" @click="toggleSidebar = !toggleSidebar">
            <img src="@/assets/icons/buttonBars.png" height="20" alt="">
        </button>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'MobileSidebar',
    data () {
        return {
            toggleSidebar: false,
            adminRoutes: [
                {
                    path: '/admin/leveltest',
                    name: 'LevelTest',
                },
                {
                    path: '/admin/workflow',
                    name: 'Workflow',
                },
                {
                    path: '/admin/adminworkflow',
                    name: 'Admin Workflow',
                },
                {
                    path: '/admin/courses',
                    name: 'My Courses',
                }
            ],
            candidateRoutes: [
                {
                    path: '/candidate/leveltest',
                    name: 'LevelTest',
                },
                {
                    path: '/candidate/competences',
                    name: 'Competences',
                },
                {
                    path: '/candidate/personalplan',
                    name: 'Personal Plan',
                },
                {
                    path: '/candidate/courses',
                    name: 'My Courses',
                }
            ],
            assessorRoutes: [
                {
                    path: '/assessor/leveltest',
                    name: 'Leveltest',
                },
                {
                    path: '/assessor/leveltest/new',
                    name: 'New Leveltests',
                },
                {
                    path: '/assessor/leveltest/my',
                    name: 'My Leveltests',
                },
                {
                    path: '/assessor/leveltest/archive',
                    name: 'Archive',
                }
            ],
            routes: [
                {
                    name: 'Start',
                    path: '/leveltest/start'
                },
                {
                    name: 'My Leveltests',
                    path: '/leveltest/myleveltests'
                },
                {
                    name: 'Personal Plan',
                    path: '/leveltest/personalplan'
                },
                {
                    name: 'My Courses',
                    path: '/leveltest/mycourses'
                },
                {
                    name: 'Product Manager',
                    path: '/leveltest/productmanager'
                },
                {
                    name: 'Overview',
                    path: '/leveltest/overview'
                },
                {
                    name:'Product Manager',
                    path:'/leveltest/editsub'
                },
                {
                    name:'Sub-Competences',
                    path:'/leveltest/subcompetences'
                },
                {
                    name:'LevelTestProduct',
                    path:'/leveltest/leveltestproduct'
                },
                {
                    path:'personalplans',
                    name:'LevelTestPersonalPlans',
                },
                {
                    path: 'assesor',
                    name: 'OverView Assessor',
                },
                {
                    path: 'assesment',
                    name:'Assesment Board',
                },
                {
                    path: 'myleveltest',
                    name:'My Level Test',
                },
                {
                    path:'Leveltest-Course',
                     name:'LevelTest-Courses',
                },
                {
                    path:'checkout',
                    name :'Check Out',
                },
                {
                      path:'addcompetences',
                      name: 'Add Competences'
                },
                {
                    path:'eidtname',
                    name:'Edit Name',
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
            } else if (this.user.role === 'assessor') {
                return this.assessorRoutes
            } else {
                return this.routes
            }
        }
    }
}
</script>

<style scoped>
.sidebar {
    width: 300px;
    z-index: 2;
}
.sidebar-header {
    position: relative;
    height: 100px;
    background-color: #19181F;
    width: 100%;
    padding-top: 60px;
}
.sidebar-content {
    height: calc(100vh - 100px);
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
.header-toggle-button {
    position: absolute;
    top: 10px;
    right: 10px;
}
.toggle-button {
    border-radius: 5px;
    background-color: #1C1A25;
    border: none;
}
.toggle-button-bg {
    border-radius: 5px;
    background-color: #19181F;
    border: none;
    margin-top: 10px;
}
</style>