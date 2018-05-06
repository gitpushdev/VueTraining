/**
 * Map user mongo model to user DTO
 * @param {object} user User Mongo model
 */
exports.mapUser = function (user, token) {
    return {
        firstName: user.firstName, lastName: user.lastName,
        email: user.email, registrationDate: user.registrationDate,
        authToken: token
    }
}