import Router from '../../routes/index';

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
        createTask({ commit }, task) {
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
                commit('addTask', json)
                commit('updateLoading', false);
            }).catch((error) => {
                commit('updateLoading', false);
                console.log(error)
            })
        },
        removeTask({ commit }, task) {
            commit('removeTask', task);
        },
        fetchTasks({ commit }) {
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
                commit('addRange', json);
            });
        },
        showTaskInfo({ commit }, task) {
            Router.push({ name: "taskInfo", params: { id: '10', Task: task } });
        }
    },
    getters: {
        tasks(state) {
            return state.tasks;
        },
    }
}