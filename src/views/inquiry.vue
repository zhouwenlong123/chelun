<template>
    <div class="inquiry-wrap">
      <header class="inquiry-header"> 
         <p>可向多个商家咨询最低价，商家及时回复</p> 
         <img src="../assets/icon-help.png">
      </header>

      <div class="content">
        <div class="content-dl">
            <dl class="dl" @click="oncarcareful">
               <dt>
                  <img :src="details.serial&&details.serial.Picture" alt="">
               </dt>
               <dd>
                  <p>{{details.serial&&details.serial.AliasName}}</p>
                  <p>{{details.car_name}}</p>
               </dd>
            </dl>
        </div>

        <div class="self-info">
          <p class="tip">个人信息</p> 
          <ul class="self-info-ul">
            <li>
              <span>姓名</span> 
              <input type="text" placeholder="输入你的真实中文姓名" maxlength="4" ref="Inputname" @keyup="Inputname">
            </li> 
            <li>
              <span>手机</span> 
              <input type="tel" placeholder="输入你的真实手机号码" maxlength="11" ref="Inputpassword" @keyup="Inputpassword">
            </li> 
            <li>
              <span>城市</span> 
              <span @click="oncity">{{mag.CityName?mag.CityName:'北京'}}</span>
            </li>
          </ul> 

          <template>
              <div class="quotation"><button data-hover="hover" @click="open">询最低价</button></div>
          </template>
        </div>
        
        <div class="dealer-wrap">
          <div class="dealer-info">
            <p class="tip">选择报价经销商</p> 
              <ul class="dealer-ul" ref="dealerul">
                <li class="dealer" v-for="(item,index) in list" :key="index" id="dealer" @click="onChoice(index)">
                  <p><span>{{item.dealerShortName}}</span> <span>{{item.vendorPrice}}万</span></p> 
                  <p><span>{{item.address}}</span> <span>{{item.saleRange}}</span></p>
                  <el-checkbox @click="checked" class="checkbox"></el-checkbox>
                </li>
              </ul>
          </div>
        </div>
      </div>  

      <div :class="flag?'city-type':'city-typeAction'">
        <city v-on:headCallBack="headcall"></city>
      </div>

      <div :class="show?'carcarefulActive':'carcareful'">
         <carcareful  v-on:carefulList="carefuldata"></carcareful>
      </div>
    </div>
</template>

<script>
import {getdijiaList} from '../api/index';
import { mapState, mapActions } from "vuex";
import city from '@/components/city';
import carcareful from '@/components/carcareful';
export default {
  name: "",
  data() {
    return {
      checked: true,
      details:{},//介绍
      list:[],//地区城市
      result1: null,//用户名
      result2:null,//手机号
      name:'',
      password:'',
      flag:false,
      mag:'',
      show:false,
      value:''
    };
  },
  components:{
     city,
     carcareful
  },
  computed: {
    ...mapState({
      //state中定义的变量赋值的数据
      inquiryList: state => state.inquiry.inquiryList,
      citylist:state => state.city.citylist //城市数据
    })
    
  },
  methods: {
    ...mapActions({
       getinquiryList:'inquiry/getinquiryList',
       getcitylist:'city/getcitylist' //城市数据
    }),
    //弹框
    open() {
        if(!this.name === true) {
           this.$alert("请输入用户名",{
            confirmButtonText: '好',
            callback: action => {
              this.$message({
                type: 'info',
                message: `action: ${ action }`
              });
            }
          });
        }else{
          this.$alert("请输入手机号",{
            confirmButtonText: '好',
            callback: action => {
              this.$message({
                type: 'info',
                message: `action: ${ action }`
              });
            }
          });
        }
        if(this.name===true && this.password===true){
           this.$alert("已发送短信",{
            confirmButtonText: '好',
            callback: action => {
              this.$message({
                type: 'info',
                message: `action: ${ action }`
              });
            }
          });
        }
        
      },
    //获取input值
    Inputname(e){
      this.result1 = this.$refs.Inputname.value;
      let nameReg = /[\u4e00-\u9fa5]/;
      this.name = nameReg.test(this.result1);
    },
    Inputpassword(e){
      this.result2 = this.$refs.Inputpassword.value;
      let passwordReg = /^1[34578]\d{9}$/;
      this.password = passwordReg.test(this.result2);
    },
    //城市
    oncity(){
      this.flag = true;
    },
    //单选 多选
    onChoice(index){
      // console.log(index)
    },
    headcall(mag,a){//接收子组件的数据
      this.flag = a;
      this.mag = mag;
      // console.log('mag',this.mag,a)
    },
    //车系数据
    oncarcareful(){
      this.show = true
    },
    carefuldata(value,a){
      this.flag = a;
      this.value = value;
      // console.log('value',value)
    }
  },
  mounted() {
     let inquiryId = this.$route.query.inquiryId;//接收低价数据id
     getdijiaList(inquiryId).then(res =>{
        this.details = res.data.details;//介绍
        this.list = res.data.list;//地区城市
        // console.log(res.data.details)
        // console.log(res.data.list)
     })
     this.getcitylist()
  },
  updated(){
  }
};
</script>

<style>
.el-message-box{
  width: 250px;
}
.el-message-box__message p,.el-message-box__btns{
  text-align: center;
}
.el-button--small{
    padding: 10px 28px;
}
.carcareful{
  position: fixed;
  left: 0;
  top: 0;
  background: #f4f4f4;
  width: 100%;
  height: 100%;
  transform: translateY(100%);
  transition: all 1s linear;
}
.carcarefulActive{
  position: fixed;
  left: 0;
  top: 0;
  background: #f4f4f4;
  width: 100%;
  height: 100%;
  transform: translateY(0%);
  transition: all 1s linear;
  z-index: 130;
}
.checkbox{
   position: absolute;
   left: 0;
   top: 50%;
   border-radius: 50%;
}
.el-checkbox__inner{
  border-radius: 50%;
}
</style>

