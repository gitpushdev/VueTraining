<template>
  <div id="root">
      <div class="card-panel" style="flex: 1;margin-left: 8px; margin-right: 8px">
        <TaskList></TaskList>
      </div>
  </div>
</template>

<script>
import TaskList from "../components/TaskList";
import Toolbar from "../components/Toolbar";
export default {
  name: "root",
  components: {
    TaskList,
    Toolbar
  },
  data() {
    return {
      currentLocation: window.location.pathname
    };
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
