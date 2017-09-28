import React from 'react'
import '../App.css'
import { observer, inject } from 'mobx-react'
import { compose, withProps } from 'recompose'
import { Link } from 'react-router-dom'

const Comp = ({name, age, gender, removeUser}) =>
  <li>
    <span className='user-props'>{name}</span>
    <span className='user-props'>{age}</span>
    <span className='user-props'>{gender}</span>
    <button className='user-props' onClick={removeUser}>Remove</button>
    <Link to={name}>Edit</Link>
  </li>

export default compose(
  inject('store'),
  withProps(({store, name}) => ({
    removeUser: () => store.removeUser(name),
  })),
  observer
)(Comp)
