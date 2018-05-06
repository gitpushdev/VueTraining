import * as network from "../network";

export function createFolder(token, folder) {
    return new Promise((resolve, reject) => {
        network.postData(token, 'folders', folder, result => {
            resolve(result);
        }, error => {
            reject(error);
        })
    })
}

export function fetchFolders(token) {
    return new Promise((resolve, reject) => {
        network.fetchData(token, 'folders', result => {
            resolve(result);
        }, error => {
            reject(error);
        });
    })
}

export function deleteFolder(token, folderId) {
    return new Promise((resolve, reject) => {
        network.deleteData(token, 'folders/' + folderId, {}, result => {
            resolve(result);
        }, error => {
            reject(error);
        })
    })
}