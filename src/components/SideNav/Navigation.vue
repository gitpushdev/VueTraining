<template>
  <div class="root">
    <div class="header">
        <div class="userContainer">
            <div style="display: flex; flex-direction: row;align-items:center">
                <img src="./images/user_profile.svg" width="50" height="50" style="margin-left: 10px" />
              <span class="userName">{{'Guest'}}</span>
            </div>
            <div style="text-align: right;padding-right: 5px;">
              <button class="waves-effect waves-light btn btn-flat" style="display: inline-flex;align-items: center;">
                <span class="material-icons" style="color: white">exit_to_app</span>
              </button>
          </div>
        </div>
    </div>
    <div class="folderList">
        <folder-nav></folder-nav>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import FolderNav from "../../components/Folders/FolderNav";
export default {
  name: "SideNav",
  components: {
    FolderNav
  },
  computed: mapState({
    loading: state => state.foldersModule.loading,
    user: state => state.userModule.loggedInUser
  })
};
</script>
<style scoped>
.root {
  height: 100vh;
  width: 20vw;
  display: flex;
  flex-direction: column;
  flex-grow: 0.01;
  background-color: #eceff1;
  border-right: 1px #c2c2c2 solid;
}
.header {
  background-color: #455a64;
  height: 100pt;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.title {
  color: #222222;
}
.userContainer {
  display: flex;
  align-content: center;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}
.userName {
  font-size: 12pt;
  color: white;
  margin-left: 10px;
  font-weight: bold;
  vertical-align: middle;
}
.folderList {
  flex: 1;
  flex-direction: column;
  align-content: center;
}
</style>

