import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/assessor/setpassword/:id',
    name: 'Assessor Password',
    component: () => import('@/views/Assessors/SetPassword.vue')
  },
  {
    path: '/assessor/setprofile/:id',
    name: 'Assessor Set Profile',
    component: () => import('@/views/Assessors/SetProfile.vue')
  },
  {
    path: '/start',
    name: 'Start',
    component: () => import('@/Layouts/Starting'),
    children: [
      {
        path: '',
        name: 'Start',
        component: () => import('@/views/Start')
      }
    ]
  },
  {
    path: '/admin/leveltest',
    name: 'Admin Dashboard Layout',
    component: () => import('@/Layouts/Main'),
    redirect: '/admin/leveltest',
    children: [
      {
        path: '',
        name: 'Admin Level Test Layout',
        component: () => import('@/Layouts/LevelTest'),
        redirect: '/admin/leveltest',
        children: [
          {
            path: '',
            name: 'Admin Leveltest Overview',
            component: () => import('@/views/LevelTest/index.vue')
          },
          {
            path: 'competence/:id',
            name: 'Admin Edit Competence',
            component: () => import('@/views/LevelTest/SubCompetence/index.vue')
          },
          {
            path: 'subcompetence/:id',
            name: 'Admin Edit Sub Competence',
            component: () => import('@/views/LevelTest/SubCompetence/Update.vue')
          },
          {
            path: ':id',
            name: 'Admin Edit LevelTest',
            component: () => import('@/views/LevelTest/Competence/index.vue')
          },

        ]
      }
    ]
  },
  {
    path: '/admin/workflow',
    name: 'Admin Dashboard Layout',
    component: () => import('@/Layouts/Main'),
    redirect: '/admin/workflow',
    children: [
      {
        path: '',
        name: 'Admin Level Test Layout',
        component: () => import('@/Layouts/LevelTest'),
        redirect: '/admin/workflow',
        children: [
          {
            path: '',
            name: 'Workflow',
            component: () => import('@/views/LevelTest/Start/MyLevelTest.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/admin/courses',
    name: 'Admin Dashboard Layout',
    component: () => import('@/Layouts/Main'),
    redirect: '/admin/courses',
    children: [
      {
        path: '',
        name: 'Admin Level Test Layout',
        component: () => import('@/Layouts/LevelTest'),
        redirect: '/admin/courses',
        children: [
          {
            path: '',
            name: 'Admin Courses',
            component: () => import('@/views/LevelTest/Courses/index.vue')
          },
          {
            path: 'add',
            name: 'Add Admin Courses',
            component: () => import('@/views/LevelTest/Courses/Create.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/admin/resources',
    name: 'Admin Dashboard Layout',
    component: () => import('@/Layouts/Main'),
    redirect: '/admin/resources',
    children: [
      {
        path: '',
        name: 'Admin Level Test Layout',
        component: () => import('@/Layouts/LevelTest'),
        redirect: '/admin/resources',
        children: [
          {
            path: '',
            name: 'Overview Assessors',
            component: () => import('@/views/LevelTest/Assessors/index.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/productcases',
    name: ' Dashboard Layout',
    component: () => import('@/Layouts/Main'),
    redirect: '/productcases',
    children: [
      {
        path: '',
        name: 'Product Cases Layout',
        component: () => import('@/Layouts/ProductCases'),
        redirect: '/productcases',
        children: [
          {
            path: '',
            name: 'Product Cases',
            component: () => import('@/views/ProductCases/index.vue')
          },
          {
            path: 'add',
            name: 'Add Product Cases',
            component: () => import('@/views/ProductCases/Admin/Create.vue')
          },
          {
            path:'buycourses',
            name:'Buy Course',
            component:()=> import('@/views/ProductCases/Candidate/BuyCourses.vue')
          },
          {
            path:'claim',
            name:'Claim Product Case',
            component:()=> import('@/views/ProductCases/Assessor/Claim.vue')
          },
          {
            path:'coach',
            name:'Coach Dashboard',
            component:()=> import('@/views/ProductCases/Assessor/index.vue')
          },
          {
            path:'meetings',
            name:'My Meetings',
            component:()=> import('@/views/ProductCases/Meetings/index.vue')
          },
          {
            path:'meetings/:id',
            name:'Meeting',
            component:()=> import('@/views/ProductCases/Meetings/MeetingFrame.vue')
          },
          {
            path:'coach/:id',
            name:'Buy Course',
            component:()=> import('@/views/ProductCases/Assessor/Detail.vue')
          },
          {
            path:'checkout',
            name:'CheckOut',
            component:() => import('@/views/ProductCases/Candidate/CheckOut.vue')
          },
          
          {
            path:'availcourses',
            name:'Available Courses',
            component:() => import('@/views/ProductCases/Candidate/AvailCourses.vue')
          },
          {
            path:'instructorselection',
            Name:'Insturctor Selection',
            component:()=> import('@/views/ProductCases/Candidate/InstructorSelection')
          },
          {
            path: 'candidate',
            name: 'Candidate Product Cases Overview',
            component: () => import('@/views/ProductCases/Candidate/index.vue')
          },
          {
            path: 'my',
            name: 'My Product Cases Overview',
            component: () => import('@/views/ProductCases/Candidate/MyProductCases.vue')
          },
          {
            path: 'my/:id',
            name: 'My Product Cases Detail',
            component: () => import('@/views/ProductCases/Candidate/Detail.vue')
          },
          {
            path: 'buy/:id',
            name: 'Buy Product Cases',
            component: () => import('@/views/ProductCases/Candidate/Buy.vue')
          },
          {
            path: ':id',
            name: 'Update Product Cases',
            component: () => import('@/views/ProductCases/Admin/Update.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/candidate/leveltest',
    name: 'Candidate Dashboard Layout',
    component: () => import('@/Layouts/Main'),
    redirect: '/candidate/leveltest',
    children: [
      {
        path: '',
        name: 'Candidate Level Test Layout',
        component: () => import('@/Layouts/LevelTest'),
        redirect: '/candidate/leveltest',
        children: [
          {
            path: '',
            name: 'Candidate Leveltest Overview',
            component: () => import('@/views/Candidates/Leveltests/index.vue')
          },
          {
            path: 'competence/:id',
            name: 'Admin Edit Competence',
            component: () => import('@/views/LevelTest/Start/EditCompetence.vue')
          },
          {
            path: 'subcompetence/:id',
            name: 'Admin Edit Sub Competence',
            component: () => import('@/views/LevelTest/Start/NewSubCompetence.vue')
          },
          {
            path: ':id',
            name: 'Admin Edit LevelTest',
            component: () => import('@/views/Candidates/Leveltests/Detail.vue')
          },
        ]
      }
    ]
  },
  {
    path: '/assessor/leveltest',
    name: 'Assessor Dashboard Layout',
    component: () => import('@/Layouts/Main'),
    redirect: '/assessor/leveltest',
    children: [
      {
        path: '',
        name: 'Assessor Level Test Layout',
        component: () => import('@/Layouts/LevelTest'),
        redirect: '/assessor/leveltest',
        children: [
          {
            path: '',
            name: 'Assessor Assessment Board',
            component: () => import('@/views/Assessors/LevelTests/Board.vue')
          },
          {
            path: 'new',
            name: 'Assessor New Leveltest',
            component: () => import('@/views/Assessors/LevelTests/New.vue')
          },
          {
            path: 'my',
            name: 'Assessor My Leveltest',
            component: () => import('@/views/Assessors/LevelTests/My.vue')
          },
          {
            path: 'competence/:id',
            name: 'Admin Edit Competence',
            component: () => import('@/views/LevelTest/Start/EditCompetence.vue')
          },
          {
            path: 'subcompetence/:course/:id',
            name: 'My Course',
            component: () => import('@/views/Assessors/LevelTests/Assess.vue')
          },
          {
            path: ':id',
            name: 'Assessor Leveltest Detail',
            component: () => import('@/views/Assessors/LevelTests/Detail.vue')
          },
        ]
      }
    ]
  },
  {
    path: '/candidate/courses',
    name: 'Candidate Dashboard Layout',
    component: () => import('@/Layouts/Main'),
    redirect: '/candidate/courses',
    children: [
      {
        path: '',
        name: 'Candidate Level Test Layout',
        component: () => import('@/Layouts/LevelTest'),
        redirect: '/candidate/courses',
        children: [
          {
            path: '',
            name: 'My Courses',
            component: () => import('@/views/Candidates/Courses/index.vue')
          },
          {
            path: 'subcompetence/:course/:id',
            name: 'My Course',
            component: () => import('@/views/Candidates/SubCompetences/index.vue')
          },
          {
            path: ':id',
            name: 'My Course',
            component: () => import('@/views/Candidates/Courses/Detail.vue')
          },
        ]
      }
    ]
  },
  {
    path: '/candidate/competences',
    name: 'Candidate Dashboard Layout',
    component: () => import('@/Layouts/Main'),
    redirect: '/candidate/competences',
    children: [
      {
        path: '',
        name: 'Candidate Level Test Layout',
        component: () => import('@/Layouts/LevelTest'),
        redirect: '/candidate/competences',
        children: [
          {
            path: '',
            name: 'Candidate Leveltest Overview',
            component: () => import('@/views/LevelTest/Start/AdminCourses.vue')
          },
          {
            path: 'competence/:id',
            name: 'Admin Edit Competence',
            component: () => import('@/views/LevelTest/Start/EditCompetence.vue')
          },
          {
            path: 'subcompetence/:id',
            name: 'Admin Edit Sub Competence',
            component: () => import('@/views/LevelTest/Start/NewSubCompetence.vue')
          },
          {
            path: ':id',
            name: 'Admin Edit LevelTest',
            component: () => import('@/views/LevelTest/Start/EditLevelTest.vue')
          },

        ]
      }
    ]
  },
  {
    path: '/candidate/personalplan',
    name: 'Candidate Dashboard Layout',
    component: () => import('@/Layouts/Main'),
    redirect: '/candidate/personalplan',
    children: [
      {
        path: '',
        name: 'Candidate Level Test Layout',
        component: () => import('@/Layouts/LevelTest'),
        redirect: '/candidate/personalplan',
        children: [
          {
            path: '',
            name: 'Candidate Leveltest Overview',
            component: () => import('@/views/LevelTest/Start/AdminCourses.vue')
          },
          {
            path: 'competence/:id',
            name: 'Admin Edit Competence',
            component: () => import('@/views/LevelTest/Start/EditCompetence.vue')
          },
          {
            path: 'subcompetence/:id',
            name: 'Admin Edit Sub Competence',
            component: () => import('@/views/LevelTest/Start/NewSubCompetence.vue')
          },
          {
            path: ':id',
            name: 'Admin Edit LevelTest',
            component: () => import('@/views/LevelTest/Start/EditLevelTest.vue')
          },

        ]
      }
    ]
  },
  {
    path: '/leveltest',
    name: 'Dashboard Layout',
    component: () => import('@/Layouts/Main'),
    redirect: '/leveltest',
    children: [
      {
        path: '',
        name: 'Level Test Layout',
        component: () => import('@/Layouts/LevelTest'),
        redirect: '/leveltest/start',
        children: [
          {
            path: 'start',
            name: 'Start Leveltest',
            component: () => import('@/views/LevelTest/Start/index.vue')
          },
          {
            path: 'myleveltests',
            name: 'My Leveltest',
            component: Home
          },
          {
            path: 'personalplan',
            name: 'Leveltest Personal Plan',
            component: () => import('@/views/LevelTest/Start/PersonalPlan.vue')
          },
          {
            path: 'mycourses',
            name: 'My Leveltest Course',
            component: Home
          },
          {
            path: 'productmanager',
            name: 'Leveltest Product Manager',
            component: () => import('@/views/LevelTest/Start/ProductManager.vue')
          },
          {
            path: 'overview',
            name: 'Leveltest Overview',
            component: () => import('@/views/LevelTest/Start/Overview.vue')
          },
          {
            path: 'editsub',
            name: 'Editsub-Complete',
            component: () => import('@/views/LevelTest/Start/Editsub-Complete.vue')
          },
           { path: 'subcompetences',
             name: 'Sub-Competences',
            component: () => import('@/views/LevelTest/Start/SubCompetences.vue')
          },
          { path: 'leveltestproduct',
            name: 'LevelTestProduct',
            component: () => import('@/views/LevelTest/Start/LevelTestProduct2021.vue')
           },
           {
             path:'personalplans',
             name:'LevelTestPersonalPlans',
             component: () => import('@/views/LevelTest/Start/LTPersonalPlans.vue')
           },
           {
           path: 'assesor',
           name: 'OverView Assessor',
           component:() => import('@/views/LevelTest/Start/OverviewAssesor.vue')
          },
          {
            path: 'assesment',
            name:'Assesment Board',
            component: () => import('@/views/LevelTest/Start/AssesmentBoard.vue')
          },
          {
            path: 'myleveltest',
            name:'My Level Test',
            component: () => import('@/views/LevelTest/Start/MyLevelTest.vue')
          },
          {
            path:'Leveltest-Course',
            name:'LevelTest-Courses',
            component:() =>import('@/views/LevelTest/Start/FirstPage.vue')
          },
          {
            path:'checkout',
            name :'Check Out',
            component:() => import('@/views/LevelTest/Start/CheckOut.vue')
          },
          {
            path:'addcompetences',
            name: "Add Competences",
            component:() => import('@/views/LevelTest/Start/AddCompetence.vue')
          },
          {
            path:'eidtname',
            name:'Edit Name',
            component:() => import('@/views/LevelTest/Start/EditLevelTest.vue')
          },
          {
            path:'certifiedleveltest',
            name: 'Certified LevelTest',
            component:() => import('@/views/LevelTest/Start/CertifiedLevelTest.vue')
          },
        
         
        ]
      },
      {
        path: 'courses',
        name: 'Courses',
        component: () => import('@/Layouts/LevelTest'),
        redirect: '/courses/start',
        children: [
          {
            path: 'start',
            name: 'Start Courses',
            component: Home
          },
          {
            path: 'myleveltests',
            name: 'My Leveltest Courses',
            component: Home
          },
          {
            path: 'personalplan',
            name: 'Personal Courses Plan',
            component: Home
          },
          {
            path: 'mycourses',
            name: 'My Courses',
            component: Home
          }
        ]
      },
      {
        path: 'sks',
        name: 'SKS',
        component: () => import('@/Layouts/LevelTest'),
        redirect: '/sks/start',
        children: [
          {
            path: 'start',
            name: 'Start SKS',
            component: Home
          },
          {
            path: 'myleveltests',
            name: 'My SKS',
            component: Home
          },
          {
            path: 'personalplan',
            name: 'SKS Plan',
            component: Home
          },
          {
            path: 'mycourses',
            name: 'My SKS Courses',
            component: Home
          }
        ]
      },
      {
        path: 'community',
        name: 'Community',
        component: () => import('@/Layouts/LevelTest'),
        redirect: '/community/start',
        children: [
          {
            path: 'start',
            name: 'Start Community',
            component: Home
          },
          {
            path: 'myleveltests',
            name: 'My Community',
            component: Home
          },
          {
            path: 'personalplan',
            name: 'Community Personal Plan',
            component: Home
          },
          {
            path: 'mycourses',
            name: 'My Community Courses',
            component: Home
          }
        ]
      },
      {
        path: 'jobs',
        name: 'Jobs',
        component: () => import('@/Layouts/LevelTest'),
        redirect: '/jobs/start',
        children: [
          {
            path: 'start',
            name: 'Start Jobs',
            component: Home
          },
          {
            path: 'myleveltests',
            name: 'My Jobs',
            component: Home
          },
          {
            path: 'personalplan',
            name: 'Jobs Personal Plan',
            component: Home
          },
          {
            path: 'mycourses',
            name: 'Jobs My Courses',
            component: Home
          }
        ]
      }
    ]
  },
  {
    path: '/courses',
    name: 'Dashboard Layout',
    component: () => import('@/Layouts/Main'),
    redirect: '/courses',
    children: [
      {
        path: '',
        name: 'Courses Layout',
        component: () => import('@/Layouts/LevelTest'),
        redirect: '/courses/start',
        children: [
          {
            path: 'start',
            name: 'Start Courses',
            component: Home
          },
          {
            path: 'myleveltests',
            name: 'My Leveltest Courses',
            component: Home
          },
          {
            path: 'personalplan',
            name: 'Personal Courses Plan',
            component: Home
          },
          {
            path: 'mycourses',
            name: 'My Courses',
            component: Home
          }
        ]
      }
    ]
  },
  {
    path: '/sks',
    name: 'Dashboard Layout',
    component: () => import('@/Layouts/Main'),
    redirect: '/sks',
    children: [
      {
        path: '',
        name: 'SKS Layout',
        component: () => import('@/Layouts/LevelTest'),
        redirect: '/sks/start',
        children: [
          {
            path: 'start',
            name: 'Start SKS',
            component: Home
          },
          {
            path: 'myleveltests',
            name: 'My SKS',
            component: Home
          },
          {
            path: 'personalplan',
            name: 'SKS Plan',
            component: Home
          },
          {
            path: 'mycourses',
            name: 'My SKS Courses',
            component: Home
          }
        ]
      }
    ]
  },
  {
    path: '/community',
    name: 'Dashboard Layout',
    component: () => import('@/Layouts/Main'),
    redirect: '/community',
    children: [
      {
        path: '',
        name: 'Community Layout',
        component: () => import('@/Layouts/LevelTest'),
        redirect: '/community/start',
        children: [
          {
            path: 'start',
            name: 'Start Community',
            component: Home
          },
          {
            path: 'myleveltests',
            name: 'My Community',
            component: Home
          },
          {
            path: 'personalplan',
            name: 'Community Personal Plan',
            component: Home
          },
          {
            path: 'mycourses',
            name: 'My Community Courses',
            component: Home
          }
        ]
      }
    ]
  },
  {
    path: '/jobs',
    name: 'Dashboard Layout',
    component: () => import('@/Layouts/Main'),
    redirect: '/jobs',
    children: [
      {
        path: '',
        name: 'Jobs Layout',
        component: () => import('@/Layouts/LevelTest'),
        redirect: '/jobs/start',
        children: [
          {
            path: 'start',
            name: 'Start Jobs',
            component: Home
          },
          {
            path: 'myleveltests',
            name: 'My Jobs',
            component: Home
          },
          {
            path: 'personalplan',
            name: 'Jobs Personal Plan',
            component: Home
          },
          {
            path: 'mycourses',
            name: 'Jobs My Courses',
            component: Home
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
