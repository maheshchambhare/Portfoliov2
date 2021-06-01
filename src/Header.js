import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Home from './pages/Home';
import "./header.css"

export default function Header() {

        // function Home() {
        // return <h2>Home</h2>;
        // }

        function About() {
        return (
        <div id="about">
        <h2>About</h2>
        </div>
        )
        }

        function Users() {
        return <h2>Users</h2>;
        }




    return (
        <div className="header">

     <Router>
      <div>
        <nav>
          <ul className="navitems">
            <li
            className="navitem"
            >
              <NavLink 
              activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                }}
                style={{ textDecoration: 'none'}}
               to="home" exact>Home</NavLink>
            </li>
            <li
            className="navitem">
              <NavLink 
                style={{ textDecoration: 'none' }}
                    activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}
              to="about">About</NavLink>
            </li>
            <li
            className="navitem">
              <NavLink 
                style={{ textDecoration: 'none' }}
                    activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}
              to="/users">Projects</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

            
        </div>
    )
}
