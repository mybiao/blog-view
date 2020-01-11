<template>
  <div id="app">
    <div id="lc">
      <leftmenu></leftmenu>
    </div>
    <div id="rbody">
      <div id="mc">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </div>
      <div id="rc">
        <div class="card"></div>
      </div>
    </div>
  </div>
</template>

<script>
import leftmenu from "./components/LeftMenu";

export default {
  name: "app",
  components: {
    leftmenu
  }
};
</script>

<style>
@media (max-width: 768px) {
  #app {
    height: 100%;
    width: 100%;
  }
  #lc {
    width: 100%;
    background-color: lightgrey;
  }
}
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
a {
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
}

@media (min-width: 768px) {
  #app {
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
  }
  #lc {
    width: 15%;
    height: 100%;
    background-color: lightgrey;
  }
  #rbody {
    width: 85%;
    height: 100%;
    overflow-y: scroll;
    display: flex;
  }
  /* 设置滚动条宽度、背景颜色、边框 */
  #rbody::-webkit-scrollbar {
    width: 6px;
    background-color: gainsboro;
    border: 0.5px solid #e9ecef;
    border-radius: 3px;
  }
  /* 设置滑块的背景色 */
  #rbody::-webkit-scrollbar-thumb {
    background: #007bff;
    border-radius: 3px;
  }
  #mc {
    width: 80%;
    height: 100%;
  }
  #rc {
    width: 20%;
    height: 100%;
    display: flex;
  }
}

/* .card{
  width: 100px;
  height: 100px;
  background-color: darkgray;
  position: fixed;
} */
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}
.h1,
h1 {
  font-size: 2.5rem;
}
.h2,
h2 {
  font-size: 2rem;
}
.h3,
h3 {
  font-size: 1.75rem;
}
.h4,
h4 {
  font-size: 1.5rem;
}
.h5,
h5 {
  font-size: 1.25rem;
}
.h6,
h6 {
  font-size: 1rem;
}
code,
kbd,
pre,
samp {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
  font-size: 0.85rem;
}
code,pre{
  max-height: 400px;
}
code::-webkit-scrollbar {
  height: 3px;
  width: 3px;
  background-color: gainsboro;
  border: 0.5px solid #e9ecef;
  border-radius: 3px;
}
  /* 设置滑块的背景色 */
  code::-webkit-scrollbar-thumb {
    background: #007bff;
    border-radius: 3px;
  }
</style>
