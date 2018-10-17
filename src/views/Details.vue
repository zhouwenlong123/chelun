<template>
  <div class="Details-wapper">
     <div class="Details-boxs" >
        <div class="img" @click="onimg">
           <img :src="detailsList.Picture" alt="">
           <span data-hover="hover">{{detailsList.pic_group_count}}张照片</span>
        </div>

         <div class="info">
            <div class="info-text">
              <p>{{detailsList.market_attribute&&detailsList.market_attribute.dealer_price}}<span>万</span></p> 
              <p>指导价 {{detailsList.market_attribute&&detailsList.market_attribute.official_refer_price}}</p> 
            </div>
            <div class="info-button">
              <button data-hover="hover" @click="oninquiry(detailsList.SerialID)">{{detailsList.BottomEntranceTitle}}</button>
            </div>
        </div>

        <div class="screen-boxs">
            <div class="screen-year">
               <span v-for="(item,index) in yearArr" @click="getyear(index)" :key="index" :class="index == ind?'yearactive':''">{{item}}</span>
            </div>

            <div class="product-wrap">
              <div class="screen-product">
                  <div v-for="(item,index) in newList" :key="index">
                      <p class="product-title">{{item.title}}</p>
                      <ul class="product-ul">
                        <li v-for="(value,index) in item.list" :key="index">
                              <p>{{value.market_attribute.year}}款 {{value.car_name}}</p>
                              <p>{{value.horse_power}}马力 {{value.gear_num}}档</p>
                              <p>
                                <span>指导价 {{value.market_attribute.official_refer_price}}</span>
                                <span> {{value.market_attribute.dealer_price_min}}起</span>
                              </p>
                              <button class="btns" @click="oninquiry(detailsList.SerialID)">询问底价</button>
                          </li>
                      </ul>
                  </div>
              </div>
            </div>
            
        </div>

    </div>

     <div class="Details-buttom" @click="oninquiry(detailsList.SerialID)">
        <p>{{detailsList.BottomEntranceTitle}}</p>
        <p>本地经销商为你报价</p>
     </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll';
import {getinquirylist} from '../api/index';
import { mapState, mapActions } from "vuex";
export default {
  name: "",
  data() {
    return {
      // SerialID:null,
      detailsList:{},
      yearArr: [],
      carList: [],
      newList: [],
      ind:0
    }
  },
  computed:{//
    ...mapState({//state中定义的变量赋值的数据
       lowpriceList: state => state.details.lowpriceList
    })
  },
  methods:{
    ...mapActions({
      priceList:'details/priceList'
    }),
    //点击ID
    getyear(index){
        this.ind = index;
        let newList = [];
        this.carList[index].list.forEach(value=>{
            let title = value.exhaust_str + "/" + value.horse_power + ' ' + value.inhale_type;
            newList.push({
                title:title,
                list:[value]
            })
        })
        this.newList = newList
    },
    //询问低价路由
    oninquiry(SerialID){
      //截取车系数据的id传参
      let dijiaId = this.detailsList.BottomEntranceLink;
      // console.log(this.detailsList)
      let dijiaIdS = dijiaId.match(/car\/(\S*)/);
      // console.log(dijiaIdS[1])
      this.$router.push({path:"/Inquiry",query:{inquiryId:dijiaIdS[1]}})//路由传参
    },
    //询问低价懒加载
    onimg(){
      // let dijiaId = this.detailsList.BottomEntranceLink;
      // let dijiaIdS = dijiaId.match(/car\/(\S*)/);
      this.$router.push({path:"/cartype",query:{id:this.$route.query.SerialID}})//路由传参
    }
  },
  mounted(){
    let SerialID = this.$route.query.SerialID;//接收车系路由的id
    //请求数据Id数据
    getinquirylist(SerialID).then(res =>{
      this.detailsList = res.data;
      // console.log(this.detailsList)
      //筛选
      let list = this.detailsList.list
      // console.log(list)
      //筛选年份
      let yearArr = ["全部"],
          carList = [{ year: "全部", list: [] }];
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
      this.carList = carList;
      this.yearArr = yearArr;
    })
    //滚动
  }
};
</script>

<style>
.yearactive{
   color: #3aacff;
}
</style>

