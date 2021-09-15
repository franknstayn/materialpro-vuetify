import Vue from 'vue'
import Vuex from 'vuex'
import SidebarModule from './modules/SidebarModule'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    SidebarModule
  },
  plugins: [createPersistedState()]
})