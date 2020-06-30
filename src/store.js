import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: ""
  },
  mutations: {
    setUser(state, data) {
      // console.log("vuex");
      state.userData = data;
      console.log(state.userData);
      console.log("-----------------------");
    },
    updateProfile(state, data) {
      state.userData.Username = data.Username;
      state.userData.Fullname = data.Fullname;
      state.userData.Mail = data.Mail;
      state.userData.Phone = data.Phone;
      state.userData.Description = data.Description;
    }
  },
  getters: {
    status(state) {
      if (state.userData == "") {
        return false;
      } else {
        return true;
      }
    },
    firstLog(state) {
      // console.log(state.userData.FirstLog);
      if (state.userData.FirstLog == 0) {
        return true;
      } else {
        return false;
      }
    }
  },
  actions: {}
});
