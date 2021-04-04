import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import Home from './pages/home'
import Resume from './pages/resume'

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        {/* Not Found */}
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </HashRouter>
  )
}

export default Router
