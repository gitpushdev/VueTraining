<template>
  <div>
    <Toolbar />
    <div id="app">
       <router-view style="flex: 1"></router-view>
    </div>
  </div>
</template>
<script>
import TaskList from "./components/TaskList";
import Toolbar from "./components/Toolbar";
export default {
  name: "app",
  components: {
    Toolbar
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
  margin-top: 10px;
}
</style>
