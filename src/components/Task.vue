<template>
  <div>
      <input type="text" v-model="content" placeholder="Enter task content"/>
      <input type="checkbox" v-model="isCompleted" />
      <button @click="addTask">Add Task</button>
  </div>
</template>

<script>
export default {
  name: "Task",
  data() {
    return {
      content: "",
      isCompleted: false
    };
  },
  methods: {
    markAsCompelted() {
      this.isCompleted = true;
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
        this.$emit("onTaskAdded", {
          content: this.content,
          isCompleted: this.isCompleted
        });
        this.content = "";
        this.isCompleted = false;
      }else{
          alert("Fill in missing information")
      }
    }
  }
};
</script>

