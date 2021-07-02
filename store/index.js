import routerScrollBehavior from "../.nuxt/router.scrollBehavior"
import { setContext } from "../.nuxt/utils"
import middleware from "../middleware"

export const state = () => ({
})

// export const getters = () => ({
//   isAuthenticated(state) {
//     this.auth.loggedIn = state.auth.loggedIn
//   },

//   loggedInUser(state) {
//     this.user = state.user
//   }
// })
export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  }
}

export const mutations = {
    UPDATE_TOKEN(state, accessToken) {
      this.$auth.setUserToken(accessToken, accessToken)
      window.$nuxt.$cookies.set('accessToken', accessToken, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      })
      console.log('here')
  },
}

export const actions = {
  async signin({ dispatch }, credentials) {
    try {
      await this.$axios.post('http://127.0.0.1:8000/api/token/signup/', credentials)
      // this.$auth.loginWith('local', { credentials })
      console.log('가입됨')
      this.$router.push('/')
      return dispatch('login', credentials)
    } 
    catch (error) {
      console.log(error)
    }
    // .then(() => {
    //   context.dispatch('login', credentials)
    // })
    // .catch(err => {
    //   console.log(err)
    // })
  },
  async login({ commit }, credentials) {
    let log = await this.$axios.post('http://127.0.0.1:8000/api/token/', credentials)
    if(process.browser){
      localStorage.setItem('access_token', log.data.access)
    }
    return commit('UPDATE_TOKEN', log.data.access)
    // .then(res => {
    //   localStorage.setItem('access_token', res.data.access)
    //   context.commit('UPDATE_TOKEN', res.data.access)
    // })
    // .catch(err => {
    //   console.log(err)
    // })
  },
}
// })

// asyncData() {
//     state.accessToken = window.localStorage.getItem('accessToken')
//   }

export default {
  state,
  getters,
  actions,
  mutations
}