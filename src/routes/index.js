import VueRouter from 'vue-router'
import Vue from 'vue'
import App from '../App.vue'
import Root from '../pages/Root'
import NotFound from '../components/NotFound'
import TaskDetails from '../components/Tasks/TaskDetails'

Vue.use(VueRouter);

var routes = [
    { path: '/', component: Root },
    { path: '/notfound', component: NotFound },
    { path: '/task/:id', name: 'taskInfo', component: TaskDetails, props: true }
]

export default new VueRouter({
    routes
})