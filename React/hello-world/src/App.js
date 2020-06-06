import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/greet'
import Welcome from './components/welcome'
import Hello from './components/hello'
import Message from './components/message'
import Counter from './components/counter'
import FunctionClick from './components/FuntionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'

class App extends Component {
  render() {
    return(
      <div className="App">
        <UserGreeting />
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <ClassClick />
        <FunctionClick /> */}
        {/* <Counter /> */}
        {/* <Greet name="Bruce" heroName='Batman'>
          <p>This is children props</p>
        </Greet>
        <Greet name="Clark" heroName='Superman'>
          <button>Go!</button>
        </Greet> */}
        {/* <Greet name="Tony" heroName='Iron Man'/> */}
        {/* <Welcome name="Bruce" heroName='Batman'>
          <p>This is children props</p>
        </Welcome> */}
        {/* <Welcome name="Clark" heroName='Superman'>
          <button>Go!</button>
        </Welcome> */}
        {/* <Welcome name="Tony" heroName='Iron Man' /> */}
        {/* <Hello/>
        <Message /> */}
      </div>
    );
  }
}

export default App;
