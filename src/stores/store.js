import Vuex from 'vuex';
import Vue from 'vue';
import Router from '../routes/index';
import {TasksModule} from './modules/tasksModule';
import { UserModule } from './modules/userModule';
import { FolderModule } from './modules/foldersModule';

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        userModule: UserModule,
        tasksModule: TasksModule,
        foldersModule: FolderModule
    },
    actions: {
        navHome(){
            Router.push('/');
        }
    }
});