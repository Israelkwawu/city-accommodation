import Api from "../../services/api";
export default {
    namespaced: true,
    state: {
        notifications: [],
        response: {},
        error: {},
    },
    getters: {
        getNotifications(state) {
            return state.notifications;
        },
        getError(state) {
            return state.error;
        },
        getResponse(state) {
            return state.response;
        }
    },
    mutations: {
        SET_NOTIFICATIONS(state, data) {
            state.notifications = [ ...data ];
        },
        SET_ERROR(state, data) {
            state.error = { ...data };
        },
        SET_RESPONSE(state, data) {
            state.response = { ...data };
        },
    },
    actions: {
        async getAllNotification({ commit }) {
            
            try {
                const data = await Api().get('/notifications');
                commit('SET_NOTIFICATIONS', data.data);
                commit('SET_ERROR',  {});
            } catch ({ response }) {
                commit('SET_ERROR',  response);
                commit('SET_NOTIFICATIONS', []);
            }
        
        },

        async updateNotification({ commit }, payload) {
        
            try {
                const data = await Api().patch("/notifications/"+ payload.id, payload.request);
                commit("SET_RESPONSE", data);
                commit("SET_ERROR", {});
            } catch ( { response } ) {
                commit("SET_ERROR", response);
                commit("SET_RESPONSE", {});
            }
        },

    },
}