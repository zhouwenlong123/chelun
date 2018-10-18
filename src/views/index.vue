<template>
  <div class="home-wrapper">
        <div class="home-boxs-wrap" ref="homeList">
          <div class="home-boxs" v-for="(item,index) in homelist" :key="index" >
              <p class="home-boxs-title" :ref="item.title">{{item.title}}</p>
                <ul class="home-boxs-ul">
                    <li v-for="(v,i) in item.list" :key="i" :id="v.MasterID" @click="onTypeList(v.MasterID)">
                        <img :data-src="v.CoverPhoto" alt="">
                        <span>{{v.Name}}</span>
                    </li>
                </ul>
          </div>
        </div>
        
        <!-- 侧边   -->
        <div class="side" ref="letters" 
        @touchstart="touchstart" 
        @touchmove="touchmove" 
        @touchend="touchend">
            <p v-for="(item,index) in homelist" :key="index">{{item.title}}</p>
        </div>

        <!-- 车系 -->
        <!--  @thouchstart.stop.prevrnt="start$(event)" @thouchmove.stop.prevrnt="move$(event)" @thouchend.stop.prevrnt="end$(event)" -->
        <!--  -->
          <div :class="!flag?'Car-type':'active'" @click='fn($event)'>
              <rightList :rightListData="rightdata"></rightList>
          </div>
  </div>
</template>

<script>
import rightList from '@/components/rightList'
import { getCarsystemList} from "../api/index";
import { mapState, mapActions } from "vuex";
import {lazyLoad} from '@/utils/lazyLoad'
// import Bscroll from 'better-scroll';

export default {
  name: "APP",
  data() {
    return {
      flag:false,
      rightdata:[],
    };
  },
  components:{//组件注册
    rightList
  },
  computed: {
    ...mapState({
      homelist: state => state.app.homelist
    })
  },
  methods: {
    ...mapActions({
      getBrandList: "app/gethomelist",//找的是app里的方法名
    }),
    // 点击侧边根据id获取出右边的数据
    onTypeList(id) {
     this.flag = true; //侧边数据控制显示与隐藏
      getCarsystemList(id).then(res => {
        _hmt.push(['_trackEvent','汽车报价','tap','品牌点击'])//百度统计埋点
        this.rightdata = res.data //赋值给变量进行组件传值
        // console.log( res.data)
      });
    },
    //事件代理
    fn(e){
        var name = e.srcElement.nodeName;//获取点击时的标签
        if(name === "LI" || name === "IMG" || name === "DL" || name === "DT" || name === "DD"){
        }else{
          this.flag = false;
        }
    },
    //滚动字母
    touchstart() {},
    touchmove(e) {
      //计算字母的下标值
      let index = Math.floor((e.touches[0].pageY - this.offsetTop)/this.letterHeigh);
      //处理临界值
      if(index < 0) {
         index = 0;
      } else if(index > this.homelist.length){
         index = this.homelist.length;
      }
      //计算当前划到哪个字母
      let letter = this.homelist[index];
      //console.log(letter.title)
      //计算需要滚动的距离
      let offsetTop = this.$refs[letter.title][0].offsetTop;
      //滚动到对应的位置
      this.$refs.homeList.scrollTop = offsetTop
      // console.log(this.$refs.homeList.offsetTop)
    },
    touchend() {}
    // 拖拽
    
  },
  updated(){
    //获取字母列表距离顶部的距离(高度)
    //ref值就是当前定义的标签
    //获取到ref值:this.$refs.letters  结构上的ref="letters"
    //children[0]获取到ref值下的第一个标签

    this.offsetTop = this.$refs.letters.getBoundingClientRect().top;//顶部的距离(高度)
    this.letterHeigh = this.$refs.letters.children[0].getBoundingClientRect().height;//获取第一个标签的高度

  },
  mounted() {
    this.getBrandList();
    lazyLoad('.home-boxs-wrap')
  }
};
</script>

<style>
.home-boxs-wrap{
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
</style>

