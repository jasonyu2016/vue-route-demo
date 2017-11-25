<template>
  <div id="app">
    <div class="nav">
      <h1>{{$route.name}}</h1>
    </div>
    
    <router-view></router-view>

    <div class="footer">
      <ul>
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/news">新闻</router-link></li>
        <li><router-link to="/profile">我的</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f7f7f7;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
html,body {
  max-width: 640px;
  margin: 0 auto;
  height: 100%;
}
.nav {
  height: 49px;
  line-height: 49px;
  background: #fff;
  text-align: center;
}
h1 {
  font-size: 18px;
}
a {
  text-decoration: none;
  color: #000;
}
.footer {
  width: 100%;
  height: 49px;
  line-height: 49px;
  background: #fff;
  position: fixed;
  bottom: 0;
  z-index: 9;
  border-top: 1px #ccc solid;
}
.footer ul {
  display: flex;
}
.footer ul li {
  flex:1;
}
</style>
