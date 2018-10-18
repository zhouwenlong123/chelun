import { getcarlist } from "../../api/index";

const state = {
  moneylist: [],
  carList: [],
  yearArr: []
};

//同步
const mutations = {
  updatamoney(state, payload) {
    state.moneylist = payload;
    // console.log('payload1',payload)
    const list = payload.list;
    // console.log("list", list);
    let yearArr = [],
        carList = [{ year: "", list: [] }];
    //遍历list 筛选年份
    list.forEach((item, index) => {
      let year = item.market_attribute.year;
      if (yearArr.indexOf(year) === -1) {
        yearArr.push(year);
        carList.push({
          year: year,
          list: [item]
        });
      } else {
        carList.forEach(value => {
          if (value.year.indexOf(year) != -1) {
            value.list.push(item);
          }
        });
      }
      carList[0].list.push(item);
    });
    state.yearArr = yearArr;
    // console.log('yearArr',yearArr)
    state.carList = carList;
    // console.log('carList',carList)
  }
};

// 异步
const actions = {
  getmoneylists({ commit }, payload) {
    // console.log("payload2", payload);
    getcarlist(payload).then(res => {
      // console.log("res", res.data);
      commit("updatamoney", res.data);
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
