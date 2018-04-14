import Vuex from 'vuex';
import Vue from 'vue';
import {TasksModule} from './modules/tasksModule';

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        tasksModule: TasksModule
    }
});