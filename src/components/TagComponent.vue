<template>
  <div class="tagbody">
    <div class="tagone" v-for="(item,index) in tags" :key="index">
        {{item}}
    </div>
    <div>
      <pagebounds></pagebounds>
    </div>
  </div>
</template>

<script>
import pagebounds from './PageBounds'

export default {
    name:"tagcomponent",
    components:{
      pagebounds,
    },
    data:function(){
        return{
            tags:['java','spring boot','ajax','数据结构','python','spring cloud','go','javascript']
        }
    }
}
</script>

<style>
  .tagbody{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .tagone{
    border: #e9ecef solid 1.5px;
  }
</style>