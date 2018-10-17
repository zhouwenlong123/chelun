<template>
    <div class="color-wrap">
        <p class="color-wrap-p">全部颜色</p>
        <div class="section">
            <p class="c-type">
               <span v-for="(item,index) in obj" @click="oncolor(index)" :key="index" :data-index="index" :class="index == ind?'typeAction':''">{{item}}</span>
            </p>
            <ul class="c-type-ul">
                <li v-for="(item,index) in list">
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
      colorList: state => state.color.colorList,
      obj: state => state.color.obj
    }),
    list() {
      return this.colorList[this.obj[this.num]]
    }
  },
  methods: {
    oncolor(index){
      this.num = index;
      this.ind = index;
    },
  },
  mounted() {
    
  }
};
</script>

<style>

</style>


