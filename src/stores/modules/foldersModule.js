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
        addFolderRange(state, folders) {
            state.folders.splice(0, state.folders.length)
            if (folders && Array.isArray(folders)) {
                folders.forEach((item) => {
                    state.folders.push(item)
                })
            }
        },
        updateFolderLoading(state, val) {
            state.loading = val;
        },
    },
    actions: {
        async createFolder({ commit }, folder) {
            commit('updateFolderLoading', true);
            //commit('addTask', task);
            folderService.createFolder(folder).then(result => {
                var folder = Folder(result._id, result.title, result.tags, result.creationDate);
                commit('addFolder', folder)
                commit('updateFolderLoading', false);
            }).catch(error => {
                commit('updateFolderLoading', false);
                console.log(error)
            });
        },
        async deleteFolder({ commit }, folder) {
            commit('updateFolderLoading', true);
            await folderService.deleteFolder(folder.id).then(() => {
                commit('updateFolderLoading', false);
                commit('removeFolder', folder);
            }).catch(error => {
                commit('updateFolderLoading', false);
            });
        },
        async fetchFolders({ commit }) {
            try {
                commit('updateFolderLoading', false);
                var folders = await folderService.fetchFolders('TOKEN').then(folders => {
                    var result = [];
                    if (folders && Array.isArray(folders)) {
                        result = folders.map(item => {
                            return Folder(item.id, item.title,
                                item.tags, item.creationDate)
                        })
                    }
                    commit('addFolderRange', result);
                    commit('updateFolderLoading', false);
                }).catch(error => {
                    console.log(error);
                    commit('updateFolderLoading', false);
                });
            } catch (ex) {
                console.log(ex);
            }
        },
        showFolderInfo({ commit }, folder) {
            Router.push({ name: "folderInfo", params: { folderId: folder.id, Folder: folder } });
        },
        showFolders({ commit }) {
            Router.push({ name: "root" });
        }
    },
    getters: {
        folder(state) {
            return state.folders;
        },
    }
}