import Api from "../../services/api";
export default {
    namespaced: true,
    state: {
        property_attributes: [],
        response: {},
        error: {},
    },
    getters: {
        getPropertyAttribute(state) {
            return state.property_attributes;
        },
        getError(state) {
            return state.error;
        },
        getResponse(state) {
            return state.response;
        }
    },
    mutations: {
        SET_PROPERTY_ATTRIBUTE(state, data) {
            state.property_attributes = [ ...data ];
        },
        SET_ERROR(state, data) {
            state.error = { ...data };
        },
        SET_RESPONSE(state, data) {
            state.response = { ...data };
        },
    },
    actions: {
        async getAllPropertyAttribute({ commit }) {
            
            try {
                const data = await Api().get('/property_attributes');
                commit('SET_PROPERTY_ATTRIBUTE', data.data);
                commit('SET_ERROR',  {});
            } catch ({ response }) {
                commit('SET_ERROR',  response);
                commit('SET_PROPERTY_ATTRIBUTE', []);
            }
        
        },

        async savePropertyAttribute({ commit }, payload) {
            try {
                const data = await Api().post("/property_attributes", payload);
                commit("SET_RESPONSE", data);
                commit("SET_ERROR", {});
            } catch ( { response } ) {
                commit("SET_ERROR", response);
                commit("SET_RESPONSE", {});
            }
        }
    },
}