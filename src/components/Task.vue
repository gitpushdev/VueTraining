<template>
<div>
  <div v-if="isReadOnly">
     <div>
        <label>Task Content: </label>
        <span readonly="readonly" type="text" :style="{ color: InTask.isCompleted ? 'red' : 'blue'}">{{ InTask.content }}</span>
      </div>
      <div>
        <label>Is Completed: </label>
        <input readonly="readonly" type="checkbox" v-model="InTask.isCompleted" />
      </div>
      <button @click="toggleCompletion">{{ buttonText }}</button>
      <button @click="deleteTask" style="margin-left: 10px">Delete</button>
      <hr />
  </div>
  <div v-else>
      <div class="input-field s6">
        <label for="t-content">Task Content</label>
        <input type="text" v-model="content" id="t-content"/>
      </div>
      <div>
        <label>
        <input type="checkbox" class="filled-in" checked="checked" v-model="isCompleted" />
        <span>Is a completed task?</span>
      </label>
      </div>
      <div style="text-align: right">
        <button style="margin-top: 10px;" class="waves-effect waves-light btn" @click="addTask">Add Task</button>
      </div>
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
    },
    deleteTask() {
      this.$emit("onTaskDelete", this.InTask);
    }
  }
};
</script>

