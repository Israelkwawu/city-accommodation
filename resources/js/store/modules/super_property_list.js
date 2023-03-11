import Api from "../../services/api";
export default {
    namespaced: true,
    state: {
        property_lists: [],
        response: {},
        error: {},
    },
    getters: {
        getPropertyList(state) {
            return state.property_lists;
        },
        getError(state) {
            return state.error;
        },
        getResponse(state) {
            return state.response;
        }
    },
    mutations: {
        SET_PROPERTY_LIST(state, data) {
            state.property_lists = [ ...data ];
        },
        SET_ERROR(state, data) {
            state.error = { ...data };
        },
        SET_RESPONSE(state, data) {
            state.response = { ...data };
        },
    },
    actions: {
        async getAllPropertyList({ commit }) {
            
            try {
                const data = await Api().get('/listings');
                commit('SET_PROPERTY_LIST', data.data);
                commit('SET_ERROR',  {});
            } catch ({ response }) {
                commit('SET_ERROR',  response);
                commit('SET_PROPERTY_ATTRIBUTE', []);
            }
        
        },

        async savePropertyList({ commit }, payload) {
            try {
                const data = await Api().post("/listings", payload);
                commit("SET_RESPONSE", data);
                commit("SET_ERROR", {});
            } catch ( { response } ) {
                commit("SET_ERROR", response);
                commit("SET_RESPONSE", {});
            }
        }
    },
}