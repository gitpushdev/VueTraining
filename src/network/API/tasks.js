import * as network from "../network";

export function fetchTasks(authToken, folderRef) {
    return new Promise((resolve, reject) => {
        network.fetchData('folders/' + folderRef + '/todos', result => {
            resolve(result);
        }, error => {
            reject(error);
        });
    })
}

export function postTask(task) {
    return new Promise((resolve, reject) => {
        network.postData('folders/' + task.folderRef + '/todos', task, result => {
            resolve(result);
        }, error => {
            reject(error);
        })
    })
}

export function updateTask(task) {
    return new Promise((resolve, reject) => {
        network.putData('folders/' + task.folderRef + '/todos/' + task.id, task, (result) => {
            resolve(result);
        }, error => {
            reject(error);
        })
    })
}