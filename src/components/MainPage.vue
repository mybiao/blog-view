<template>
  <div id="pages">
    <div class="pagetop">
    <div class="tags">
      <ul>
        <li v-for="(v,k,index) in tags" :key="index">
          <router-link :to="{path:'/tag/detail/'+k}" active-class="active2">{{k+'('+v+')'}}</router-link>
        </li>
      </ul>
    </div>
      <pageEle v-for="(page,index) in pages" :key="index" 
      :page="page"
      class="page"
      ></pageEle>
    <div class="pagec">
    <el-pagination background
     layout="prev, pager, next, total"
     :total="count"
     :page-size="size"
     :current-page="cur"
     @current-change="pageClick"
     @prev-click="this.cur++;pageClick"
    ></el-pagination>
    </div>
    </div>
    <!-- 页脚 -->
    <div class="pagebottom">
      <div><a href="http://www.beian.miit.gov.cn/">皖ICP备19020335</a></div>
      <div>@2019-2020 biao</div>
    </div>
  </div>
</template>

<script>

import pageEle from './PageEle'
import bus from './../bus'

export default {
  data:function(){
    return{
      pages:[],
      cur:1,
      count:0,
      pageSize:0,
      size:8,
      tags:{},
      curTag:"",
      tagName:"",
    }
  },
  methods:{
    getPage:function(cur){
      this.$axios({
        method:"get",
        url:"/page/query?cur="+cur+"&size="+this.size,
      }).then(res=>{
        let body = res.data.body;
        this.pages = body.Data;
        this.cur = body.CurrPage;
        this.count = body.Count;
        this.pageSize = body.PageSize;
        this.size = body.PerPageCount;
        bus.$emit("pagecount",body.Count);
      });
    },
    pageClick:function(cur){
      this.cur = cur;
      //点击分页后跳转路由
      this.$router.push({path:this.$route.path,query:{cur:this.cur}})
    },
    getTagDetail:function(cur){
      this.$axios({
        method:"get",
        url:"/tag/detail/"+this.tagName+"?cur="+cur+"&size="+this.size
      }).then(res=>{
        let body = res.data.body;
        this.pages = body.Data;
        this.cur = body.CurrPage;
        this.count = body.Count;
        this.pageSize = body.PageSize;
        this.size = body.PerPageCount;
      })
    }
  },
  components:{
    pageEle,
  },
  created:function(){
    if(this.$route.name==="home"){
      this.cur = parseInt(this.$route.query.cur);
      if(isNaN(this.cur)) this.cur = 1;
      this.getPage(this.cur);
    }else if(this.$route.name==="tag"){
      this.cur = parseInt(this.$route.query.cur);
      if(isNaN(this.cur)) this.cur = 1;
      this.tagName = this.$route.params.tagName;
      this.getTagDetail(this.cur)
    }
    
    this.$axios({
      method:"get",
      url:"/tag/query",
    }).then(res=>{
      this.tags = res.data;
    })
    

  },
  activated:function(){

  },
  watch:{
    //监听路由分页参数值是否变化
    '$route':function(){
      if(this.$route.path==='/'){
        this.cur = parseInt(this.$route.query.cur);
        if(isNaN(this.cur)) this.cur = 1;
        this.getPage(this.cur);
      }
      if(this.$route.name==="tag"){
        this.tagName = this.$route.params.tagName;
        this.cur = parseInt(this.$route.query.cur);
        if(isNaN(this.cur)) this.cur = 1;
        this.getTagDetail(this.cur)
      }
    },

  }
}
</script>

<style> 
 #pages{
   margin-left: 2%;
   height: 100%;
   margin-right: 2%;
 }
 .page{
   margin-bottom: 2%;
 }
 .pagetop{
   min-height: 84%;
   padding-bottom: 6%;
 }
 /* 分页布局 */
 .pagec{
   width: 100%;
   text-align: center;
 }
 .tags{
   width: 100%;
   margin-bottom: 3%;
 }
 .tags ul{
   list-style: none;
   padding-left: 0;
   display: inline-block;
 }
 .tags ul li{
   display: inline-block;
   padding-bottom: 5px;
 }
 .tags ul li a{
   padding-left: 10px;
   padding-top: 5px;
   padding-right: 10px;
   padding-bottom: 5px;

 }
 .tags ul li a:hover{
   color: green;
 }
 .active2{
   color: black;
 }
 .pagebottom{
   text-align: center;
   vertical-align: bottom;
   
 }
 .pagebottom a{
   color: black;
   font-size: 0.9em;
 }
 .pagebottom a:hover{
   color: #007bff;
 }
</style>