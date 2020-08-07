/*=========================================================================================
  File Name: moduleTodoActions.js
  Description: Todo Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from '@/axios.js'

export default {
  fetchData ({ commit }) {
      return new Promise((resolve, reject) => {
          axios.get('https://nepalcorona.info/api/v1/data/world')
              .then((response) => {
                  commit('SAVE_DATA', response.data)
                  resolve(response)
              })
              .catch((error) => { reject(error) })
      })
  },
}
