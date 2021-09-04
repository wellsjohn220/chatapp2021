const users = []

const addUser = ({ id, username, room }) => {
    //clear the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()
    //validate the data
    if (!username || !room) {
        return {
            error: 'Username and room are required!'
        }
    }
    //check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })
    //validate yserbane
    if (existingUser) {
        return {
            error: 'Username is in use!'
        }
    }
    //store user
    const user = { id, username, room }
    users.push(user)
    return { user }
}
const removeUser = (id) => {
    // const index = users.findIndex((user) => {
    //     return user.id === id   
    //})
    const index = users.findIndex((user) => user.id === id)
    if (index !==-1) {
        return users.splice(index, 1)[0] 
    }
}
const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
} //C44

module.exports = {
    addUser, removeUser, getUser, getUsersInRoom
}
// addUser({    id: 21, username: 'John', room: 'Wells'})
// addUser({    id: 22, username: 'Mark', room: 'Wells'})
// addUser({    id: 23, username: 'Johnson', room: 'Warwick'})
// console.log('Before move ')
// console.log(users)
// const res = addUser({
//     id: 33, username: 'John', room: 'Warwick'
// })
// console.log(res)
// const aUser = getUser(21) 
// console.log('Added name: ' +  aUser.username)
// const removedUser = removeUser(22)
// console.log('After move ')
// console.log(users)
// console.log('User in Warwick room: ')
// console.log(getUsersInRoom('Warwick'))