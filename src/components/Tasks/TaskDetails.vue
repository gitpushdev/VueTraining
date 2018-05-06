<template>
    <div style="padding: 10px">
        <input type="button" @click="goBack" style="cursor: pointer" value="Back"  class="waves-effect waves-light btn btn-flat" />
        <hr style="background-color: #eaeaea;border: 0px;height: 1px; margin-left: -10px;margin-right: -10px"/>
        <Task :InTask="Task" :isReadOnly="true"></Task>
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
    ...mapActions("tasksModule", ["fetchTaskFromServer"]),
    goBack() {
      window.history.length > 0 ? this.$router.go(-1) : this.$router.push("/");
    }
  },
  computed: mapState({
    taskList: state => state.tasksModule.tasks
  }),
  watch: {
    taskList() {
      var task = this.taskList.find(item => {
        return item.id === this.$route.params.taskId;
      });
      if (!task) {
        this.goBack();
      } else {
        this.Task = task;
      }
    }
  },
  mounted() {
    if (this.$route.params.Task.content.length === 0) {
      this.fetchTaskFromServer({
        folderRef: this.$route.params.folderId,
        taskId: this.$route.params.taskId
      });
    } else {
      this.Task = this.$route.params.Task;
    }
  }
};
</script>
<style scoped>

</style>

