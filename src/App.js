import React from 'react';
import logo from './logo.svg';
import './App.css';
import nodejs from 'nodejs-mobile-react-native';

componentWillMount()
  {
    nodejs.start('App.js');
    nodejs.channel.addListener(
      'message',
      (msg) => {
        alert('From node: ' + msg);
      },
      this 
    );
  }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>OP.GG web scraper</h1>
        <form>
          <label>
            Search:  {' '} 
            <input type="text" name="name"/>
          </label>
          <br></br>
          <input type="submit" value="Submit"/>
        </form>
      </header>
    </div>
  );
}

export default App;
