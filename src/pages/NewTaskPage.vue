
<template>
  <Task @onTaskAdded="onAddTask" :InTask="newTask()" :isReadOnly="false"></Task>
</template>
<script>
import Task from "../components/Task";
import { createTask } from "../models/TaskModel";
export default {
  name: "NewTask",
  data() {
    return {
      task: createTask()
    };
  },
  components: {
    Task
  },
  methods: {
    onAddTask(task) {},
    newTask() {
      return createTask();
    }
  }
};
</script>
