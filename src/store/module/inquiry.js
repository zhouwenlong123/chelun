import {getdijiaList} from '../../api/index';

//初始值
const state = {
  inquiryList:[]  
}

//同步
const mutations = {
    updateinquiry(state,payload) {
      state.inquiryList = payload;
    }
}

//异步
const actions = {
   getinquiryList({commit},payload){
      getdijiaList(payload).then(res=>{
         commit('inquiryList',res.data)
      })
   }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}