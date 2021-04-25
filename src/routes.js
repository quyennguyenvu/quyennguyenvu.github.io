import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import loadable from '@loadable/component'

const Home = loadable(() => import('./pages/home'))
const Resume = loadable(() => import(/* webpackPrefetch: true */ './pages/resume'))

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
