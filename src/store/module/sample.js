import {getsamplelist} from '../../api/index';//引入的请求

//初始值
const state = {
  samplelist:[]
}

//同步
const mutations = {
   updatasample(state,payload) {//处理请求完的数据(存上)
       state.samplelist = payload;
      //  console.log('payload1',payload)
   }
}


//异步
const actions = {
  getdatasamplelist({commit},payload){//请求完数据时
    //   console.log('payload2',payload)
    getsamplelist(payload).then(res =>{
    //    console.log(res)
       commit('updatasample',res.data)
    })
  }
}

export default {
    namespaced:true,//命名空间
    state,
    mutations,
    actions
}