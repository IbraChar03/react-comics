
import './app.scss';
import Header from './components/Header'
import FirstMain from './components/FirstMain'
import SecondMain from './components/SecondMain'
import FirstFooter from './components/FirstFooter'
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

        <footer>
          <FirstFooter />
        </footer>

      </>
    );
  }
}

export default App;
