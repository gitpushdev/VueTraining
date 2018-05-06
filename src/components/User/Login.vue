<template>
  <div id="root" class="root">
      <div class="card loginContainer">
        <h5 style="margin-bottom: 40px">Login to your account</h5>
        <div>
          <input class="input" v-model="username" style="width: 80%;border-bottom: 0px;" type="email" placeholder="Email" />
          <input class="input" v-model="password" style="width: 80%;border-bottom: 0px" type="password" placeholder="Password" />
        </div>
          <input type="button" style="margin-top: 20px;width: 150px;color: white" class="waves-effect waves-light btn" value="Login" :disabled="loading" @click="loginUser"/>
      </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  computed: mapState({
    isLoggedIn: state => state.userModule.isLoggedIn,
    loading: state => state.userModule.loading
  }),
  watch: {
    isLoggedIn() {
      if (this.isLoggedIn) {
        this.password = "";
      }
    }
  },
  methods: {
    ...mapActions("userModule", ["login"]),
    loginUser() {
      this.login({ username: this.username, password: this.password });
    }
  }
};
</script>
<style scoped>
.root {
  background-color: #455a64;
  flex: 1;
  display: flex;
  height: 100vh;
  width: 100vw;
  align-self: center;
  align-content: center;
  align-items: center;
  justify-content: center;
}
.loginContainer {
  width: 300pt;
  height: 210pt;
  padding: 10px;
  text-align: center;
}
#sep {
  background-color: #aaaaaa;
  border-width: 0px;
  height: 1px;
}
::placeholder {
  color: #222222;
}
</style>

