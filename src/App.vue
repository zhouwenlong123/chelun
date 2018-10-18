<template>
  <div id="app">
    <router-view/>
    <loading></loading>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
import loading from '@/components/Loading';
export default {
  name: "APP",
  data() {
    return {}
  },
  components:{
    loading
  }
};
</script>

<style>
@import url('./css/style.css');
@import url('./css/button.css');
@import url('./css/reset.css');
@import url('./css/common.css');
</style>
