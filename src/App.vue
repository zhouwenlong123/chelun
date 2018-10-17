<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import {mapState,mapMutations} from 'vuex';
import loading from '@/components/Loading';
export default {
  name: "APP",
  data() {
    return {}
  },
  components:{
    loading
  },
  computed:{
    // ...mapState({
    //   LOADING:(state)=>{
    //     return state.loading.LOADING
    //   }
    // })
  },
  methods:{
    // ...mapMutations({
    //    showLoading:'loading/showLoading',
    //    hideLoading:'loading/hideLoading'
    // })
  },
  mounted(){
    // console.log(this.LOADING,'123');
  }
};
</script>

<style>
@import url('./css/style.css');
@import url('./css/button.css');
@import url('./css/reset.css');
@import url('./css/common.css');
</style>
