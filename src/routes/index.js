import VueRouter from 'vue-router'
import Vue from 'vue'
import App from '../App.vue'
import Root from '../pages/Root'
import NotFound from '../components/NotFound'
import TaskList from '../components/Tasks/TaskList'
import TaskDetails from '../components/Tasks/TaskDetails'
import store from '../stores/store';
import { createTask } from '../models/TaskModel';

Vue.use(VueRouter);

var routes = [
    { path: '/', component: Root },
    { path: '/notfound', component: NotFound },
    {
        path: '/folders/:folderId', name: 'folderInfo', component: TaskList, props: true
    },
    {
        path: '/folders/:folderId/task/:taskId', name: 'taskInfo',
        component: TaskDetails, props: true,
    }
]

export default new VueRouter({
    mode: 'history',
    routes: routes
})