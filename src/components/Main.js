import React from 'react';
import {Switch, Route } from 'react-router-dom';
import About from './About';
// import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import Projects from './Projects';
import Home from './Home';


const Main = () => (
    <Switch>
       
         <Route path="/About" component={About} />
         {/* <Route path="/Portfolio" component={Portfolio} /> */}
         <Route path="/Contact" component={Contact} />
         <Route path="/Resume" component={Resume} />
         <Route path="/Projects" component={Projects} />
         <Route path="/Home" component={Home} />
    </Switch>
)

export default Main;