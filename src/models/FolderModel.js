/**
 * Create an Empty Folder instance
 */
export function emptyFolder() {
    return {
        title: '', id: '', tags: []
    }
}

/**
 * Creates a folder instance
 * @param {string} id Folder Id
 * @param {string} title Folder Title
 * @param {array} tags Tags array
 */
export function Folder(id, title, tags, creationDate) {
    return {
        title: title, id: id, tags: tags, creationDate: creationDate
    }
}