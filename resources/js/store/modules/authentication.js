import Api from "../../services/user-api";
import AuthApi from "../../services/api";
import axios from "axios";

export default {
    namespaced: true,
    state:{
        authenticated:false,
        user:{},
        error: {},
        token:'',
    },
    getters:{
        authenticated(state){
            return state.authenticated
        },
        user(state){
            return state.user
        },
        getError(state) {
            return state.error;
        },
        getAuthToken(state) {
            return state.token;
        },
    },
    mutations:{
        SET_AUTHENTICATED (state, value) {
            state.authenticated = value;
        },
        SET_USER (state, data) {
            state.user = data;
        },
        SET_ERROR(state, data) {
            state.error = { ...data };
        },
        SET_AUTHENTICATION_TOKEN(state, data) {
            state.token = data;
        },
    },
    actions:{
        async login({commit}, payload){
            try {
                await axios.get('/sanctum/csrf-cookie')
                const data = await Api().post("/auth/login", payload);
                
                commit('SET_USER',data.data.admin);
                commit('SET_AUTHENTICATED',true);
                commit('SET_AUTHENTICATION_TOKEN', data.data.token);
                commit('SET_ERROR', {});
            } catch ({ response }) {
                commit('SET_USER',{});
                commit('SET_AUTHENTICATED',false);
                commit('SET_AUTHENTICATION_TOKEN', '');
                commit('SET_ERROR', response);
            }
        
        },
        async logout({commit}){
            try {
                await axios.get('/sanctum/csrf-cookie')
                const data = await AuthApi().post("/auth/logout");
                commit('SET_USER',{});
                commit('SET_AUTHENTICATED',false);
                commit('SET_AUTHENTICATION_TOKEN', '');
                commit('SET_ERROR', {});
            } catch ({ response }) {
                commit('SET_ERROR', response);
            }
            
        }
    }
}