import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import search from './modules/search';
import property_type from './modules/property_type';
import country from './modules/country';
import property_list from './modules/property_list';
import property_attribute from "./modules/property_attribute";
import authentication from "./modules/authentication";
import Cookies from 'js-cookie';

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins:[
    createPersistedState({
      storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, { expires: 1, secure: process.env.MIX_COOKIE_SECURE }),
        removeItem: key => Cookies.remove(key)
      }
    })
  ],
  state: {
  },
  getters: {},
  mutations: {
  },
  actions: {},
  modules: {
    search,
    property_type,
    country,
    property_list,
    property_attribute,
    authentication,
  }
})

export default store;