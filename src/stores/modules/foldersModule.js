import Router from '../../routes/index';
import { emptyFolder, Folder } from "../../models/FolderModel";
import * as folderService from "../../network/API/folders";
export const FolderModule = {
    state: {
        folders: [],
        loading: false
    },
    mutations: {
        addFolder(state, folder) {
            state.folders.push(folder);
        },
        removeFolder(state, folder) {
            state.folders = state.folders.filter((item) => {
                return item.id !== folder.id
            })
        },
        addRange(state, folders) {
            state.folders.splice(0, state.folders.length)
            if (folders && Array.isArray(folders)) {
                folders.forEach((item) => {
                    state.folders.push(item)
                })
            }
        },
        updateLoading(state, val) {
            state.loading = val;
        },
    },
    actions: {
        async createFolder({ commit }, folder) {
            commit('updateLoading', true);
            //commit('addTask', task);
            folderService.createFolder(folder).then(result => {
                var folder = Folder(result._id, result.title, result.tags, result.creationDate);
                commit('addFolder', folder)
                commit('updateLoading', false);
            }).catch(error => {
                commit('updateLoading', false);
                console.log(error)
            });
        },
        async deleteFolder({ commit }, folder) {
            commit('updateLoading', true);
            await folderService.deleteFolder(folder.id).then(() => {
                commit('updateLoading', false);
                commit('removeFolder', folder);
            }).catch(error => {
                commit('updateLoading', false);
            });
        },
        async fetchFolders({ commit }) {
            try {
                commit('updateLoading', false);
                var folders = await folderService.fetchFolders('TOKEN').then(folders => {
                    var result = [];
                    if (folders && Array.isArray(folders)) {
                        result = folders.map(item => {
                            return Folder(item.id, item.title,
                                item.tags, item.creationDate)
                        })
                    }
                    commit('addRange', result);
                    commit('updateLoading', false);
                }).catch(error => {
                    console.log(error);
                    commit('updateLoading', false);
                });
            } catch (ex) {
                console.log(ex);
            }
        },
        showFolderInfo({ commit }, folder) {
            Router.push({ name: "folderInfo", params: { folderId: folder.id, Folder: folder } });
        }
    },
    getters: {
        folder(state) {
            return state.folders;
        },
    }
}