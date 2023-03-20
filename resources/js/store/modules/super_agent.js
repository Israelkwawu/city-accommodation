import Api from "../../services/api";
export default {
    namespaced: true,
    state: {
        agents: {},
        response: {},
        error: {},
        agent: {},
    },
    getters: {
        getAgents(state) {
            return state.agents;
        },
        getError(state) {
            return state.error;
        },
        getResponse(state) {
            return state.response;
        },
        getAgent(state) {
            return state.agent;
        },
    },
    mutations: {
        SET_AGENTS(state, data) {
            state.agents = { ...data };
        },
        SET_ERROR(state, data) {
            state.error = { ...data };
        },
        SET_RESPONSE(state, data) {
            state.response = { ...data };
        },
        SET_AGENT(state, data) {
            state.agent = { ...data };
        },
    },
    actions: {
        async getAllAgents({ commit },payload) {
            let path = payload ?? "agent?page=1";
            try {
                const data = await Api().get(`/${path}`);
                
                commit('SET_AGENTS', data.data);
                commit('SET_ERROR',  {});
            } catch ({ response }) {
                commit('SET_ERROR',  response);
                commit('SET_AGENT', {});
            }
        
        },

        async getOneAgent({ commit }, payload) {
            try {
                const data = await Api().get("/agent/"+ payload);
                
                commit("SET_AGENT", data.data);
                commit("SET_ERROR", {});
            } catch ( { response } ) {
                commit("SET_ERROR", response);
                commit("SET_AGENT", {});
            }
        },

        async deleteAgent({ commit }, payload) {
        
            try {
                const data = await Api().delete("/agent/"+ payload);
                commit("SET_RESPONSE", data);
                commit("SET_ERROR", {});
            } catch ( { response } ) {
                commit("SET_ERROR", response);
                commit("SET_RESPONSE", {});
            }
        }
    },
}