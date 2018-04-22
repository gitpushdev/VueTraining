import Router from '../../routes/index';
import {createTask} from "../../models/TaskModel";

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
            state.tasks.filter((item) => {
                item.id === task.id
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
        createTask({commit}, task) {
            commit('updateLoading', true);
            //commit('addTask', task);
            fetch('http://localhost:3000/todos', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
            }).then((result) => {
                if (result.ok) {
                    return result.json()
                }
                return {}
            }).then(json => {
                var task = createTask(json._id, json.content, json.isCompleted, json.creationDate);
                commit('addTask', task)
                commit('updateLoading', false);
            }).catch((error) => {
                commit('updateLoading', false);
                console.log(error)
            })
        },
        deleteTaskFromServer({commit}, task) {
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
        fetchTasks({commit}) {
            fetch('http://localhost:3000/todos', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((result) => {
                if (result.ok) {
                    return result.json()
                }
                return []
            }).then((json) => {
                var result = [];
                if (json && Array.isArray(json)) {
                    for (var i = 0; i < json.length; i++) {
                        var task = createTask(json[i]._id, json[i].content,
                            json[i].isCompleted, json[i].creationDate);
                        result.push(task);
                    }
                }
                commit('addRange', result);
            });
        },
        showTaskInfo({commit}, task) {
            Router.push({name: "taskInfo", params: {id: task.id, Task: task}});
        },
        updateTask({commit}, task) {
            commit('updateLoading', true);
            fetch('http://localhost:3000/todos', {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(task)
            }).then((result) => {
                if (result.ok) {
                    return result.json()
                }
                return {}
            }).then((json) => {
                if (json.id) {
                    //commit('updateTask', json);
                }
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