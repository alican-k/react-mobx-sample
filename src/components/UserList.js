import React from 'react'
import '../App.css'
import { compose, mapProps } from 'recompose'
import { inject, observer } from 'mobx-react'
import User from './User'

const Comp = ({ users }) =>
  <ul className='no-bullet'>
    {users.map((user,i) => <User {...user} key={i}/>)}
  </ul>

export default compose(
  inject('store'),
  mapProps(({store}) => ({users: store.users })),
  observer
)(Comp)
