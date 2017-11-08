import React from 'react'
import { HashRouter, Route, Link, Redirect } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
const newHistory = createBrowserHistory();


import Todo from '../todo/todo'
import About from '../about/about'


export default props => (
    <HashRouter history={newHistory}>
        <div>
            <Route  path='/todos' component={Todo} />
            <Route  path='/about' component={About} />
            <Redirect path = '*' to='/todos' />
        </div>
    </HashRouter>
)