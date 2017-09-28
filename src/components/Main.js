import React from 'react'
import Form from './Form'
import UserList from './UserList'

const UsersApp = () =>
  <div>
    <p>Names are used as ids, so they should be unique.</p>
    <Form/>
    <UserList/>
  </div>

export default UsersApp
