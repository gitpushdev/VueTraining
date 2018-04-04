<template>
  <div>
    <div id="app">
      <img src="./assets/logo.png" style="margin-right: 10px">
      <TaskList></TaskList>
    </div>
  </div>
</template>

<script>
import TaskList from "./components/TaskList";
export default {
  name: "app",
  components: {
    TaskList
  },
  methods: {
    onAddTask(task) {
      console.log(task);
    }
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
  justify-content: initial;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
