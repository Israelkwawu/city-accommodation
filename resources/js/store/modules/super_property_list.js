import Api from "../../services/api";
export default {
    namespaced: true,
    state: {
        property_lists: {},
        response: {},
        error: {},
        one_property_list: {},
        upload_response: {},
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
        },
        getOnePropertyList(state) {
            return state.one_property_list;
        },
        getUploadResponse(state) {
            return state.upload_response;
        }
    },
    mutations: {
        SET_PROPERTY_LIST(state, data) {
            state.property_lists = { ...data };
        },
        SET_ERROR(state, data) {
            state.error = { ...data };
        },
        SET_RESPONSE(state, data) {
            state.response = { ...data };
        },
        SET_ONE_PROPERTY_LIST(state, data) {
            state.one_property_list = { ...data };
        },
        SET_UPLOAD_RESPONSE(state, data) {
            state.upload_response = { ...data };
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
                commit('SET_PROPERTY_LIST', {});
            }
        
        },

        async getOneList({ commit }, payload) {
            try {
                const data = await Api().get("/listings/"+ payload);
                
                commit("SET_ONE_PROPERTY_LIST", data.data);
                commit("SET_ERROR", {});
            } catch ( { response } ) {
                commit("SET_ERROR", response);
                commit("SET_ONE_PROPERTY_LIST", {});
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
        },

        
        async saveImage({ commit }, payload) {
            try {
                const data = await Api().post("/image", payload, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                commit("SET_UPLOAD_RESPONSE", data);
                commit("SET_ERROR", {});
            } catch ( { response } ) {
                commit("SET_ERROR", response);
                commit("SET_UPLOAD_RESPONSE", {});
            }
        }
    },
}