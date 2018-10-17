import {getinquirylist} from "../../api/index";
const state = {//初始值
  lowpriceList:[]
};

//同步改变
const mutations = {
  //询问低价
  uppriceList(state,payload) {
    // console.log(state)//就是在state中定义的lowpriceList
    // console.log(payload)//数据
    state.lowpriceList = payload;
  }
};

//异步改变
const actions = {
  //询问低价
  priceList({commit},payload) {
    //   console.log(payload);
    getinquirylist(payload).then(res =>{
    //   console.log(res)
      commit('uppriceList',res.data)
    })
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
