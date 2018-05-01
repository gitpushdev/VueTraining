<template>
    <div>
        <div v-if="isReadOnly">
            <div>
                <h6>Task Content: <span readonly="readonly" type="text" :style="{ color: !InTask.isCompleted ? 'red' : 'green'}">{{ InTask.content }}</span></h6>
            </div>
            <div>
                <h6>Is Completed: {{InTask.isCompleted ? 'Yes' : 'No'}}</h6>
            </div>
            <input type="button" @click="toggleCompletion" :value="buttonText"/>
            <input type="button" @click="deleteTask" style="margin-left: 10px" value="Delete"/>
            <hr/>
        </div>
        <div v-else>
            <div class="input-field s6">
                <label for="t-content">Task Content</label>
                <input type="text" v-model="content" id="t-content"/>
            </div>
            <div>
                <label>
                    <input type="checkbox" class="filled-in" checked="checked" v-model="isCompleted"/>
                    <span>Is a completed task?</span>
                </label>
            </div>
            <div>
                <input type="button" style="margin-top: 10px;" class="waves-effect waves-light btn btn-flat" @click="cancel"
                       value="Cancel"/>
                <input type="button" style="margin-top: 10px;float: right" class="waves-effect waves-light btn" @click="addTask"
                       value="Add Task"/>
            </div>
        </div>
    </div>
</template>

<script>
import { createTask } from "../../models/TaskModel";
import { mapActions, mapState } from "vuex";

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
    ...mapActions(["updateTask", "deleteTaskFromServer"]),
    toggleCompletion() {
      this.InTask.isCompleted = !this.InTask.isCompleted;
      this.updateTask(this.InTask);
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
    cancel() {
      this.$emit("closeModal");
      this.content = "";
      this.isCompleted = false;
    },
    deleteTask() {
      //this.$emit("onTaskDelete", this.InTask);
      this.deleteTaskFromServer(this.InTask);
    }
  }
};
</script>

