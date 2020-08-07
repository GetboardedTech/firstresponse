/*=========================================================================================
  File Name: moduleTodoMutations.js
  Description: Todo Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
    SAVE_DATA (state, payload) {
        state.data = payload.map(x => {
            return {
                name: x.country,
                data: [
                    [
                        x.totalDeaths,
                        x.totalRecovered,
                        x.totalCases
                    ]
                ]
            }
        })
    },
}
