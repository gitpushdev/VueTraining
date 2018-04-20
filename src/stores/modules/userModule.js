export const UserModule = {
    state: {
        isLoggedIn: false,
        loading: false
    },
    mutations: {
        updateLoading(state, val) {
            state.loading = val;
        },
        login(state, val) {
            state.isLoggedIn = val
        }
    },
    getters: {
        authStatus(state) {
            return state.isLoggedIn;
        },
    }
}