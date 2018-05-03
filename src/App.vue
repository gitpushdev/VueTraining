<template>
  <div>
    <div id="app">
        <SideNav />   
         <div style="flex: 1;margin-left: 8px; margin-right: 8px">
         <router-view style="flex: 1;"></router-view>      
      </div>
    </div>
  </div>
</template>
<script>
import Toolbar from "./components/Toolbar";
import SideNav from "./components/SideNav/Navigation";
export default {
  name: "app",
  components: {
    Toolbar,
    SideNav
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  display: flex;
  flex: 1;
  justify-content: initial;
  color: #2c3e50;
  margin-top: 0px;
  background-color: #ECEFF1
}
</style>
