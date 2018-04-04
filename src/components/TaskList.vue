<template>
  <div>
      <h2>Add new task</h2>
      <Task @onTaskAdded="onAddTask"></Task>
      <hr />
      <task-read-only v-bind:key="mTask.id" v-for="mTask in tasks" :content="mTask.content" :isCompleted="mTask.isCompleted" @onMarkAsCompleted="markAsCompleted(mTask)"></task-read-only>
  </div>
</template>
<script>
import TaskReadOnly from "./TaskReadOnly";
import Task from "./Task";
export default {
  name: "TaskList",
  data() {
    return {
      tasks: []
    };
  },
  components: {
    TaskReadOnly,
    Task
  },
  methods: {
    onAddTask(task) {
      this.tasks.push(task);
    },
    markAsCompleted(task){
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

