import Api from "../../services/user-api";
export default {
    namespaced: true,
    state: {
        property_lists: [],
        next_page_url: null,
        next_cursor: null,
        error: {},
    },
    getters: {
        getPropertyList(state) {
            return state.property_lists;
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
        SET_PROPERTY_LISTS(state, data) {
            state.property_lists = [ ...data ];
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
        async getMorePropertyList({ commit }, payload) {
            try {
                const data = await Api().get('/property_lists?cursor='+ payload.next_cursor);
                commit('SET_PROPERTY_LISTS', data.data.data);
                commit('SET_NEXT_PAGE_URL', data.data.next_page_url);
                commit('SET_NEXT_CURSOR', data.data.next_cursor);
            } catch ( { response } ) {
                commit('SET_ERROR',  {
                    error: response,
                })
            }
        
        }
    },
}