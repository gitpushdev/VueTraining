export function createTask(id, content, isCompleted) {
    return {
        id: id, content: content, isCompleted: isCompleted, creationDate: moment().format("MMM DD, YYYY")
    }
}

export function emptyTask() {
    return {
        id: '', content: '', isCompleted: false, creationDate: moment().format("MMM DD, YYYY")
    }
}