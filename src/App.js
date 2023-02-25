
import './app.scss';
import Header from './components/Header'
import FirstMain from './components/FirstMain'
import SecondMain from './components/SecondMain'
import React, { Component } from "react"

class App extends Component {
  render() {

    return (
      <>
        <header>
          <Header />
        </header>
        <main>
          <FirstMain />
          <SecondMain />
        </main>



      </>
    );
  }
}

export default App;
