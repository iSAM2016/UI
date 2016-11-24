import {
  ADD_CHOSEFILE 
} from '../mutation-types'



const state = {
 
  addDatas: []
 
}

// mutations
const mutations = {
  [ADD_CHOSEFILE ] (state, data) {

    const item = state.addDatas.find(p=> p === data)
    if(!item){
      state.addDatas.push( data )
    } else {
      
        state.addDatas.splice( state.addDatas.findIndex(p=> p === data),1 )
        
    }
  },
  
  
}

export default {
  state,
  mutations
}
