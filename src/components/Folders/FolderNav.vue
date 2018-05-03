<template>
    <div>
        <h1 v-if="loading">Loading</h1>
        <div id="container">
            <input type="button" :value="mFolder.title" v-bind:key="mFolder.id" v-for="mFolder in folders" @click="showInfo(mFolder)"/>
        </div>
    </div>
</template>
<script>
import NewFolder from "./NewFolder";
import { mapActions, mapState } from "vuex";
export default {
  name: "foldernav",
  computed: mapState({
    folders: state => state.foldersModule.folders,
    loading: state => state.foldersModule.loading
  }),
  created() {
    this.fetchAllFolders();
  },
  watch: {
    folders() {}
  },
  methods: {
    ...mapActions(["fetchFolders", "showFolderInfo"]),
    showInfo(folder) {
      this.showFolderInfo(folder);
    },
    fetchAllFolders() {
      this.fetchFolders();
    }
  }
};
</script>
<style scoped>
button {
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
}
</style>

