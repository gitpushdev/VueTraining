
/**
 * Map Array of tasks document from DB to DTO
 * @param {ToDo} tasks ToDo Array
 */
exports.mapFoldersArray = function (folders) {
    if (folders && Array.isArray(folders)) {
        return folders.map(item => {
            return {
                id: item._id, title: item.title,
                tags: item.tags, creationDate: item.creationDate
            }
        })
    }
    return [];
}