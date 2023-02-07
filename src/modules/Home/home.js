import React from 'react';
import logo from '~/assets/svg/logo.svg';

function Home() {
  return (
    <>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Candle In The Wind</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <br></br>
      </div>
    </>
  );
}

export default Home;
