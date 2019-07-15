import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contacts'
import Product from './components/Products'
import Login from './components/Login'
import Signup from './components/Signup'
import Post from './components/Post'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contacts' component={Contact} />
            <Route path='/products' component={Product} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path="/:post_id" component={Post} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
