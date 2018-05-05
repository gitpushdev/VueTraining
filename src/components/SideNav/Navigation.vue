<template>
  <div class="root">
    <div class="header">
        <div class="userContainer">
            <img src="./images/user_profile.svg" width="50" height="50" />
            <span class="userName">Guest</span>
        </div>
    </div>
    <div class="folderList">
        <folder-nav></folder-nav>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import FolderNav from "../../components/Folders/FolderNav";
export default {
  name: "SideNav",
  components: {
    FolderNav
  },
  computed: mapState({
    loading: state => state.foldersModule.loading
  })
};
</script>
<style scoped>
.root {
  height: 100vh;
  width: 20vw;
  background-color: #ECEFF1;
  border-right: 1px #c2c2c2 solid;
}
.header {
  background-color: #455a64;
  height: 100pt;
  width: 100%;
}
.title {
  color: #222222;
}
.userContainer {
  position: absolute;
  left: 20px;
  top: 40px;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.userName {
  font-size: 12pt;
  margin-left: 5px;
  color: white;
  font-weight: bold;
  vertical-align: middle;
}
.folderList {
  flex: 1;
  flex-direction: column;
  align-content: center;
}
</style>

