import shop from '../api/shop.js'
import user from '../api/user.js'
import resource from '../api/resource.js' //resource元数据
import gettoolfn from '../api/tools.js' //tools元数据
import * as types from './mutation-types.js'//绞带

export const addToCart = ({dispatch},product)=>{
   dispatch(types.ADD_TO_CART, product.id)
}

export const checkout = ({ dispatch, state }, products) => {
  const savedCartItems = [...state.cart.added]
 
  dispatch(types.CHECKOUT_REQUEST)
  shop.buyProducts(
    products,
    () => dispatch(types.CHECKOUT_SUCCESS),
    () => dispatch(types.CHECKOUT_FAILURE, savedCartItems)
  )
}


export  const getAllProducts = ({dispatch})=>{
   shop.getProducts((products)=>{
      dispatch( types.RECEIVE_PRODUCTS, products )
   })
}
/**************************************cloud-vue******************************************/
/****************************
***用户验证
****************************/
export const getUserId = ({  dispatch }) =>{
	if( !user.getLocalStorage()){//么有用户
           alert("没有登录")
           //close window
	}else{
   		dispatch(types.SAVE_USREID, user.getLocalStorage())
	}
  
}


/**************************************************************
***datalist.vue
***start
***************************************************************/


//获取元数据
export const getResource  = ({ dispatch },vm, userId) =>{
     resource.getResource( (datas)=>{
     	 dispatch(types.RECEIVE_DATAS, datas)
     }, vm, userId )
}


//单选选中文件
export const chosefile = ({ dispatch }, data) => {
	dispatch(types.ADD_CHOSEFILE,data)
}

//全选文件
export const choseAllfile = ({ dispatch }, ischoseall) => {
	dispatch(types.ADD_CHOSEALLFILE,ischoseall)
}

/**************************************************************
***datalist.vue
***end
**************************************************************/


/**************************************************************
***tool.vue
***start
***************************************************************/


//获取tools
export const gettool  = ({ dispatch },vm) =>{
  gettoolfn.gettools( (datas)=>{
       dispatch(types.GET_TOOLS, datas,1)
     }, vm )

}


//searchtools
export const searchtools  = ({ dispatch },vm,keyworld) =>{
  gettoolfn.searchtools( (datas)=>{
       dispatch(types.SEARCH_TOOLS, datas)
     }, vm, keyworld )

}

//goTo
export const goTo  = ({ dispatch },vm,pagenum) =>{

  gettoolfn.gettools( (datas, num)=>{
       dispatch(types.GET_TOOLS, datas, num)
     }, vm,pagenum )

}
/**************************************************************
***tool.vue
***end
**************************************************************/



/**
*alltool.vue
*start
*/


//getalltool

export const getalltool  = ({ dispatch },vm,myclass) =>{

  gettoolfn.getalltools( (datas, num)=>{
       dispatch(types.MGET_ALLTOOLS, datas, num)
     }, vm,myclass )

}


/**
*alltool.vue
*end
*/