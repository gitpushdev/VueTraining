import * as network from "../network";

export function loginUser(username, password) {
    return new Promise((resolve, reject) => {
        network.postData('', 'auth', { email: username, password: password }, result => {
            resolve(result);
        }, error => {
            reject(error);
        });
    });
}