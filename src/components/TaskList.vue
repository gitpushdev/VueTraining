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
                    <th>Task Content</th>
                    <th>Is Completed</th>
                    <th>Creation Date</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="mTask in tasks" v-bind:key="mTask.id" @click="showTaskInfo(mTask)">
                    <td>{{ mTask.content }}</td>
                    <td>{{ mTask.isCompleted }}</td>
                    <td>{{ mTask.creationDate }}</td>
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
import { emptyTask } from "../models/TaskModel";

export default {
  name: "TaskList",
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
    this.fetchTasks();
  },
  watch: {
    tasks() {
      if (this.isAdding) {
        this.shouldOpenModel = false;
        this.isAdding = false;
      }
    }
  },
  methods: {
    ...mapActions(["createTask", "fetchTasks"]),
    newTask() {
      return emptyTask();
    },
    onAddTask() {
      this.isAdding = true;
      this.shouldOpenModel = true;
    },
    showTaskInfo(task) {
      this.$router.push({ name: "taskInfo", params: { id: "10", Task: task } });
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
