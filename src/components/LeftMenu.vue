<template>
  <div id="left-menu">
    <div class="userImg">
      <a href="/">
        <img src="./../assets/xiaoqx.jpg" />
      </a>
    </div>
    <div class="menu-list">
      <ul>
        <li>
          <router-link :to="{name:menus[0].pathname,query:{cur:1}}" @click.native="activeFunc(0)">{{menus[0].name}}</router-link>
        </li>
        <li>
          <a href="javascript:void(0)">{{menus[1].name}}</a>
        </li>
      </ul>
      
    </div>
    
  </div>
</template>

<script>
import bus from './../bus'

export default {
  name: "leftmenu",
  data: function() {
    return {
      menus: [
        { name: "文章列表", pathname: "home",active:false },
        { name: "标  签", pathname:"tag" ,active:false},
      ],
     
    };
  },
  created:function(){
       bus.$on('pagecount',(count)=>{
         this.menus[0].name ="文章列表("+count+")";
       })
  },
  methods:{
      activeFunc:function(index){
        for(let i=0;i<this.menus.length;i++){
            this.menus[i].active = false;
        }
        this.menus[index].active = true;

      }
  }
};
</script>

<style>
.left-menu {
  width: 100%;
  height: 100%;
  position: relative;
}
@media (max-width: 768px){
  .userImg {
  text-align: center;
  width: 100%;
  margin-bottom: 5%
}
img {
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
}
.menu-list ul{
    margin-bottom: 0;
    padding-left: 0px;
}
.menu-list ul li {
  list-style: none;
  display: block;
  padding-top: 5px;
  padding-bottom: 5px;
}
.menu-list ul li:hover{
    background-color: snow;
}
.menu-list ul li a:hover {
  color: cadetblue;
  width: 100%
}
.active{
  background-color: blue;
}
}
@media(min-width:768px){
.userImg {
  text-align: center;
  width: 80%;
  margin-left: 10%;
  margin-top: 20%;
}
img {
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
}

.menu-list ul{
    padding-left: 0px;
    margin-bottom: 0;
}
.menu-list ul li {
  list-style: none;
  display: block;
  padding-left: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.menu-list ul li:hover{
    background-color: snow;
}
.menu-list ul li a:hover {
  color: cadetblue;
  width: 100%
}
a {
  text-decoration: none;
}
.active{
  background-color: snow;
}
.tagList{
  position: absolute;
  overflow-y: auto;
  max-height: 60%;
  width: 15%;
}
}

</style>