import Vue from "vue";
import Vuex from "vuex";
import Logger from "vuex/dist/logger";
import app from "./module/app";
import details from './module/details';
import inquiry from './module/inquiry';
import loading from './module/loading';
import lazyLoad from './module/lazyLoad';
import city from './module/city';
import color from './module/color';
import money from './module/money'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    details,
    inquiry,
    loading,
    lazyLoad,
    city,
    color,
    money
  },
  plugins: [Logger()]
});
