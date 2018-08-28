import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Homepage from './Homepage'
import Forecast from './Forecast'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <Router>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/forecast' component={Forecast} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
