<template>
<div>
  <Task @onTaskAdded="onAddTask" :InTask="newTask()" :isReadOnly="false"></Task>
  <hr style="border:0px; height: 1px; background-color: #AAAAAA"/>
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
            <tr v-for="mTask in tasks" v-bind:key="mTask.id">
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
