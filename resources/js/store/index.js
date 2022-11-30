import Vue from 'vue';
import Vuex from 'vuex';
import search from './modules/search';
import property_type from './modules/property_type';
import country from './modules/country';
import property_list from './modules/property_list';

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
    country,
    property_list
  }
})

export default store;