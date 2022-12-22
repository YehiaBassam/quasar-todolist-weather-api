import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

import { state } from './weather-module/state';
import * as mutations from './weather-module/mutations';
import * as getters from './weather-module/getters';


export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    state,
    getters,
    mutations,

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
