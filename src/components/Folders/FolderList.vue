<template>
    <div>
        <h1 v-if="loading">Loading</h1>
        <NewFolder v-if="shouldOpenModel" @close="shouldOpenModel = false" />
        <div style="position: absolute;right: 10px;bottom: 10px">
            <a class="btn-floating btn-large waves-effect waves-light red right bottom"><i class="material-icons" @click="onAddFolder">add</i></a>
        </div>
        <div id="container" style="padding: 10px;">
            <table class="striped">
                <thead>
                <tr>
                    <th style="width: 25%;text-align: center">Folder Name</th>
                    <th style="width: 25%;text-align: center">Tags</th>
                    <th style="width: 25%;text-align: center">Creation Date</th>
                    <th style="width: 25%;text-align: center">
                      <i class="material-icons">settings</i>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="mFolder in folders" v-bind:key="mFolder.id" style="cursor: pointer" @click="showInfo(mFolder)">
                    <td style="text-align: center">{{ mFolder.title }}</td>
                    <td style="text-align: center"><div class="chip"><span v-for="tag in mFolder.tags" :key="tag" >{{tag}}</span></div></td>
                    <td style="text-align: center">{{ mFolder.creationDate }}</td>
                    <td style="text-align: center"><button @click="removeFolder(mFolder)" v-on:click.stop><i class="material-icons" style="color: grey">delete</i></button></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import NewFolder from "./NewFolder";
import { mapActions, mapState } from "vuex";
export default {
  name: "folderlist",
  components: {
    NewFolder
  },
  data() {
    return {
      shouldOpenModel: false,
      isAdding: false
    };
  },
  computed: mapState({
    folders: state => state.foldersModule.folders,
    loading: state => state.foldersModule.loading
  }),
  created() {
    this.fetchAllFolders();
  },
  watch: {
    folders() {
      this.closeModal();
    }
  },
  methods: {
    ...mapActions(["fetchFolders", "showFolderInfo", "deleteFolder"]),
    onAddFolder() {
      this.shouldOpenModel = true;
      this.isAdding = true;
    },
    closeModal() {
      this.shouldOpenModel = false;
      this.isAdding = false;
    },
    showInfo(folder) {
      this.showFolderInfo(folder);
    },
    fetchAllFolders() {
      this.fetchFolders();
    },
    removeFolder(folder) {
      this.deleteFolder(folder);
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

