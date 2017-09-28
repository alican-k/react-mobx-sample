A few notes about the app

## My backround

I have started to use react with React Native. They are almost same from the programming point of view.
For now, differences between the two are environment and the usage of react router.

I have used mobx 6 months ago for a project. This experimental project helped me to remember.

Also, today I have met with `mobx-state-tree`. Loved it!

## Presentational & Container Components

I am separating them with the help of recompose and other functional utilities.
Usually, one presentational and one container component exists in each file. Data and functions(actions, handlers etc.)
are populated with HOCs and passed to the presentational component.
And usually the component that is used from outside is the container component.

A sample of this usage:

```diff
const Comp = ({ users }) =>
  <ul className='no-bullet'>
    {users.map((user,i) => <User {...user} key={i}/>)}
  </ul>

export default compose(
  inject('store'),
  mapProps(({store}) => ({users: store.users })),
  observer
)(Comp)
```
