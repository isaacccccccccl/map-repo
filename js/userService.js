'use strict'

const STORAGE_KEY = 'userDB'
const gUser = {
    txtColor: '',
    bgColor: '',
    BirthDate: '',
    BirthTime: ''
}

function getUser() {
    return gUser
}

function _saveUserSettingsToStorage() {
    saveToStorage(STORAGE_KEY, gUser)
}



// function _saveBooks() {
//     var books = loadFromStorage(STORAGE_KEY)

//     if (!books || !books.length) {
//         books = [
//             { id: makeId(), title: 'The Adventure of Lori Lpsi', price: 120, rating: getRandomInt(0, 6) },
//             { id: makeId(), title: 'World Atlas', price: 300, rating: getRandomInt(0, 6) },
//             { id: makeId(), title: 'Zorba the Greek', price: 87, rating: getRandomInt(0, 6) },
//             { id: makeId(), title: 'Harry poter 1', price: 200, rating: getRandomInt(0, 6) },
//             { id: makeId(), title: 'harry poter 2', price: 500, rating: getRandomInt(0, 6) },
//             { id: makeId(), title: 'harry poter 3', price: 55, rating: getRandomInt(0, 6) }
//         ]
//         saveToStorage(STORAGE_KEY, books)
//     }
//     return books
// }