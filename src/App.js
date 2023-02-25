
import './app.scss';
import Header from './components/Header'
import FirstMain from './components/FirstMain'
import React, { Component } from "react"

class App extends Component {
  render() {

    return (
      <>
        <header>
          <Header />
        </header>

        <FirstMain />


      </>
    );
  }
}

export default App;
