import React, { Component } from 'react';
import content from '../../contentGenerator';
import Photo from './Photo'
import Calendar from './Calendar'
import Word from './Word'
import Logo from './Logo';
import Input from './Input';
// import Row from './Row';
// import GameList from './GameList';
// import Leaders from './Leaders';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
   
 }

  handleChange() {

  }

  render() {
    return (
      <div>
        <h1>Welcome to the Moira Rose Word-a-Day Calendar!</h1>
        <Logo />
        <Calendar />
        <Photo />
        <Word />
        <Input />
      </div>
  )
}
}

export default App;
