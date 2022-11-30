import Api from "../../services/user-api";
export default {
    namespaced: true,
    state: {
        property_list: [],
        next_page_url: null,
        error: {},
    },
    getters: {
        getPropertyList(state) {
            return state.property_list;
        },
        getNextPageUrl(state) {
            return state.next_page_url;
        },
        getError(state) {
            return state.error;
        }
    },
    mutations: {
        SET_PROPERTY_LIST(state, data) {
            state.property_list = [ ...data ];
        },
        SET_NEXT_PAGE_URL(state, data) {
            state.next_page_url = data;
        },
        SET_ERROR(state, data) {
            state.error = { ...data };
        },
    },
    actions: {
        async getMorePropertyList({ commit }) {
            try {
               const data = await Api().get('/property_list');
               commit('SET_PROPERTY_LIST', data.data.data);
               commit('SET_NEXT_PAGE_URL', data.data.next_page_url);
            } catch (error) {
                commit('SET_ERROR',  {
                    error: error,
                    errorMessage: "An unexpected error occurred.",
                })
            }
           
        }
    },
}