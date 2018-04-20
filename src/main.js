import Vue from 'vue'
import App from './App.vue'
import store from './stores/store';
import Router from './routes/index';

Vue.config.productionTip = false

new Vue({
    store,
    router: Router,
    render: h => h(App)
}).$mount('#app')
