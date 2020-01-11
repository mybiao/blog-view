<template>
  <div id="pagedetail">
      <div class="pageHead">
          <h3>{{page.PageTitle}}</h3>
          <div class="options">
            <span>创建时间：{{page.PageTime}}</span>
            <span>阅读次数：{{page.Count}}</span>
          </div>
          <div class="tags">
            <span v-for="(item,index) in page.Tags" :key="index">
                  {{item.TagName}}
            </span>
          </div>
      </div>
      <div class="pagebody" v-html="pageText" v-highlight>
          
      </div>
      <div class="pagebottom">
        <div><a href="http://www.beian.miit.gov.cn/">皖ICP备19020335</a></div>
        <div>@2019-2020 biao</div>
    </div>
  </div>
</template>

<script>

import marked from 'marked'
import 'highlight.js/styles/atom-one-dark.css'
export default {
    name:"pagecontent",
    data:function(){
        return {
            pageText:"",
            pid:this.$route.params.pageId,
            page:{},

        }
    },
    created:function(){
        this.$axios({
            method:"get",
            url:"/page/detail/"+this.pid,
        }).then(res=>{
            //解析markdown
            let body = res.data.body;
            this.pageText = marked(body.text);
            this.page = body.page;
        }).catch(err=>{
            window.console.log(err)
        })
    },
    mounted:function(){
    }
    

}
</script>

<style>
    #pagedetail{
        margin-left: 2%;
        height: 100%;
        margin-right: 2%;
    }
    .pagebody{
        margin-bottom: 100px;
    }
    .pageHead{
        height: 20%;
        border: 1px solid #e9ecef;
        box-shadow: #e7e7e7 10px 10px 20px 5px;
        text-align: center;
    }
    .options{
        display: inline;
        text-align: start;
        font-size: 0.8em;
        display: inline-block;
    }
    .options span{
        margin-right: 10px;
    }
    .tags{
        display: inline-block;
    }
    .tags span{
        background-color: #17a2b8;
        border-radius: 3px;
        color: white;
        font-size: 0.7em;
        margin-right: 10px;
        padding: 2px;
    }
</style>