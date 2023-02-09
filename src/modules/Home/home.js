import React from 'react';
import logo from '~/assets/svg/logo.svg';
import products from '../Products/products'; //temmp link

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

        <a href={`/products/${products._id}`}>🥸</a>    

      </div>
    </>
  );
}

export default Home;
