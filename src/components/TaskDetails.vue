<template>
  <div style="padding: 10px">
      <span style="margin-right: 8px">Task:</span>
      <span style="color: #C62828">{{ Task.content }}</span>
      <hr style="background-color: #eaeaea;border: 0px;height: 1px"/>
      <span>Is Completed: {{Task.isCompleted}}</span>
      <hr style="background-color: #eaeaea;border: 0px;height: 1px"/>
      <button @click="goBack">Go Back</button>
  </div>
</template>
<script>
export default {
  name: "TaskDetails",
  props: ["Task"],
  methods: {
    goBack() {
      window.history.length > 0 ? this.$router.go(-1) : this.$router.push("/");
    }
  },
  created() {
    if (!this.Task) {
        
    }
  }
};
</script>
<style scoped>

</style>

