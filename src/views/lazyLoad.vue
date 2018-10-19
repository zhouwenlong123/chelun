<template>
    <div class="lazyLoad-wrap">
        <div class="lazyLoadwrap" @scroll="scroll">
          <section ref="section" class="section" @click="imgclick">  
              <img v-for="(item,index) in ImgList" src="../assets/lozy.gif" :key="index" :data-src="`${item.Url.replace('{0}',item.LowSize)}`" :data-id="index"></img>
          </section>
        </div>
        <!-- 轮播 -->
        <div class="swpier" v-show="showSwiper" @click="swiperclick">
          <swiper :options="swiperOption" ref="mySwiper">
              <swiper-slide v-for="(item,index) in ImgList" :key="index">
                <img :data-src="`${item.Url.replace('{0}',item.HighSize)}`" alt="" class="swiper-lazy">
                 <div class="swiper-lazy-preloader"></div>
              </swiper-slide>
          </swiper>
          <div class="swiper-pagination">{{`${1+current*1}/${ImgList.length}`}}</div>
        </div>
    </div> 
</template>

<script>
import { mapState, mapActions ,mapMutations} from "vuex";
import { lazyLoad } from "@/utils/lazyLoad";
// 引入轮播
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
  data() {
    return {
       id:null
    };
  },
  components:{
    swiper,
    swiperSlide
  },
  computed: {
    ...mapState({
      //接收处理完的数据进行渲染
      ImgList: state => state.lazyLoad.ImgList,
      isFetching: state => state.lazyLoad.isFetching,
      Page: state => state.lazyLoad.Page,
      current: state => state.lazyLoad.current,
      showSwiper: state => state.lazyLoad.showSwiper
    }),
     // 轮播
    swiperOption(){
      let that = this;
      return {
        on:{
          slideChange:function(){
            if(this.activeIndex > (that.Page-1)*30-5){
              that.getlazyImgList({
                SerialID: this.id,
                ImageID: 6
              })
            }
            that.changSwiper({
              id:this.activeIndex,
              show:true
            })
          }
        }
      }
    },
    // 轮播
    swiper(){
      return this.$refs.mySwiper.swiper
    },
    
  },
  methods: {
    ...mapActions({
      getlazyImgList: "lazyLoad/getlazyImgList" //引入actions的方法
    }),
    ...mapMutations({
       changSwiper: "lazyLoad/changSwiper" //引入actions的方法
    }),
    //监听列表滚动
    scroll(e) {
      let height = this.$refs.section.getBoundingClientRect().height;
      // console.log(e.target.scrollTop,height-window.innerHeight)
      if (
        e.target.scrollTop > height - window.innerHeight - 20 &&
        !this.isFetching
      ) {
        this.getlazyImgList({
          SerialID: this.id,
          ImageID: 6
        });
      }
    },
    // 点击图片
    imgclick(e){
      let id = e.target.dataset.id;
      this.changSwiper({
        id,
        show:true
      })
      this.swiper.slideTo(id, 1000, false)
    },
    // 点击swiper
    swiperclick(e){
      if(e.target == e.currentTarget)
        this.changSwiper({
          show:false
        })
      }
  },
  mounted() {
    this.id = this.$route.query.id;//接收点击轮播时的id
    // console.log('id',this.$route.query.id)
    // console.log('getlazyImgList',this.getlazyImgList)
    this.getlazyImgList({
      SerialID: this.id,
      ImageID: 6
    });
  },
  updated() {
    if (this.Page == 2 && this.ImgList.length) {
      lazyLoad(".lazyLoadwrap");
    }
  }
};
</script>

<style>
.swpier{
  position:fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 111;
  background: rgba(0, 0, 0, 1);
  display: flex;
  justify-content: center;
  align-items: center;
}
.swpier img{
  width: 100%;
  height: 5rem;
  border: 0;
}
.swiper-pagination{
  position: absolute;
  left: 50%;
  bottom: .3rem;
  font-size: 0.4rem;
  color: #fff;
  transform: translate;
  transform: translate;
  transform: translateX(-50%);
}
</style>

