<template>
    <div class="color-wrap">
        <p class="color-wrap-p">全部颜色</p>
        <div class="section">
            <p class="c-type">
               <span v-for="(item,index) in obj" @click="oncolor(index)" :key="index" :data-index="index" :class="index == ind?'typeAction':''">{{item}}</span>
            </p>
            <ul class="c-type-ul">
                <li v-for="(item,index) in list" @click="oncolorvalue(item.ColorId,item.Name)">
                    <span :style="`background:${item.Value}`"></span>
                    {{item.Name}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
        ind:0,
        num:0
    };
  },
  computed: {
    ...mapState({
      colorList: state => state.color.colorList, //总数据
      obj: state => state.color.obj, //年份
    }),
    list() {
      return this.colorList[this.obj[this.num]] //颜色
    }
  },
  methods: {
    ...mapActions({
      //  getcolorlists:"color/getcolorlists"
    }),
    oncolor(index){
      this.num = index;
      this.ind = index;
    },
    oncolorvalue(ColorId,Name){
      this.$router.push({path:'/cartype',query:{
         ColorId,
         Name,
         SerialID:this.$route.query.id
      }})  
    } 
  },
  mounted() {
    // this.colorList()
    // console.log(this.$route.query.id)
  }
};
</script>

<style>

</style>


