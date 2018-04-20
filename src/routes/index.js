import VueRouter from 'vue-router'
import Vue from 'vue'
import App from '../App.vue'
import Root from '../pages/Root'
import NotFound from '../components/NotFound'

Vue.use(VueRouter);

var routes = [
    { path: '/', component: Root },
    { path: '/notfound', component: NotFound }
]

export default new VueRouter({
    routes
})