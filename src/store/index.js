import { createStore } from 'vuex'

export default createStore({
  state: {
    theme: 'dark',
  },
  getters: {},
  mutations: {
    toogleTheme(state) {
      state.theme = state.theme === 'light' ? 'light' : 'dark'
      localStorage.setItem('theme',state.theme)
    },
  },
  actions: {},
  modules: {},
})
