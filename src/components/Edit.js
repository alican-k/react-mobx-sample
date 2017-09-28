import React from 'react'
import { inject } from 'mobx-react'
import { compose, withProps } from 'recompose'
import Form from './Form'

const Comp = ({user}) =>
  <div>
    <Form type='edit' nameDefault={user.name} ageDefault={user.age} genderDefault={user.gender}/>
  </div>

export default compose(
  inject('store'),
  withProps(({store, match}) => ({
    user: store.users.find(user => user.name === match.params.name),
  }))
)(Comp)
