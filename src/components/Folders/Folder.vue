<template>
  <div>
    <h1>{{ folder.title }}</h1>
    <hr style="border: 0px; background-color: #FAFAFA"/>
    <TaskList @folderRef="folder.id"></TaskList>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import TaskList from "../Tasks/TaskList";
import { emptyFolder } from "../../models/FolderModel";
export default {
  name: "folder",
  props: ["folder"],
  components: {
    TaskList
  },
  data() {
    return {
      folder: emptyFolder()
    };
  },
  created() {}
};
</script>
<style scoped>

</style>
