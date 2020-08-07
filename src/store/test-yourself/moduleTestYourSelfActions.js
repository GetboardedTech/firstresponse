/*=========================================================================================
  File Name: moduleTodoActions.js
  Description: Todo Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

// import axios from '@/axios.js'

export default {
  saveForm ({ commit }, payload) {
    commit('SAVE_FORM', payload)
    // return new Promise((resolve, reject) => {
    //   axios.get('/api/apps/todo/tasks', { params: {filter: payload.filter} })
    //     .then((response) => {
    //       commit('SET_TASKS', response.data)
    //       resolve(response)
    //     })
    //     .catch((error) => { reject(error) })
    // })
  },
}
