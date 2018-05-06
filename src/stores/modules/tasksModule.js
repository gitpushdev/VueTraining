import Router from '../../routes/index';
import { createTask } from "../../models/TaskModel";
import * as tasksService from "../../network/API/tasks";
export const TasksModule = {
    namespaced: true,
    state: {
        tasks: [],
        loading: false
    },
    mutations: {
        addTask(state, task) {
            state.tasks.push(task);
        },
        removeTask(state, task) {
            state.tasks = state.tasks.filter((item) => {
                return item.id !== task.id
            })
        },
        addRange(state, tasks) {
            state.tasks.splice(0, state.tasks.length)
            if (tasks && Array.isArray(tasks)) {
                tasks.forEach((item) => {
                    state.tasks.push(item)
                })
            }
        },
        updateLoading(state, val) {
            state.loading = val;
        },
    },
    actions: {
        async createTask({ commit, rootGetters }, task) {
            commit('updateLoading', true);
            //commit('addTask', task);
            tasksService.postTask(rootGetters.user.authToken, task).then(result => {
                var task = createTask(result._id, result.content, result.isCompleted, result.creationDate, result.folderRef);
                commit('addTask', task)
                commit('updateLoading', false);
            }).catch(error => {
                commit('updateLoading', false);
            });
        },
        async deleteTaskFromServer({ commit, rootGetters }, task) {
            commit('updateLoading', true);
            tasksService.removeTask(rootGetters.user.authToken, task).then(result => {
                commit('removeTask', task);
                commit('updateLoading', false);
            }).catch(error => {
                commit('updateLoading', false);
            })
        },
        async fetchTasks({ commit, rootGetters }, folderRef) {
            try {
                var tasks = await tasksService.fetchTasks(rootGetters.user.authToken, folderRef);
                var result = [];
                if (tasks && Array.isArray(tasks)) {
                    result = tasks.map(item => {
                        return createTask(item.id, item.content,
                            item.isCompleted, item.creationDate, item.folderRef)
                    })
                }
                commit('addRange', result);
            } catch (ex) {
            }
        },
        showTaskInfo({ commit }, task) {
            Router.push({ name: "taskInfo", params: { taskId: task.id, Task: task } });
        },
        updateTask({ commit, rootGetters }, task) {
            commit('updateLoading', true);
            tasksService.updateTask(rootGetters.user.authToken, task).then(result => {
                // if (json.id) {
                //     commit('updateTask', json);
                // }
                commit('updateLoading', false);
            }).catch(error => {
                commit('updateLoading', false);
            });
        },
        fetchTaskFromServer({ commit, rootGetters }, data) {
            commit('updateLoading', true);
            tasksService.fetchTask(rootGetters.user.authToken, data.folderRef, data.taskId).then(result => {
                if (result && Array.isArray(result) && result.length > 0) {
                    var task = createTask(result[0].id, result[0].content, result[0].creationDate, result[0].folderRef);
                    commit('addRange', [task]);
                    commit('updateLoading', false);
                } else {
                    Router.push('/');
                }
            }, error => {
                commit('updateLoading', false);
            });
        }
    },
    getters: {
        tasks(state) {
            return state.tasks;
        }
    }
}