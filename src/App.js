import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Header, Home, About, Projects, Footer, Contact} from './components/main';
import './assets/styles/main.scss';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact strict path='/' component={Home}/>
            <Route exact strict path='/about' component={About}/>
            <Route exact strict path='/projects' component={Projects}/>
            <Route exact strict path='/contact' component={Contact}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App
