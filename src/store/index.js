import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('currentUser')) {
        const user = JSON.parse(localStorage.getItem('currentUser'))
        axios({
          url: `users/${user._id}`,
          method: 'GET'
        })
          .then(
            (response) => {
              const currentUser = response.data.data
              state.user = currentUser
              localStorage.setItem('currentUser', JSON.stringify(currentUser))
              localStorage.setItem('token', currentUser.token)
              axios.defaults.headers.common.Authorization = currentUser.token
            }
          )
          .catch(
            (error) => {
              if (error) {
                localStorage.removeItem('currentUser')
                localStorage.removeItem('token')
              }
            }
          )
        state.user = JSON.parse(localStorage.getItem('currentUser'))
      }
    },
    currentUser(state, currentUser) {
      state.user = currentUser
      if (!currentUser) {
        state.user = currentUser
        localStorage.removeItem('currentUser')
        localStorage.removeItem('token')
        axios.defaults.headers.common.Authorization = null
      } else {
        if (currentUser.email) {
          state.user = currentUser
          localStorage.setItem('currentUser', JSON.stringify(currentUser))
          localStorage.setItem('token', currentUser.token)
          axios.defaults.headers.common.Authorization = currentUser.token
        }
      }
    },
    Data(state, data) {
      state.data = data
    },
    search(state, query) {
      state.searchQuery = query
    }
  },
  actions: {
    registerUser({ commit }, payload) {
      console.log('Stores registertion')
      commit('Data', payload)
      return axios({
        url: '/users',
        method: 'POST',
        data: payload
      })
    },
    createUser({ commit }, payload) {
      commit('Data', payload)
      return axios({
        url: '/users/create',
        method: 'POST',
        data: payload
      })
    },
    userLogin({ commit }, payload) {
      commit('Data', payload)
      return axios({
        url: '/users/login',
        method: 'POST',
        data: payload
      })
    },
    getUsers({ commit }, type) {
      commit('Data', {})
      return axios({
        url: `/users?type=${type}`,
        method: 'GET'
      })
    },
    updateUser({ commit }, data) {
      commit('Data', data)
      return axios({
        url: `/users/${data.id}`,
        method: 'PATCH',
        data: data.payload
      })
    },
    forgotPassword({ commit }, payload) {
      commit('Data', payload)
      return axios({
        url: '/users/forgotpassword',
        method: 'POST',
        data: payload
      })
    },
    changePassword({ commit }, payload) {
      commit('Data', payload)
      return axios({
        url: '/users/changepassword',
        method: 'POST',
        data: payload
      })
    },
    updatePassword({ commit }, data) {
      commit('Data', data)
      return axios({
        url: `/users/updatepassword/${data.id}`,
        method: 'PATCH',
        data: data.payload
      })
    },
    updateCurrentUser({ commit }) {
      if (localStorage.getItem('currentUser')) {
        const user = JSON.parse(localStorage.getItem('currentUser'))
        axios({
          url: `users/${user._id}`,
          method: 'GET'
        })
          .then(
            (response) => {
              localStorage.setItem('currentUser', JSON.stringify(response.data.data))
              commit('currentUser', JSON.parse(localStorage.getItem('currentUser')))
            }
          )
          .catch(
            (error) => {
              if (error) {
                localStorage.removeItem('userId')
                localStorage.removeItem('currentUser')
                localStorage.removeItem('token')
              }
            }
          )
      }
    },
    userVerification({ commit }, payload) {
      commit('Data', payload)
      return axios({
        url: '/users/verify',
        method: 'POST',
        data: payload
      })
    },
    updateSessionUser({ commit }, user) {
      commit('currentUser', user)
    },
    createLevelTest({ commit }, payload) {
      commit('Data', {})
      return axios({
        url: '/leveltest',
        method: 'POST',
        data: payload
      })
    },
    getLevelTests({commit}) {
      commit('Data')
      return axios({
        url: '/leveltest',
        method: 'GET'
      })
    },
    getLevelTest({ commit }, id) {
      commit('Data', {})
      return axios({
        url: `/leveltest/${id}`,
        method: 'GET'
      })
    },
    updateLeveltest({ commit }, data) {
      commit('Data', {})
      return axios({
        url: `/leveltest/${data.id}`,
        method: 'PATCH',
        data: data.payload
      })
    },
    createCompetence({ commit }, payload) {
      commit('Data', {})
      return axios({
        url: '/competence',
        method: 'POST',
        data: payload
      })
    },
    getCompetence({ commit }, id) {
      commit('Data', {})
      return axios({
        url: `/competence/${id}`,
        method: 'GET'
      })
    },
    updateCompetence({ commit }, data) {
      commit('Data', {})
      return axios({
        url: `/competence/${data.id}`,
        method: 'PATCH',
        data: data.payload
      })
    },
    createSubCompetence({ commit }, payload) {
      commit('Data', {})
      return axios({
        url: '/subcompetence',
        method: 'POST',
        data: payload
      })
    },
    getSubCompetence({ commit }, id) {
      commit('Data', {})
      return axios({
        url: `/subcompetence/${id}`,
        method: 'GET'
      })
    },
    getSubCompetenceDetail({ commit }, id) {
      commit('Data', {})
      return axios({
        url: `/subcompetence/detail/${id}`,
        method: 'GET'
      })
    },
    updateSubCompetence({ commit }, data) {
      commit('Data', {})
      return axios({
        url: `/subcompetence/${data.id}`,
        method: 'PATCH',
        data: data.payload
      })
    },
    createCourse({ commit }, payload) {
      commit('Data', {})
      return axios({
        url: '/course',
        method: 'POST',
        data: payload
      })
    },
    getCourses({commit}) {
      commit('Data', {})
      return axios({
        url: '/course',
        method: 'GET'
      })
    },
    getCourse({commit}, id) {
      commit('Data', {})
      return axios({
        url: `/course/${id}`,
        method: 'GET'
      })
    },
    addAssessor({ commit }, payload) {
      commit('Data', {})
      return axios({
        url: '/users/assessors',
        method: 'POST',
        data: payload
      })
    },
    getAssessors({ commit }) {
      commit('Data', {})
      return axios({
        url: '/users/assessors',
        method: 'GET'
      })
    },
    buyCourse({ commit }, id) {
      commit('Data', {})
      return axios({
        url: `/course/buy/${id}`,
        method: 'GET'
      })
    },
    candidateCourses({ commit }) {
      commit('Data', {})
      return axios({
        url: '/candidates/courses',
        method: 'GET'
      })
    },
    candidateCoursesByAssessor({ commit }) {
      commit('Data', {})
      return axios({
        url: '/candidates/courses/assessor',
        method: 'GET'
      })
    },
    candidateCoursesByAssessors({ commit }) {
      commit('Data', {})
      return axios({
        url: '/candidates/courses/assessors',
        method: 'GET'
      })
    },
    getCandidateCourse({ commit }, id) {
      commit('Data', {})
      return axios({
        url: `/candidates/courses/${id}`,
        method: 'GET'
      })
    },
    getCandidateSubCompetence({ commit }, id) {
      commit('Data', {})
      return axios({
        url: `/candidates/subcompetences/${id}`,
        method: 'GET'
      })
    },
    attempCandidateSubCompetence({ commit }, data) {
      commit('Data', {})
      return axios({
        url: `/candidates/subcompetences/attemp/${data.id}`,
        method: 'PATCH',
        data: data.payload
      })
    },
    updateCandidateSubCompetence({ commit }, data) {
      commit('Data', {})
      return axios({
        url: `/candidates/subcompetences/${data.id}`,
        method: 'PATCH',
        data: data.payload
      })
    },
    setAssessorPassword({ commit }, data) {
      commit('Data', {})
      return axios({
        url: `/users/assessors/password/${data.id}`,
        method: 'PATCH',
        data: data.payload
      })
    },
    claimCourse({ commit }, data) {
      commit('Data', {})
      return axios({
        url: `/candidates/courses/${data.id}`,
        method: 'PATCH',
        data: data.payload
      })
    },
    createProductCase({ commit }, payload) {
      commit('Data', {})
      return axios({
        url: '/productcases',
        method: 'POST',
        data: payload
      })
    },
    getProductCases({commit}) {
      commit('Data', {})
      return axios({
        url: '/productcases',
        method: 'GET'
      })
    },
    updateProductCase({ commit }, data) {
      commit('Data', {})
      return axios({
        url: `/productcases/${data.id}`,
        method: 'PATCH',
        data: data.payload
      })
    },
    getProductCase({commit}, id) {
      commit('Data', {})
      return axios({
        url: `/productcases/${id}`,
        method: 'GET'
      })
    },
    buyProductCase({ commit }, id) {
      commit('Data', {})
      return axios({
        url: `/productcases/buy/${id}`,
        method: 'GET'
      })
    },
    getMyProductCases({commit}) {
      commit('Data', {})
      return axios({
        url: '/candidate/productcases',
        method: 'GET'
      })
    },
    getMyProductCase({commit}, id) {
      commit('Data', {})
      return axios({
        url: `/candidate/productcases/${id}`,
        method: 'GET'
      })
    },
    updateMyProductCase({ commit }, data) {
      commit('Data', {})
      return axios({
        url: `/candidate/productcases/${data.id}`,
        method: 'PATCH',
        data: data.payload
      })
    },
    candidateProductCasesByAssessor({ commit }) {
      commit('Data', {})
      return axios({
        url: '/candidate/productcases/assessor',
        method: 'GET'
      })
    },
    candidateProductCasesByAssessors({ commit }) {
      commit('Data', {})
      return axios({
        url: '/candidate/productcases/assessors',
        method: 'GET'
      })
    },
    claimCandiateProductCase({ commit }, id) {
      commit('Data', {})
      return axios({
        url: `/candidate/productcases/claim/${id}`,
        method: 'GET'
      })
    },
    createMeeting({ commit }, payload) {
      commit('Data', {})
      return axios({
        url: '/meetings',
        method: 'POST',
        data: payload
      })
    },
    getMyMeetings({ commit }) {
      commit('Data', {})
      return axios({
        url: '/meetings/users',
        method: 'GET'
      })
    },
    getMeeting({ commit }, id) {
      commit('Data', {})
      return axios({
        url: `/meetings/${id}`,
        method: 'GET'
      })
    }
  },
  modules: {}
})
