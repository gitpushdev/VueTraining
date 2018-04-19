<template>
<transition name="modal">
    <div ref="newTaskModal" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-content">
        <h4>Add New Task</h4>
        <Task @onTaskAdded="onAddTask" :InTask="newTask()" :isReadOnly="false"></Task>
        </div>
        <div class="modal-footer">
        <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat" >Agree</a>
        </div>
      </div>
    </div>
</transition>
</template>
<script>
import Task from "./Task";
import { emptyTask } from "../models/TaskModel";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    Task
  },
  created() {},
  methods: {
    ...mapActions(["createTask", "fetchTasks"]),
    newTask() {
      return emptyTask();
    },
    onAddTask(task) {
      //this.tasks.push(task);
      this.createTask(task);
    },
    closeModal() {
      this.$emit("close");
    }
  }
};
</script>
<style scoped>

</style>
