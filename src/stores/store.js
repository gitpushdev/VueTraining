import Vuex from 'vuex';
import Vue from 'vue';
import {TasksModule} from './modules/tasksModule';
import { UserModule } from './modules/userModule';

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        userModule: UserModule,
        tasksModule: TasksModule
    }
});