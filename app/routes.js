import {Route, NotFoundRoute, DefaultRoute} from 'react-router'
import App from './components/App'
import React from 'react'
export default (
  <Route ignoreScrollBehavior={true} handler={App}>
    <NotFoundRoute handler={App}/>
    <DefaultRoute handler={App}/>
  </Route>
)
