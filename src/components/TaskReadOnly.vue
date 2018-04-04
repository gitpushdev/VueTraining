<template>
  <div>
      <div>
        <label>Task Content: </label>
        <span readonly="readonly" type="text">{{ content }}</span>
      </div>
      <div>
        <label>Is Completed: </label>
        <input readonly="readonly" type="checkbox" v-model="isCompleted" />
      </div>
      <button @click="toggleCompletion">{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
  name: "TaskReadOnly",
  props: ["content", "isCompleted"],
  computed: {
    buttonText: function() {
      return this.isCompleted ? "Mark As In Progress" : "Mark As Compelted";
    }
  },
  methods: {
    toggleCompletion() {
      this.$emit("onMarkAsCompleted", {
        content: this.content,
        isCompleted: this.isCompleted
      });
    }
  }
};
</script>

