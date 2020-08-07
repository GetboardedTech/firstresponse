/*=========================================================================================
  File Name: moduleTodoMutations.js
  Description: Todo Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
    SAVE_FORM (state, payload) {
        for(let i=0; i<payload.symptoms.length; i+=1){
            if(!payload.symptoms[i].select){
                payload.symptoms[i].level = 0
            }
        }
        state.form = payload
    },
}
