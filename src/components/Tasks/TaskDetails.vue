<template>
    <div style="padding: 10px">
        <Task :InTask="Task" :isReadOnly="true"></Task>
        <hr style="background-color: #eaeaea;border: 0px;height: 1px"/>
        <input type="button" @click="goBack" style="cursor: pointer" value="Go Back" />
    </div>
</template>
<script>
import Task from "./Task";
import { mapActions, mapState } from "vuex";
import { emptyTask } from "../../models/TaskModel";
export default {
  name: "TaskDetails",
  data() {
    return {
      Task: emptyTask()
    };
  },
  components: {
    Task
  },
  methods: {
    ...mapActions(["fetchTaskFromServer"]),
    goBack() {
      window.history.length > 0 ? this.$router.go(-1) : this.$router.push("/");
    }
  },
  watch: {
    Task
  },
  mounted() {
    if (!this.Task) {
      this.fetchTaskFromServer(
        this.$route.params.folderRef,
        this.$route.params.taskId
      );
    }
  }
};
</script>
<style scoped>

</style>

