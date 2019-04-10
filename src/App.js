import React from 'react'

import { Container, Nav, NavItem, NavLink } from 'reactstrap'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import store from './store'

import Home from './home'
import DetailBuildings from './buildings/container/detail'

const AppRouter = () => {
  console.log('wkwkw', process.env)
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Nav style={{ backgroundColor: 'black'}}>
            <NavItem>
              <NavLink>
                <Link to="/">Home</Link>
              </NavLink>
            </NavItem>
          </Nav>
         <Container fluid>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/home/serach" exact component={Home} />
            <Route path="/buildings/:id" exact component={DetailBuildings} />
          </Container>
        </div>
      </Router>
    </Provider>
  )
}

export default AppRouter;
