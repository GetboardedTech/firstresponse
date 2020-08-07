/*=========================================================================================
  File Name: moduleHome.js
  Description: Home Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import state from './moduleHomeState.js'
import mutations from './moduleHomeMutations.js'
import actions from './moduleHomeActions.js'
import getters from './moduleHomeGetters.js'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
