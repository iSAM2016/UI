import Vue from 'vue'
import Vuex from 'vuex'


import cart from './modules/cart'
import products from './modules/products'
/*********************************************/

import mResorce from './modules/mResorce.js'
import mChosedata from './modules/mChosedata.js'
import mTools from './modules/mTools.js'
import mAlltools from './modules/mAlltools.js'
import createLogger from '../plugins/logger.js'

Vue.use(Vuex)


const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    cart,
    products,
    mResorce,
    mChosedata,
    mTools,
    mAlltools
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

