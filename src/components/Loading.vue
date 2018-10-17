<template>
    <div class="loading" id="loading">
        <div>
            <img src="../assets/loading.gif" alt="">
            <p>加载中</p>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  computed: {

  },
  methods: {
    //通常请求都希望以异步的方式，方便数据操作
    async test(){
        this.$store.commit('showLoading')
        //这里需要将 axios 提前挂载到 Vue的属性上。
        // await this.$axios.get('xxx/xxxx/xxx')
        this.$store.commit('hideLoading')
    }
  },
  mounted() {

  }
};
</script>

<style>
</style>
