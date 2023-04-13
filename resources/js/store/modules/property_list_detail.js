import Api from "../../services/user-api";
export default {
    namespaced: true,
    state: {
        property_list_detail: {},
        error: {},
    },
    getters: {
        getOnePropertyList(state) {
            return state.property_list_detail;
        },
    
        getError(state) {
            return state.error;
        }
    },
    mutations: {
        SET_PROPERTY_LIST_DETAIL(state, data) {
            state.property_list_detail = { ...data };
        },
        SET_ERROR(state, data) {
            state.error = { ...data };
        },
    },
    actions: {
        async getPropertyListDetail({ commit }, payload) {
            try {
                const data = await Api().get('/property_lists/'+ payload);
                commit('SET_PROPERTY_LIST_DETAIL', data.data);
                commit('SET_ERROR',  {});
            } catch ( { response } ) {
                commit('SET_ERROR',  {
                    error: response,
                });
                commit('SET_PROPERTY_LIST_DETAIL', {});
            }
        
        }
    },
}