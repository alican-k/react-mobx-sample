import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Provider } from 'mobx-react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from './store/store'
import Main from './components/Main'
import Edit from './components/Edit'

const App = () =>
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>

    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/:name' component={Edit}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  </div>

export default App;
