<template>
    <div class="cartype-wrap">
        <div class="flex-row">
            <p><span @click="oncolor">颜色</span><span @click="onmoney">车款</span></p>
        </div>

        <div class="img-wrap">
            <div class="img-box" v-for="(item,index) in samplelist" :key="index">
                <div class="cartyp-div" @click="onlazyLoad">
                    <p>{{item.Name}}</p>
                    <p>{{item.Count}}张></p>
                </div>
                <ul class="img-box-ul">
                    <li v-for="(value,index) in item.List">
                        <img :src="value.Url.replace('{0}',value.LowSize)" :key="index">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
    data(){
        return{
            ind:null
        }
    },
    components:{
        swiper,
        swiperSlide
    },
    computed:{
      ...mapState({
         samplelist:state => state.sample.samplelist
      }),
      swiper(){
        return this.$refs.mySwiper.swiper
      },
      swiperOption(){

      }
    },
    methods:{
      ...mapActions({
         getcolorlists: "color/getcolorlists", //引入actions的方法
         getmoneylists: "money/getmoneylists", //引入actions的方法
         getdatasamplelist:"sample/getdatasamplelist"
      }),
    //   颜色路由
      oncolor(){
        this.getcolorlists(this.$route.query.id)
        this.$router.push({path:'/color',query:{id:this.$route.query.id}})  
      },
    //   车系路由
      onmoney(){
        this.getmoneylists(this.$route.query.id)
        this.$router.push({path:'/money'})    
      },
      onlazyLoad() {
        // this.getmoneylists(this.$route.query.id)
        this.$router.push({path:'/lazyLoad',query:{id:this.ind}})  
      }
      
    },
    mounted(){
        this.ind = this.$route.query.id
        // console.log( this.ind)

        if(this.$route.query.ColorId) {
           this.getdatasamplelist({
               ColorId:this.$route.query.ColorId,
               SerialID:this.$route.query.SerialID//调用请求数据的方法
           });
        }else{
            this.getdatasamplelist(this.$route.query.id);
        }
        // console.log(this.$route.query)

    }
};
</script>

<style>

</style>


