<template>
    <div style="padding: 10px">
        <div>
            <h6>Task: {{ InTask.content }}</h6>
        </div>
        <div style="margin-bottom: 30px">
            <h6>
              Status: <span :style="{ color: !InTask.isCompleted ? 'red' : 'green'}">{{InTask.isCompleted ? 'Completed' : 'Pending'}}</span>
            </h6>
            <h6>
              Created on: {{ InTask.creationDate }}
            </h6>
        </div>
         <hr style="background-color: #eaeaea;border: 0px;height: 1px; margin-left: -20px;margin-right: -20px"/>
       <div style="float: right; display: block; margin-top: 10px">
          <input type="button" @click="toggleCompletion" :value="buttonText"  class="waves-effect waves-light btn" />
          <input type="button" @click="deleteTask" style="margin-left: 10px" value="Delete"  class="waves-effect waves-light btn" />
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

