import Api from "../../services/user-api";
export default {
    namespaced: true,
    state: {
        search_results: [],
        next_page_url: null,
        next_cursor: null,
        error: {},
    },
    getters: {
        getSearchResults(state) {
            return state.search_results;
        },
        getNextPageUrl(state) {
            return state.next_page_url;
        },
        getNextCursor(state) {
            return state.next_cursor;
        },
        getError(state) {
            return state.error;
        }

    },
    mutations: {
        SET_SEARCH_RESULTS(state, data) {
            state.search_results = [ ...data ];
        },
        SET_NEXT_PAGE_URL(state, data) {
            state.next_page_url = data;
        },
        SET_NEXT_CURSOR(state, data) {
            state.next_cursor = data;
        },
        SET_ERROR(state, data) {
            state.error = { ...data };
        },
    },
    actions: {
        async search({ commit }, payload) {
            try {
                const data = await Api().post('/search?cursor='+ payload.next_cursor,{
                    ...payload.request
                });
                commit('SET_SEARCH_RESULTS', data.data.data);
                commit('SET_NEXT_PAGE_URL', data.data.next_page_url);
                commit('SET_NEXT_CURSOR', data.data.next_cursor);
            } catch (error) {
                commit('SET_ERROR',  {
                    error: error,
                    errorMessage: "An unexpected error occurred.",
                })
            }
        
        }

    },
}