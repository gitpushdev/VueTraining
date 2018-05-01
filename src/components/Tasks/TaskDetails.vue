<template>
    <div style="padding: 10px">
        <Task :InTask="Task" :isReadOnly="true"></Task>
        <hr style="background-color: #eaeaea;border: 0px;height: 1px"/>
        <input type="button" @click="goBack" style="cursor: pointer" value="Go Back" />
    </div>
</template>
<script>
    import Task from "./Task";

    export default {
        name: "TaskDetails",
        props: ["Task"],
        components: {
            Task
        },
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

