import React from 'react'
import s from '../styles/main.scss'
import Router from 'react-router'

export default React.createClass({
  componentWillMount() {
    document.addEventListener('DOMContentLoaded', () => FastClick.attach(document.body))
  },

  render() {
    return (
      <div>
       <h1>
         I go into solitude so as not to drink out of everybody's cistern. When I am among the many I live as the many do, and I do not think I really think. After a time it always seems as if they want to banish my self from myself and rob me of my soul.
       </h1>
       {/*<Router.RouteHandler/>*/}
      </div>
    )
  }
})

