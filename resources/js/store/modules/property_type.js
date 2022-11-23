import Api from "../../services/user-api";
export default {
    namespaced: true,
    state: {
        property_types: [],
        error: {},
    },
    getters: {
        getPropertyTypes(state) {
            return state.property_types;
        },
        getError(state) {
            return state.error;
        }
    },
    mutations: {
        SET_PROPERTY_TYPES(state, data) {
            state.property_types = [ ...data ];
        },
        SET_ERROR(state, data) {
            state.error = { ...data };
        },
    },
    actions: {
        async getAllPropertyTypes({ commit }) {
            try {
               const data = await Api().get('/property_types');
               commit('SET_PROPERTY_TYPES', data.data)
            } catch (error) {
                commit('SET_ERROR',  {
                    error: error,
                    errorMessage: "An unexpected error occurred.",
                })
            }
           
        }
    },
}