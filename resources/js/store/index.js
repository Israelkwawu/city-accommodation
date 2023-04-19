import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import search from './modules/search';
import property_type from './modules/property_type';
import country from './modules/country';
import property_list from './modules/property_list';
import property_list_detail from './modules/property_list_detail';
import super_property_attribute from "./modules/super_property_attribute";
import super_property_list from './modules/super_property_list';
import super_property_approval from './modules/super_property_approval';
import authentication from "./modules/authentication";
import super_agent from "./modules/super_agent";
import super_notification from './modules/super_notification';
import super_dashboard from './modules/super_dashboard';
import register from './modules/register';
import send_mail from './modules/send_mail';
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
    property_list_detail,
    super_property_attribute,
    super_property_list,
    super_property_approval,
    authentication,
    super_agent,
    super_notification,
    super_dashboard,
    register,
    send_mail,
  }
})

export default store;