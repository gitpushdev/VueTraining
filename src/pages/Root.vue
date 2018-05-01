<template>
  <div id="root">
      <FolderList></FolderList>
  </div>
</template>

<script>
import FolderList from "../components/Folders/FolderList";
import Toolbar from "../components/Toolbar";
export default {
  name: "root",
  components: {
    FolderList,
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
