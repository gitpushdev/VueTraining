import * as network from "../network";

export function fetchTasks(authToken) {
    return new Promise((resolve, reject) => {
        network.fetchData('todos', result => {
            resolve(result);
        }, error => {
            reject(error);
        });
    })
}