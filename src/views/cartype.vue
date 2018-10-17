<template>
    <div class="cartype-wrap">
        <div class="flex-row">
            <p><span @click="oncolor">颜色</span><span @click="onmoney">车款</span></p>
        </div>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';
export default {
    data(){
        return{

        }
    },
    computed:{
        
    },
    methods:{
      ...mapActions({
         getcolorlists: "color/getcolorlists", //引入actions的方法
         getmoneylists: "money/getmoneylists" //引入actions的方法
      }),
    //   颜色路由
      oncolor(){
        this.getcolorlists(this.$route.query.id)
        this.$router.push({path:'/color'})  
      },
    //   车系路由
      onmoney(){
        this.getmoneylists(this.$route.query.id)
        this.$router.push({path:'/money'})    
      }
    },
    mounted(){

    }
};
</script>

<style>

</style>


