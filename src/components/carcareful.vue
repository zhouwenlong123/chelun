<template>
    <div class="carcareful-wrap">
        <p class="c-type">
           <span v-for="(item,index) in yearArr" :key="index" @click="onmoney(index)" :class="index == ind?'typeAction':''">{{item}}</span>
        </p>
        <div class="money-type-list">
            <div v-for="(item,index) in newList" :key="index">
                <p>{{item.title}}</p>
                <ul class="money-type-list-ul">
                    <li v-for="(value,index) in item.list" :key="index" @click="oncarful(value.car_id,value)">
                        <p>
                            <span>{{value.car_name}}</span>
                            <span>{{value.market_attribute.dealer_price_min}}起</span>
                        </p>
                        <p>
                            <span>{{value.horse_power}}马力{{value.gear_num}}档</span>
                            <span class="zhidaojia">指导价 {{value.market_attribute.official_refer_price}}</span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
        ind:0,
        newList:[]
    };
  },
  computed: {
    ...mapState({
       yearArr: state => state.money.yearArr,
       carList: state => state.money.carList
    })
  },
  methods: {
    ...mapActions({
      getmoneylists: "money/getmoneylists"
    }),
    onmoney(index){
      this.ind = index;
      let newList = [];
      this.carList[index].list.forEach(value =>{
          let title = value.exhaust_str + "/" + value.horse_power + ' ' + value.inhale_type;
          newList.push({
                title:title,
                list:[value]
          })
      })
      this.newList = newList;
    },
    oncarful(id,value){
    //   console.log(value)
    //   console.log(id)
      this.$emit('carefulList',value,false)
    }
  },
  mounted() {}
};
</script>

<style>
</style>

