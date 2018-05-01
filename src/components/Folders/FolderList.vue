<template>
    <div>
        <h1 v-if="loading">Loading</h1>
        <NewFolder v-if="shouldOpenModel" @close="shouldOpenModel = false" />
        <div style="position: absolute;right: 10px;bottom: 10px">
            <a class="btn-floating btn-large waves-effect waves-light red right bottom"><i class="material-icons" @click="onAddFolder">add</i></a>
        </div>
        <div id="container">
            <table class="striped">
                <thead>
                <tr>
                    <th>Folder Name</th>
                    <th>Tags</th>
                    <th>Creation Date</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="mFolder in folders" v-bind:key="mFolder.id" style="cursor: pointer" @click="showInfo(mFolder)">
                    <td>{{ mFolder.title }}</td>
                    <td><span v-for="tag in mFolder.tags" :key="tag" >{{tag}}</span></td>
                    <td>{{ mFolder.creationDate }}</td>
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
    ...mapActions(["fetchFolders", "showFolderInfo"]),
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
    }
  }
};
</script>
<style scoped>

</style>

