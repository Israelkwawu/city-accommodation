import Api from "../../services/user-api";
import axios from "axios";

export default {
    namespaced: true,
    state:{
        response:{},
        error: {},
    
    },
    getters:{
    
        getResponse(state){
            return state.response;
        },
        getError(state) {
            return state.error;
        },
    
    },
    mutations:{
    
        SET_RESPONSE (state, data) {
            state.response = data;
        },
        SET_ERROR(state, data) {
            state.error = { ...data };
        },
    
    },
    actions:{
        async register({commit}, payload){
            try {
                await axios.get('/sanctum/csrf-cookie')
                const data = await Api().post("/auth/register", payload);
                
                commit('SET_RESPONSE',data.data);
                commit('SET_ERROR', {});
            } catch ({ response }) {
                commit('SET_RESPONSE',{});
                commit('SET_ERROR', response);
            }
        
        }
    }
}