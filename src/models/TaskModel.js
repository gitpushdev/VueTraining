export function createTask(id, content, isCompleted) {
    return {
        id: id, content: content, isCompleted: isCompleted
    }
}

export function emptyTask() {
    return {
        id: '', content: '', isCompleted: false
    }
}