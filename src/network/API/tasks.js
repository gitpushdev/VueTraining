import * as network from "../network";

export function fetchTasks(token, folderRef) {
    return new Promise((resolve, reject) => {
        network.fetchData(token, 'folders/' + folderRef + '/todos', result => {
            resolve(result);
        }, error => {
            reject(error);
        });
    })
}

export function fetchTask(token, folderRef, taskId) {
    return new Promise((resolve, reject) => {
        network.fetchData(token, 'folders/' + folderRef + '/todos/' + taskId, result => {
            resolve(result);
        }, error => {
            reject(error);
        });
    })
}

export function postTask(token, task) {
    return new Promise((resolve, reject) => {
        network.postData(token, 'folders/' + task.folderRef + '/todos', task, result => {
            resolve(result);
        }, error => {
            reject(error);
        })
    })
}

export function removeTask(token, task) {
    return new Promise((resolve, reject) => {
        network.deleteData(token, 'folders/' + task.folderRef + '/todos/' + task.id, {}, result => {
            resolve(result);
        }, error => {
            reject(error);
        })
    })
}

export function updateTask(token, task) {
    return new Promise((resolve, reject) => {
        network.putData(token, 'folders/' + task.folderRef + '/todos/' + task.id, task, (result) => {
            resolve(result);
        }, error => {
            reject(error);
        })
    })
}