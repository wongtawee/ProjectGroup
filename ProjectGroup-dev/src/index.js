import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Courses from './views/courses'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Home} path="/" />
        <Route exact component={Courses} path="/courses" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
