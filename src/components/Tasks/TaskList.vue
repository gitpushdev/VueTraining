<template>
    <div>
        <h1 v-if="loading">Loading</h1>
        <NewTask v-if="shouldOpenModel" @close="shouldOpenModel = false" />
        <div style="position: absolute;right: 10px;bottom: 10px">
            <a class="btn-floating btn-large waves-effect waves-light red right bottom"><i class="material-icons" @click="onAddTask">add</i></a>
        </div>
        <div id="container">
            <table class="striped">
                <thead>
                <tr>
                    <th style="width: 30%;text-align: center">Task Content</th>
                    <th style="width: 30%;text-align: center">Is Completed</th>
                    <th style="width: 30%;text-align: center">Creation Date</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="mTask in tasks" v-bind:key="mTask.id" style="cursor: pointer" @click="showInfo(mTask)">
                    <td style="width: 30%;text-align: center">{{ mTask.content }}</td>
                    <td style="width: 30%;text-align: center">{{ mTask.isCompleted }}</td>
                    <td style="width: 30%;text-align: center">{{ mTask.creationDate }}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import Task from "./Task";
import NewTask from "./NewTask";
import { mapActions, mapState } from "vuex";
import { emptyTask } from "../../models/TaskModel";

export default {
  name: "TaskList",
  props: ["folderRef"],
  data() {
    return {
      shouldOpenModel: false,
      isAdding: false
    };
  },
  computed: mapState({
    tasks: state => state.tasksModule.tasks,
    loading: state => state.tasksModule.loading
  }),
  components: {
    Task,
    NewTask
  },
  created() {
    this.fetchTasks(this.$route.params.folderId);
  },
  watch: {
    tasks() {
      if (this.isAdding) {
        this.shouldOpenModel = false;
        this.isAdding = false;
      }
    },
    $route: function(newRoute, oldRoute) {
      if (newRoute.params.folderId !== oldRoute.params.folderId) {
        this.fetchTasks(this.$route.params.folderId);
      }
    }
  },
  methods: {
    ...mapActions(["createTask", "fetchTasks", "showTaskInfo"]),
    newTask() {
      return emptyTask();
    },
    onAddTask() {
      this.isAdding = true;
      this.shouldOpenModel = true;
    },
    showInfo(task) {
      //this.$router.push({ name: "taskInfo", params: { id: "10", Task: task } });
      this.showTaskInfo(task);
    },
    removeTask(task) {
      this.tasks = this.tasks.filter(item => {
        return item.id !== task.id;
      });
    }
  }
};
</script>

<style>
#container {
  flex: 1;
  padding: 10px;
}
</style>
