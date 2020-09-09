import Vue from 'vue'
import Vuex from 'vuex'
import check from './check'

Vue.use(Vuex)

const dam = () => {
  return new Vuex.Store({
    state: {
    },
    getters: {
    },
    modules: {
      check
    },
    mutations: {

    }
  })
}
export default dam
