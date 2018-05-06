<template>
  <div>
    <div id="app" v-if="isLoggedIn">
        <SideNav />
         <div style="flex: 1;margin-left: 0px; margin-right: 0px;margin-top: 0px;margin-bottom: 0px;background-color: white" >
         <router-view style="flex: 1;"></router-view>
      </div>
    </div>
    <div id="app" v-else>
      <router-view style="flex: 1;"></router-view>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Toolbar from "./components/Toolbar";
import SideNav from "./components/SideNav/Navigation";
export default {
  name: "app",
  components: {
    Toolbar,
    SideNav
  },
  computed: mapState({
    isLoggedIn: state => state.userModule.isLoggedIn
  })
};
</script>

<style>
.breadcrumb:before {
  color: #222222;
}
.breadcrumb,
.breadcrumb:last-child {
  color: #000000;
}
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
  background-color: #eceff1;
}
</style>
