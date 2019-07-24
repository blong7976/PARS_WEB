import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const store= new Vuex.Store({
    state: {
        avatar: true,
    },
    mutations: {
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        },
    },
    actions: {

    },
    getters: {

    }
})
export default store;