import {getcolorlist} from '../../api/index';

const state = {
    colorList:[],
    obj:[]
}

//同步
const mutations = {
  updatacolor(state,payload){
    state.colorList = payload; //总数据
    console.log('payload1',payload)
    const obj = Object.keys(payload);//取值年份
    state.obj =obj;
    // console.log('obj',obj)
  }
}

// 异步
const actions = {
    getcolorlists({commit},payload){
      // console.log('payload2',payload)
      getcolorlist(payload).then(res =>{
        //  console.log(res)
         commit('updatacolor',res.data)
      })
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}