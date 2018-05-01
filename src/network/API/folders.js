import * as network from "../network";

export function createFolder(folder) {
    return new Promise((resolve, reject) => {
        network.postData('folders', folder, result => {
            resolve(result);
        }, error => {
            reject(error);
        })
    })
}

export function fetchFolders(token) {
    return new Promise((resolve, reject) => {
        network.fetchData('folders', result => {
            resolve(result);
        }, error => {
            reject(result);
        });
    })
}

export function deleteFolder(folderId) {
    return new Promise((resolve, reject) => {
        network.deleteData('folders/' + folderId, {}, result => {
            resolve(result);
        }, error => {
            reject(error);
        })
    })
}