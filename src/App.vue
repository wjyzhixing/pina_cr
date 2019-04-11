<template>
  <div class="container">

    <head-in></head-in>

    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 col-md-2 sidebar">
          <ul class="nav nav-sidebar">
            <li><router-link to="/pineapplesContainer">菠萝<span class="sr-only">(current)</span></router-link></li>
            <li><router-link to="/pineSelect">采集数据</router-link></li>
            <li><router-link to="/pineDenoising">去噪</router-link></li>
            <li><router-link to="/pineRegister">配准</router-link></li>
          </ul>
          <ul class="nav nav-sidebar">
            <li><router-link to="/durianContainer">榴莲<span class="sr-only">(current)</span></router-link></li>
            <li><router-link to="/durianSelect">采集数据</router-link></li>
            <li><router-link to="/durianDenoising">去噪</router-link></li>
            <li><router-link to="/durianRegister">配准</router-link></li>
          </ul>
        </div>
      
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          
          <router-view></router-view>
        </div>
      </div>
    </div>  

  <footer>
    <nav class="navbar-default navbar-fixed-bottom text-center">
      All images and contents &copy; wjy
    </nav>
  </footer>

  </div>
</template>

<script>
import head from "./components/subcomponent/head.vue"

export default {
  data(){
    return{
      msg:'hello'
    }
  },
  components:{
    'head-in':head
  }
};
</script>


<style lang="scss" scoped>

.container {
  padding-top: 50px;
	background: url('../image/index.jpeg') no-repeat;
}

.sub-header {
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.navbar-fixed-top {
  border: 0;
}

.sidebar {
  display: none;
}
@media (min-width: 768px) {
  .sidebar {
    position: fixed;
    top: 51px;
    bottom: 0;
    left: 0;
    z-index: 1000;
    display: block;
    padding: 20px;
    overflow-x: hidden;
    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
    background-color: #f5f5f5;
    border-right: 1px solid #eee;
  }
}

.nav-sidebar {
  margin-right: -21px; /* 20px padding + 1px border */
  margin-bottom: 20px;
  margin-left: -20px;
}
.nav-sidebar > li > a {
  padding-right: 20px;
  padding-left: 20px;
}
.nav-sidebar > .active > a,
.nav-sidebar > .active > a:hover,
.nav-sidebar > .active > a:focus {
  color: #fff;
  background-color: #428bca;
}

.main {
  padding: 20px;
}
@media (min-width: 768px) {
  .main {
    padding-right: 40px;
    padding-left: 40px;
  }
}
.main .page-header {
  margin-top: 0;
}

.placeholders {
  margin-bottom: 30px;
  text-align: center;
}
.placeholders h4 {
  margin-bottom: 0;
}
.placeholder {
  margin-bottom: 20px;
}
.placeholder img {
  display: inline-block;
  border-radius: 50%;
}

.nav > li > a:visited{
	background:skyblue;
}
</style>
