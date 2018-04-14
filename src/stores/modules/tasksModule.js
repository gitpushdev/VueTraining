export const TasksModule = {
    state: {
        tasks: []
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
            if (tasks && Array.isArray(tasks)) {
                tasks.forEach((item) => {
                    state.tasks.push(item)
                })
            }
        }
    },
    actions: {
        createTask({commit}, task) {
            commit('addTask', task);
        },
        removeTask({commit}, task) {
            commit('removeTask', task);
        },
        fetchTasks({commit}) {
            fetch('http://localhost:3000/todos',{
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
        }
    },
    getters: {
        tasks(state) {
            return state.tasks;
        },
    }
}