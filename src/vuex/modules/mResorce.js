import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_SUCCESS,
  /********************cloud-vue******************/
  RECEIVE_DATAS,
  SAVE_USREID,//用户ID
  ADD_CHOSEFILE ,//添加单个文件
  ADD_CHOSEALLFILE// 添加全部文件
} from '../mutation-types'

// initial state
// shape: [{ id, quantity }]

const state = {
  datas: [],
  addDatas:[], //被选中的文件
  userId:null,
  folderId: null,
  isChoseAllfile: null
 
}

// mutations
const mutations = {
  [RECEIVE_DATAS] (state, datas) {
   state.datas.splice(0,state.datas.length)
   datas.forEach(p=>{
    state.datas.push(p)
   })


  },
  
  [SAVE_USREID](state,Id){
    state.userId = Id
  },


  [ADD_CHOSEFILE ] (state, data) {

    const item = state.addDatas.find(p=> p === data)
    if(!item){
      state.addDatas.push( data )

    } else {
      
        state.addDatas.splice( state.addDatas.findIndex(p=> p === data),1 )
            state.isChoseAllfile = false
    }
  },
  
  //添加全部文件
  [ADD_CHOSEALLFILE](state,ischoseall) {
    if( state.datas.length !== 
  state.addDatas.length ){
      alert(1)
        state.isChoseAllfile = true
        state.datas.forEach(p=>{
             if(!state.addDatas.includes(p)){
              state.addDatas.push(p)
         }
     })
      
      }else{
        state.isChoseAllfile = false
        
             state.addDatas.splice(0,state.addDatas.length)
         
          }

  },
  

/*****************************top cloud-vue******************************/





  [ADD_TO_CART](state, productId){

    const record =  state.added.find(p=> p.id === productId )
     if(!record){
       state.added.push({
          id: productId,
          quantity: 1
       })
     }else{

      record.quantity++
     }


  },

  [CHECKOUT_REQUEST] (state) {
    // clear cart
    state.added = []
    state.lastCheckout = null
  },

  [CHECKOUT_SUCCESS] (state) {
    state.lastCheckout = 'successful'
  },

  
}

export default {
  state,
  mutations
}
