<template>
    <div class="type-List">
        <div v-for="(item,index) in rightListData" :key="index">
            <p>{{item.GroupName}}</p>
            <ul class="type-List-ul">
                <li v-for="(v,i) in item.GroupList" :key="i" @click="Details(v.SerialID)">
                      <img :src="v.Picture" alt="">
                      <dl class="type-List-text">
                          <dt>{{v.AliasName}}</dt>
                          <dd>{{v.DealerPrice}}</dd>
                      </dl>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
    };
  },
  props:{//利用props接收父组件传的参数(数据)
   rightListData:{
      type:null
    }
  },
  methods:{
    //点击li根据不同iD传参数==>车系路由
    Details(id){
        // console.log(id)
       this.$router.push({path:"/Details",query:{SerialID:id}})//路由传参
     }
  },
  updated(){
  },
  mounted() {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
