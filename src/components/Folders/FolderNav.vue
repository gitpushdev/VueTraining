<template>
    <div>
        <h1 v-if="loading">Loading</h1>
        <div id="container" style="margin-top: 10px">
            <button class="waves-effect waves-light btn btn-flat" style="width: 100%;" @click="onAddFolder">Create Folder</button>
            <hr />
            <button type="button" class="waves-effect waves-light btn btn-flat" style="width: 100%" v-bind:key="mFolder.id" v-for="mFolder in folders" @click="showInfo(mFolder)">{{mFolder.title}}</button>
        </div>
    </div>
</template>
<script>
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
    ...mapActions(["fetchFolders", "showFolderInfo", "showFolders"]),
    showInfo(folder) {
      this.showFolderInfo(folder);
    },
    fetchAllFolders() {
      this.fetchFolders();
    },
    onAddFolder() {
      this.showFolders();
    }
  }
};
</script>
<style scoped>
input:hover,
button:hover {
  color: #ffffff;
}
hr {
  border: 0px;
  height: 1px;
  background-color: #aaa;
}
</style>

