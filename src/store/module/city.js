import {getcitylist} from '../../api/index';
import {getcitylistid} from '../../api/index';
//初始值
const state = {
  citylist:[],
  citylistid:[]
}

//同步
const mutations = {//做数据处理 数据
  updatacitylist(state,payload){
    // console.log('payload',payload)
    state.citylist = payload
  },
  updatacitylistid(state,payload){//城市数据id
    // state.citylistid = payload;
  }
}

//异步
const actions = {//请求数据 方法
  getcitylist({commit},payload) {
    getcitylist().then(res =>{
    //    console.log('res',res)
       commit('updatacitylist',res.data)
    })
  },

  getcitylistid({commit},payload) {//城市数据id 方法
    // console.log('payload1',payload)
    getcitylistid(payload).then(res =>{
      //  console.log('res1',res.data)
       commit('updatacitylistid',res.data)
    })
  }
}

export default {
  namespaced:true,
  state,
  mutations,
  actions
}