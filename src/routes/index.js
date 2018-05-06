import VueRouter from 'vue-router'
import Vue from 'vue'
import App from '../App.vue'
import Root from '../pages/Root'
import Login from '../components/User/Login'
import NotFound from '../components/NotFound'
import TaskList from '../components/Tasks/TaskList'
import TaskDetails from '../components/Tasks/TaskDetails'
import store from '../stores/store';
import { createTask, emptyTask } from '../models/TaskModel'

Vue.use(VueRouter);

var routes = [
    {
        path: '/', name: 'login', component: Login, beforeEnter: (to, from, next) => {
            if (store.state.userModule.isLoggedIn) {
                next({ name: 'root' });
            }else{
                next();
            }
        }
    },
    { path: '/folders', name: 'root', component: Root },
    { path: '/notfound', component: NotFound },
    {
        path: '/folders/:folderId', name: 'folderInfo', component: TaskList, props: true
    },
    {
        path: '/folders/:folderId/task/:taskId', name: 'taskInfo',
        component: TaskDetails, props: true, beforeEnter: (to, from, next) => {
            if (!to.params.Task) {
                to.params.Task = emptyTask();
            }
            next();
        }
    }
]
var mRouter = new VueRouter({
    mode: 'history',
    routes: routes
});

mRouter.beforeEach((to, from, next) => {
    if (to.name === 'login') {
        next();
    } else {
        if (!store.state.userModule.isLoggedIn) {
            next({ name: 'login' });
        } else {
            next();
        }
    }
});

export default mRouter;