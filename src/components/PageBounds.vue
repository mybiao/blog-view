// 定义分页组件
<template>
    <div class="pb">
        <ul>
            <li v-if="cur>1"><a href="javascript:void(0)"  @click="cur--;pageClick()">上一页</a></li>
            <li v-else><a href="javascript:void(0)" class="disable" @click="disable">上一页</a></li>
            <li v-for="index in indexs" :key="index" :class="{active1:cur==index}">
                <a href="javascript:void(0)" @click="btnClick(index)">{{index}}</a>
            </li>
            <li v-if="cur != pageSize" ><a href="javascript:void(0)" v-on:click="cur++,pageClick()">下一页</a></li>
            <li v-else class="disable"><a href="javascript:void(0)" @click="disable">下一页</a></li>
            <li ><a @click="disable">共{{ pageSize }}页</a></li>
            <li><a  @click="disable">总条数{{count}}</a></li>
        </ul>
    </div>
</template>

<script>

export default {
    data:function(){
        return{
        }
    },
    props:['cur','count','pageSize','size'],
    methods:{
        btnClick:function(index){
            if (index!=this.cur){
                this.cur = parseInt(index);
                // this.$emit("changepage",this.cur);
                this.$router.push({path:this.$route.path,query:{cur:this.cur}})
            }
        },
        pageClick:function(){
            this.$router.push({path:this.$route.path,query:{cur:this.cur}})
        },
        disable:function(){
            return false;
        }
    },
    created:function(){
        
    },
    computed:{
        indexs:function(){
            let left = 1;
            let right = this.pageSize;
            var arr=[];
            if(this.pageSize>7){
                if(this.cur > 5 && this.cur < this.pageSize-4){
            left = this.cur - 3;
            right = this.cur + 3;
          }else{
            if(this.cur<=5){
              left = 1;
              right = 7;
            }else{
              right = this.pageSize;
              left = this.pageSize - 6;
            }
          }

        }
            while(left<=right){
                arr.push(left)
                left++
            }
            return arr;
        }
    }
}
</script>

<style>
    .pb ul{
        list-style: none;
        padding-left: 0px;
        display: inline;
    }
    .pb ul li{
        display: inline-block;
        
    }
    .pb ul li a{
        display: inline-block;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 7px;
        padding-bottom: 7px;
        border: 1px solid #e9ecef;
        font-size: 0.9em;
    }
    .pb ul li a:hover{
        background-color: silver;
    }
    .disable{
        opacity: 0.3;
    }
    .active1{
        background-color: #0366d6;
    }
    .active1 a{
        color: white;
    }
</style>