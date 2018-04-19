<template>
  <div>
    <Toolbar />
    <div id="root">
       <div class="card-panel" style="flex: 1;margin-left: 8px; margin-right: 8px">
          <TaskList></TaskList>
       </div>
    </div>
  </div>
</template>

<script>
import TaskList from "./components/TaskList";
import Toolbar from "./components/Toolbar";
import NewTaskPage from "./pages/NewTaskPage";
const routes = {
  "/new_task": NewTaskPage
};
const NotFound = { template: "<p>Page not found</p>" };
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
  },
  computed: {
    ViewComponent() {
      return routes[this.currentLocation] || NotFound;
    }
  },
  render(h) {
    return h(this.ViewComponent);
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
