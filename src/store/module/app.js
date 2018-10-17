import { getBrandList} from "../../api/index";
const state = {//初始值
  homelist: []
};

//同步改变
const mutations = {
  uphomelist(state, payload) { // 首页
    var obj = {};
    payload.forEach(function(item) {
      var key = item.Spelling.slice(0, 1);
      if (!obj[key]) {
        obj[key] = {
          title: key,
          list: []
        };
      }
      obj[key].list.push(item);
    });
    var arr = [];
    for (var k in obj) {
      arr.push(obj[k]);
    }
    state.homelist = arr
  },
};

//异步改变
const actions = {
  gethomelist({ commit }) {//首页
    getBrandList().then(res => {
      commit("uphomelist", res.data);
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
