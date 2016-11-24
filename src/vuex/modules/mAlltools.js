import {
  MGET_ALLTOOLS,///
} from '../mutation-types'

// initial state
const state = {
  datas:null,
  issearch: true,
}

// mutations
const mutations = {
  

  [MGET_ALLTOOLS]( state, tools ) {
    state.datas = tools

  }


 
 
  
}

export default {
  state,
  mutations
}
