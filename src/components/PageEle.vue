<template>
  <div class="pageCard">
      <div class="pageTitle">
      <router-link :to="{path:'/page/detail/'+page.PageId}">{{page.PageTitle}}</router-link>
      </div>
      <div class="pageOption">
          {{page.PageTime}} 访问次数{{page.Count}}
      </div>
      <div class="pageBody">{{page.Fragment}}</div>
  </div>
</template>

<script>
export default {
    name:"pageEle",
    props:['page'],
    methods:{
        pageDetail:function(){

        }
    }
}
</script>

<style>
    .pageCard{
        width: 100%;
        border: #e9ecef solid 1.5px;
        padding-left: 2%;
    }
    .pageTitle{
        margin-top: 15px;
        margin-bottom: 10px;
        font-size: large;
    }
    .pageOption{
        font-size: small;
        margin-bottom: 6px;
    }
    .pageBody{
        box-shadow: #e7e7e7 10px 10px 20px 5px;
        margin-bottom: 20px;
        margin-right: 20px;
    }
</style>