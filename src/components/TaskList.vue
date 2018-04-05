<template>
  <div>
      <h2>Add new task</h2>
      <Task @onTaskAdded="onAddTask" :InTask="newTask()" :isReadOnly="false"></Task>
      <hr />
      <Task v-bind:key="mTask.id" v-for="mTask in tasks" :InTask="mTask" :isReadOnly="true" @onMarkAsCompleted="markAsCompleted(mTask)"></Task>
  </div>
</template>
<script>
import Task from "./Task";
import { emptyTask } from "../models/TaskModel";
export default {
  name: "TaskList",
  data() {
    return {
      tasks: []
    };
  },
  components: {
    Task
  },
  methods: {
    newTask() {
      return emptyTask();
    },
    onAddTask(task) {
      this.tasks.push(task);
    },
    markAsCompleted(task) {
      task.isCompleted = !task.isCompleted;
    },
    loadTasks() {},
    removeTask(id) {
      this.tasks.filter(item => {
        return item.content !== id;
      });
    }
  }
};
</script>

