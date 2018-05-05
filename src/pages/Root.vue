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
