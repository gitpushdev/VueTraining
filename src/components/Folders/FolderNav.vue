<template>
    <div>
        <h1 v-if="loading">Loading</h1>
        <div id="container" style="margin-top: 10px">
            <button class="waves-effect waves-light btn btn-flat" style="width: 100%;" @click="onAddFolder">Show Folders</button>
            <hr />
            <button type="button" class="waves-effect waves-light btn btn-flat" :style="[{'width': '100%'}, selectedFolder == mFolder.id ? {'background-color': '#455a64', 'color': 'white'} : {'background-color': 'transparent', 'color': 'black'}]" v-bind:key="mFolder.id" v-for="mFolder in folders" @click="showInfo(mFolder)">{{mFolder.title}}</button>
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
  data() {
    return {
      selectedFolder: ""
    };
  },
  watch: {
    folders() {}
  },
  methods: {
    ...mapActions("foldersModule", [
      "fetchFolders",
      "showFolderInfo",
      "showFolders"
    ]),
    showInfo(folder) {
      this.selectedFolder = folder.id;
      this.showFolderInfo(folder);
    },
    fetchAllFolders() {
      this.fetchFolders();
    },
    onAddFolder() {
      this.selectedFolder = "";
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
  background-color: #c2c2c2;
}
</style>

