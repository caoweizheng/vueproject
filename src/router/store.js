import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let state = {
    type:"gyyx"
}

let mutations = {

    increment(state,t){
     
    state.type = t;         
    }
}

const store = new Vuex.Store({
    state,
    mutations
})

export default store