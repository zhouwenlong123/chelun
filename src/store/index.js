import Vue from "vue";
import Vuex from "vuex";
import Logger from "vuex/dist/logger";
import app from "./module/app";
import details from './module/details';
import inquiry from './module/inquiry';
import lazyLoad from './module/lazyLoad';
import city from './module/city';
import color from './module/color';
import money from './module/money'
Vue.use(Vuex);

export default new Vuex.Store({
  state : {
    loading: true
  },

  mutations:{
      loadingImg(state,payload) {
        state.loading = payload
      }
  },

  modules: {
    app,
    details,
    inquiry,
    lazyLoad,
    city,
    color,
    money
  },
  plugins: [Logger()]
});
