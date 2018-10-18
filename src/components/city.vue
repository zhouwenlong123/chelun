<template>
 <div class="select-city">
    <div class="province">
        <div class="location">
           <p>自动定位</p> 
           <p>{{item.CityName?item.CityName:'北京'}}</p>
        </div>
        <div class="list">
            <p>省市</p>
            <ul class="list-ul">
                <li v-for="(item,index) in citylist" :key="index" :data-id="item.CityID" @click="oncitylist(item.CityID)">{{item.CityName}}</li>
            </ul>
        </div>
    </div>

    <div :class="flag?'cityaction':'city'" @click="oncityhide">
        <ul :class="flag?'city-ulAction':'city-ul'">
            <li v-for="(item,index) in citylistid" :key="index" :data-id="item.CityID" @click="onChoiceCity(item,index)">{{item.CityName}}</li>
        </ul>
    </div>
 </div>
</template>

<script>
import {mapActions,mapState} from 'vuex';
export default {
  data(){
    return {
      flag:false,
      item:{},
      style:".chengshilist",
      ind:0
    }
  },
  computed:{
    ...mapState({//接收处理完的数据进行渲染
       citylist:state => state.city.citylist,
       citylistid:state => state.city.citylistid
    })
  },
  methods:{
    ...mapActions({
       getdatacitylist:'city/getdatacitylist',
       getcitylistid:'city/getcitylistid' 
    }),
    oncitylist(id){
      this.flag = true;
      // console.log('citylistid2-2',this.citylistid(id))
      // console.log('getcitylistid1-1',this.getcitylistid(id))
      this.getcitylistid(id)
    },
    onChoiceCity(item,id){
      this.item = item;
      console.log(this.style)
      this.$emit('headCallBack',item,false);//子向父传值
      console.log(id)

      
    },
    oncityhide(){//黑色盒子
      this.flag = false
    }
  },
  mounted(){
  }
}
</script>

<style>

</style>

