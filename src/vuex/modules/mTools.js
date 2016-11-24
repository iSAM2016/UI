import {
  GET_TOOLS,
  SEARCH_TOOLS,///搜索
} from '../mutation-types'

// initial state
const state = {
  datas:null,
  page: null,
  issearch: true,
}

// mutations
const mutations = {
  

  [GET_TOOLS]( state, tools , pagenum) {
     state.issearch = true
     if( pagenum !== undefined ){
        state.page = pagenum
     }
    state.datas = tools

  },


  [SEARCH_TOOLS]( state, tools ) {
    state.issearch = false
    state.datas = tools

  },
 
  
}

export default {
  state,
  mutations
}
