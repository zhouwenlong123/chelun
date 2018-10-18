<template>
    <div class="loading" id="loading" v-show="show">
        <div>
            <img src="../assets/loading.gif" alt="">
            <p>加载中</p>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {

    };
  },
  computed: {
    ...mapState({
       show:state =>state.loading
    })
  },
  methods: {
  },
  mounted() {
  }
};
</script>

<style>
</style>
