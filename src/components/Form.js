import React from 'react'
import '../App.js'
import { inject } from 'mobx-react'
import { compose, /* withState,*/ withHandlers, withStateHandlers } from 'recompose'
import { withRouter } from 'react-router-dom'

const Comp = ({name, age, gender, onNameChange, onAgeChange, onGenderChange, addUser, editUser, type='add'}) => {
  console.log('gender in form: ', gender)
  return (<div>
    { type === 'add'
      ? <input type='text' className='user-props' value={name} placeholder='Name' onChange={onNameChange} />
      : <span className='user-props'>{name}</span>
    }
    <input type='text' className='user-props' value={age} placeholder='Age' onChange={onAgeChange} />
    <select className='user-props' value={gender} onChange={onGenderChange}>
      <option value='Male'>Male</option>
      <option value='Female'>Female</option>
    </select>

    { type === 'add'
      ? <button onClick={addUser}>Add</button>
      : <button onClick={editUser}>Edit</button>
    }

  </div>)
}
//<input type='text' className='user-props' value={gender} placeholder='Gender' onChange={onGenderChange} />
export default compose(
  inject('store'),
  withStateHandlers(
    ({nameDefault = '', ageDefault = '', genderDefault = ''}) => ({
      name: nameDefault,
      age: ageDefault,
      gender: genderDefault ? genderDefault : 'Male'
    }), {
      onNameChange: props => evt => ({name: evt.target.value}),
      onAgeChange: props => evt => ({age: evt.target.value}),
      onGenderChange: props => evt => ({gender: evt.target.value}),
    }
  ),
  withRouter,
  withHandlers({
    addUser: ({store, name, age, gender}) => () => store.addUser({ name, age, gender }),
    editUser: ({store, name, age, gender, history}) => () => {
      store.editUser({ name, age, gender })
      history.push('/')
    }
  }),
)(Comp)
