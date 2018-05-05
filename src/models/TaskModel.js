export function createTask(id, content, isCompleted, creationDate, folderRef) {
    return {
        id: id, content: content, isCompleted: isCompleted,
        creationDate: creationDate || moment().format("MMM DD, YYYY"),
        folderRef: folderRef
    }
}

export function emptyTask() {
    return {
        id: '', content: '', isCompleted: false, creationDate: moment().format("MMM DD, YYYY"), folderRef: ''
    }
}