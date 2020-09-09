import { BASE_URL } from '~/plugins/constants'

const state = () => ({
  damType: [],
  damTypes: []
})
const getters = {
}
const mutations = {
  // 坝型
  INIT_DAM_TYPES(state) {
    state.damTypes.forEach((item) => {
      item.childs.forEach((child) => {
        child.hidden = false
      })
    })
  },
  SET_DAM_TYPES(state, damTypes) {
    state.damTypes = damTypes
  },
  // 坝型
  SET_DAM_TYPE(state, damType) {
    state.damType = damType
  }
}
const actions = {
  // 坝型
  async test2({ commit }) {
    await this.$axios.get(`${BASE_URL}/columns/subset?number=514`).then((res) => {
      commit('SET_DAM_TYPE', res.data)
    })
  },
  test3({ commit }) {
    return this.$axios.get(`${BASE_URL}/columns/subset?number=514`)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
