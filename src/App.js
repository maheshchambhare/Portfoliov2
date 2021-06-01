
// import { Router } from 'react-router-dom';
import './App.css';
import NavMenu from './components/NavMenu';

import {
  BrowserRouter as Router,
   Route, Switch 
} from "react-router-dom";

import About from './pages/About'
import Contacts from './pages/Contacts'
import Home from './pages/Home'
import Projects from './pages/Projects'
import HariomElectricals from './pages/HariomElectricals';

function App() {
  return (
    <div className="App">
    <Router>
       <NavMenu />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects/HariomElectricals">
            <HariomElectricals />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contacts />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
     </Router>
  
    </div>
  );
}

export default App;
