import Router from '../../routes/index';
import { createTask } from "../../models/TaskModel";
import * as tasksService from "../../network/API/tasks";
export const TasksModule = {
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
        async createTask({ commit }, task) {
            commit('updateLoading', true);
            //commit('addTask', task);
            tasksService.postTask(task).then(result => {
                var task = createTask(result._id, result.content, result.isCompleted, result.creationDate, result.folderRef);
                commit('addTask', task)
                commit('updateLoading', false);
            }).catch(error => {
                commit('updateLoading', false);
                console.log(error)
            });
        },
        deleteTaskFromServer({ commit }, task) {
            //commit('removeTask', task);
            commit('updateLoading', true);
            fetch('http://localhost:3000/todos?id=' + task.id, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((result) => {
                if (result.ok) {
                    commit('removeTask', task);
                }
                commit('updateLoading', false);
            }).catch((error) => {
            })
        },
        async fetchTasks({ commit }, folderRef) {
            try {
                var tasks = await tasksService.fetchTasks('TOKEN', folderRef);
                var result = [];
                if (tasks && Array.isArray(tasks)) {
                    result = tasks.map(item => {
                        return createTask(item.id, item.content,
                            item.isCompleted, item.creationDate, item.folderRef)
                    })
                }
                commit('addRange', result);
            } catch (ex) {
                console.log(ex);
            }
        },
        showTaskInfo({ commit }, task) {
            Router.push({ name: "taskInfo", params: { taskId: task.id, Task: task } });
        },
        updateTask({ commit }, task) {
            commit('updateLoading', true);
            tasksService.updateTask(task).then(result => {
                // if (json.id) {
                //     commit('updateTask', json);
                // }
                commit('updateLoading', false);
            }).catch(error => {
                commit('updateLoading', false);
            });
        },
        fetchTaskFromServer({ commit }, data) {
            commit('updateLoading', true);
            tasksService.fetchTask('', data.folderRef, data.taskId).then(result => {
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
        },
    }
}