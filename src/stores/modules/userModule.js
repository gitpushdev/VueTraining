import * as userService from '../../network/API/user'
import Router from '../../routes/index'

export const UserModule = {
    namespaced: true,
    state: {
        isLoggedIn: localStorage.getItem('isLoggedIn') || false,
        loading: false,
        loggedInUser: JSON.parse(localStorage.getItem('user')) || {
            firstName: "",
            lastName: "",
            email: "",
            authToken: ""
        }
    },
    mutations: {
        updateLoading(state, val) {
            state.loading = val;
        },
        login(state, val) {
            localStorage.setItem('isLoggedIn', val.isSuccess);
            localStorage.setItem('user', JSON.stringify(val.user));
            state.isLoggedIn = val.isSuccess;
            state.loggedInUser = val.user;
        }
    },
    actions: {
        login({ commit }, user) {
            commit('updateLoading', true);
            userService.loginUser(user.username, user.password).then(result => {
                commit('login', { isSuccess: true, user: result });
                commit('updateLoading', false);
                Router.push({ name: 'folders' })
            }).catch(error => {
                commit('updateLoading', false);
            });
        }
    },
    getters: {
        authStatus(state) {
            return state.isLoggedIn;
        },
        loggedInUser(state) {
            return state.loggedInUser;
        }
    }
}