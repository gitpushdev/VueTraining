// Code in this page uses code of: https://vuejs.org/v2/examples/modal.html

<template>
<transition name="modal">
  <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              <h4>Add New Task</h4>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
             <Task @onTaskAdded="onAddTask" :InTask="newTask()" :isReadOnly="false" @closeModal="closeModal"></Task>
            </slot>
          </div>
        </div>
      </div>
    </div>
</transition>
</template>
<script>
import Task from "./Task";
import { emptyTask } from "../../models/TaskModel";
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
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
