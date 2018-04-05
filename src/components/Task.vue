<template>
<div>
  <div v-if="isReadOnly">
     <div>
        <label>Task Content: </label>
        <span readonly="readonly" type="text">{{ InTask.content }}</span>
      </div>
      <div>
        <label>Is Completed: </label>
        <input readonly="readonly" type="checkbox" v-bind:checked="InTask.isCompleted" />
      </div>
      <button @click="toggleCompletion">{{ buttonText }}</button>
  </div>
  <div v-else>
      <input type="text" v-model="content" placeholder="Enter task content"/>
      <input type="checkbox" v-model="isCompleted" />
      <button @click="addTask">Add Task</button>
  </div>
</div>
</template>

<script>
import { createTask } from "../models/TaskModel";
export default {
  name: "Task",
  props: ["InTask", "isReadOnly"],
  data() {
    return {
      content: "",
      isCompleted: false
    };
  },
  computed: {
    buttonText: function() {
      return this.InTask && this.InTask.isCompleted
        ? "Mark as In Progress"
        : "Mark as Completed";
    }
  },
  methods: {
    toggleCompletion() {
      this.InTask.isCompleted = !this.InTask.isCompleted;
    },
    isTaskValid() {
      var isValid = true;
      if (this.content.length === 0) {
        isValid = false;
      }
      return isValid;
    },
    addTask() {
      if (this.isTaskValid()) {
        this.$emit(
          "onTaskAdded",
          createTask(Math.random(), this.content, this.isCompleted)
        );
        this.content = "";
        this.isCompleted = false;
      } else {
        alert("Fill in missing information");
      }
    }
  }
};
</script>

