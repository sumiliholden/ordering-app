import Vue from "vue";
import Vuex from "vuex";

import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters"; //  Also, import the getters.

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters //  You forgot to include your getters in your store exports. That's why you get getters error.
});
