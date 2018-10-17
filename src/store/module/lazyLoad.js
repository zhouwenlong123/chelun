import { getlazyImgList } from "../../api/index";//引入api请求的接口
//初始值
const state = {
  ImgList: [],
  Page:1,
  isFetching:false, //判断懒加载数据一次只加载一条
  current:0, //轮播初始值
  showSwiper:false //判断轮播的显示和隐藏
};

//同步
const mutations = {//做数据处理
  updateImgList(state, payload) {
    state.ImgList = state.ImgList.concat(payload.List), //接收到请求的数据
    state.Page++;
    state.isFetching = false;
    // console.log('state.ImgList',state.ImgList)
  },
  stateisFetching(state) {
    state.isFetching = true
  },
  /**
   * 控制轮播显示和隐藏的方法
   * @param {any} state 
   * @param {any} payload 
   */
  changSwiper(state,payload) {
    state.showSwiper = payload.show;
    state.current = payload.id;
  }
};

//异步
const actions = {//请求数据
  getlazyImgList({commit,state},payload){
    // console.log('payload',payload)
    payload.Page = state.Page;
    if(state.isFetching){//第一次请求为false
      return;
    }
    commit('stateisFetching');
    getlazyImgList(payload).then(res =>{
      // console.log('res',res.data)
      commit('updateImgList',res.data)
    })
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
