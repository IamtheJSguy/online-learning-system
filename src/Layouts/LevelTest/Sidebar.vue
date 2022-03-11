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
                    path: '/admin/leveltest',
                    name: 'LevelTest',
                },
                {
                    path: '/admin/workflow',
                    name: 'Workflow',
                },
                {
                    path: '/admin/courses',
                    name: 'Courses',
                },
                {
                    path: '/admin/resources',
                    name: 'Resources',
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
                   {
                    path:'certifiedleveltest',
                    name: 'Certified LevelTest',
                   }
              
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
            if (this.$route.path.includes(route.path.toLowerCase().replace(/\s/g, ''))) {
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