import Api from "../../services/api";
export default {
    namespaced: true,
    state: {
        response: {},
        error: {},
    },
    getters: {
        getError(state) {
            return state.error;
        },
        getResponse(state) {
            return state.response;
        }
    },
    mutations: {
        SET_ERROR(state, data) {
            state.error = { ...data };
        },
        SET_RESPONSE(state, data) {
            state.response = { ...data };
        },
    },
    actions: {
        async getDashboard({ commit }) {
            
            try {
                const data = await Api().get('/dashboard');
                commit('SET_RESPONSE', data.data);
                commit('SET_ERROR',  {});
            } catch ({ response }) {
                commit('SET_ERROR',  response);
                commit('SET_RESPONSE', {});
            }
        
        },

    },
}