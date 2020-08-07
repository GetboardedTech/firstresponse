/*=========================================================================================
  File Name: moduleTodoGetters.js
  Description: Todo Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
// todo: vuex value changing without mutation
function cosineSim(a, b) {
    if (a.map((x) => x**2).reduce((sum, now) => sum+now) === 0){
        return 0
    }
    return (a.map((x, i) => x*b[i]).reduce((sum, now) => sum+now)) /
            (Math.sqrt(a.map((x) => x**2).reduce((sum, now) => sum+now)) *
                Math.sqrt(b.map((x) => x**2).reduce((sum, now) => sum+now)))
}

function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        /* next line works with strings and numbers,
         * and you may want to customize it to your needs
         */
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

export default {
    getForm: state => state.form,
    getLabels: state => {
        let symptoms = []
        const labels = [
            'Fever', 'Shortness of breath', 'Dry Cough', 'Fatigue','Sore Throat', 'Confusion',
            'Nausea and Vomiting','Headache', 'Runny Nose', 'Chest Pain', 'Diarrhea', 'Stomach Ache'
        ]
        if(state.form.symptoms){
            symptoms = state.form.symptoms.slice();
            symptoms.sort(dynamicSort("level"))
        }
        return state.form.symptoms ? symptoms.map(x => x.text) : labels
    },
    getResult: state => realSeries => {
        let symptoms = []
        if(state.form.symptoms){
            symptoms = state.form.symptoms.slice();
            symptoms.sort(dynamicSort("level"))
        }
        const temp = state.form.symptoms ? symptoms.map(x => x.level) : []
        if(temp.length) {
            return {
                series: state.form.symptoms ? symptoms.map(x => x.level) : [],
                defaultSeries: state.form.symptoms ? symptoms.map(x => x.default) : [],
                probabilities: {
                    success: cosineSim(state.form.symptoms.map(x => x.level), realSeries),
                    error: 2,
                    failed: 1 - cosineSim(state.form.symptoms.map(x => x.level), realSeries),
                }
            }
        }
        return {
            series: state.form.symptoms ? state.form.symptoms.map(x => x.level) : [],
            probabilities: {
                success: 0,
                error: 2,
                failed: 0,
            }
        }
    }
}
