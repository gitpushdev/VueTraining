<template>
    <nav>
        <div class="nav-wrapper toolbarStyle">
            <a href="#" @click="navToHome" class="brand-logo"><i class="material-icons">notes</i>To Do</a>
            <ul class="right hide-on-med-and-down">
                <li><a href="sass.html"><i class="material-icons">search</i></a></li>
                <li><a href="badges.html"><i class="material-icons">view_module</i></a></li>
                <li><a href="#" @click="reloadTasks"><i class="material-icons">refresh</i></a></li>
                <li><a href="mobile.html"><i class="material-icons">more_vert</i></a></li>
                <li v-if="isLoggedIn"><a href="sass.html">Profile</a></li>
            </ul>
        </div>
    </nav>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Toolbar",
  methods: {
    ...mapActions(["navHome"]),
    navToHome() {
      this.navHome();
    }
  },
  computed: mapState({
    isLoggedIn: state => state.userModule.isLoggedIn
  })
};
</script>
<style>
#toolbar {
  display: flex;
  flex: 1;
  background-color: #009688;
  box-shadow: 1px;
}

.toolbarStyle {
  background-color: #009688;
  padding-left: 8px;
  padding-right: 8px;
}
</style>

