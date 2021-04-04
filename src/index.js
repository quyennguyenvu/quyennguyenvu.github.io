import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'
import Router from './routes'

const App = () => {
  return <Router />
}

ReactDOM.render(<App />, document.querySelector('#root'))
