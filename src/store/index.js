import { createStore } from "vuex";
import actions from "./actions.js";
import mutations from "./mutations.js";

export default createStore({
  state: {
    news: [],
    jobs: [],
    ask: [],
    user: {},
    askDetail: [],
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
  },
  mutations,
  actions,
  modules: {},
});
