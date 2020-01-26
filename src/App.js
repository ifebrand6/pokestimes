import React, {Component} from 'react';
import Navbar from './components/navbar'
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';




class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </div>
      </BrowserRouter>
    );
  
  }
}

export default App;


