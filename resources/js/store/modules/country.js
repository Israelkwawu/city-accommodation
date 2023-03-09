import Api from "../../services/user-api";
export default {
    namespaced: true,
    state: {
        countries: [],
        error: {},
    },
    getters: {
        getCountries(state) {
            return state.countries;
        },
        getError(state) {
            return state.error;
        }
    },
    mutations: {
        SET_COUNTRIES(state, data) {
            state.countries = [ ...data ];
        },
        SET_ERROR(state, data) {
            state.error = { ...data };
        },
    },
    actions: {
        async getAllCountries({ commit }) {
            try {
                const data = await Api().get('/countries');
                commit('SET_COUNTRIES', data.data)
            } catch ( { response } ) {
                commit('SET_ERROR',  {
                    error: response,
                })
            }
        
        }
    },
}