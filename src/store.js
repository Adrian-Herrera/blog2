import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: ""
  },
  mutations: {
    setUser(state, data) {
      console.log("vuex");
      // console.log(data);
      console.log(state.userData);
      state.userData = data;
      console.log(state.userData);
    }
  },
  getters: {
    status(state) {
      if (state.userData == "") {
        return false;
      } else {
        return true;
      }
    }
  },
  actions: {}
});
