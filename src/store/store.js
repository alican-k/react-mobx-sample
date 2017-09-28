import {observable, action} from 'mobx'

const users = observable([
  {name: 'Rafael', age: 22, gender: 'Male'}
])

const addUser = action(
  ({name, age, gender}) => {
    const ageInt = parseInt(age, 10)
    console.log('about to be added:', name, age, gender)
    if (notEmptyString(name) && positiveNumber(ageInt) && isGender(gender) && !nameExists(name)) {
      users.push({name, age: ageInt, gender})
    } else {
      alert('invalid data!')
    }
  }
)
const removeUser = action(
  name => {
    const i = users.findIndex(user => user.name === name)
    users.splice(i, 1)
  }
)
const editUser = action(
  ({name, age, gender}) => {
    const ageInt = parseInt(age, 10)
    if (notEmptyString(name) && positiveNumber(ageInt) && isGender(gender) && nameExists(name)) {
      const i = users.findIndex(user => user.name === name)
      users[i] = {name, age: ageInt, gender}
    } else {
      alert('invalid data!')
    }
  }
)

const notEmptyString = (s) => typeof s === 'string' && s !== ''
const positiveNumber = (n) => typeof n === 'number' && n > 0
const isGender = (g) => g === 'Male' || g === 'Female'
const nameExists = (name) => users.find(user => user.name === name)

export default {users, addUser, removeUser, editUser}
