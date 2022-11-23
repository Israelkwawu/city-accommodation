import Vue from 'vue';
import Vuex from 'vuex';
import search from './modules/search';
import property_type from './modules/property_type';
import country from './modules/country';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
  },
  getters: {},
  mutations: {
  },
  actions: {},
  modules: {
    search,
    property_type,
    country
  }
})

export default store;