export const TasksModule = {
    state: {
        tasks: []
    },
    mutations: {
        addTask(state, task) {
            state.tasks.push(task);
        }
    },
    actions: {
        createTask({commit}, task) {
            commit('addTask', task);
        }
    },
    getters: {
        tasks(state) {
            return state.tasks;
        }
    }
}