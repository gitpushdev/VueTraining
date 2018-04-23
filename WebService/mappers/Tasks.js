
/**
 * Map Array of tasks document from DB to DTO
 * @param {ToDo} tasks ToDo Array
 */
exports.mapTaskArray = function(tasks){
    if(tasks && Array.isArray(tasks)){
        return tasks.map(item => {
            return {
                id: item._id, content: item.content,
                folderRef: item.folderRef, creationDate: item.creationDate, isCompleted: item.isCompleted
            }
        })
    }
    return [];
}