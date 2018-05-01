const baseURL = "http://localhost:3000/";

/**
 * Check if response falls between 200 and 299
 * @param {Result} result Server response
 */
function isSuccess(result) {
    if (result.ok && result.status >= 200 & result.status <= 299) {
        return result;
    } else {
        throw Error(result.status + " " + result.statusText);
    }
}

/**
 * Fetch data from server
 * @param {string} url Destination URL
 * @param {function} onSuccess Success callback
 * @param {function} onFailure Failure callback
 */
exports.fetchData = (url, onSuccess, onFailure) => {
    fetch(baseURL + url, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(isSuccess)
        .then(result => {
            return result.json();
        })
        .then(json => {
            onSuccess(json);
        })
        .catch(error => {
            onFailure(error);
        });
}

/**
 * Post data to server
 * @param {string} url Destination URL
 * @param {object} body Data to send to server
 * @param {function} onSuccess Success callback
 * @param {function} onFailure Failure callback
 */
exports.postData = (url, body, onSuccess, onFailure) => {
    fetch(baseURL + url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(isSuccess)
        .then(result => {
            return result.json();
        })
        .then(json => {
            onSuccess(json);
        })
        .catch(error => {
            onFailure(error);
        });
}

/**
 * Update data from server
 * @param {string} url Destination URL
 * @param {function} onSuccess Success callback
 * @param {function} onFailure Failure callback
 */
exports.putData = (url, body, onSuccess, onFailure) => {
    fetch(baseURL + url, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(isSuccess)
        .then(result => {
            return result.json();
        })
        .then(json => {
            onSuccess(json);
        })
        .catch(error => {
            onFailure(error);
        });
}

/**
 * Delete data from server
 * @param {string} url Destination URL
 * @param {function} onSuccess Success callback
 * @param {function} onFailure Failure callback
 */
exports.deleteData = (url, body, onSuccess, onFailure) => {
    fetch(baseURL + url, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        body: body ? JSON.stringify(body) : {}
    })
        .then(isSuccess)
        .then(result => {
            return result.json();
        })
        .then(json => {
            onSuccess(json);
        })
        .catch(error => {
            onFailure(error);
        });
}