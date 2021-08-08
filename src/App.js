import React, { useState } from 'react';
import './App.css';
import planeIcon from './assets/airplane.png';
import shipIcon from './assets/ship.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className="App-title">
          Generate Quote
        </span>
      </header>
      <div className="App-container">
        <form className="App-form">
          <div className="App-input-group">
            <label>Starting country</label>
            <input type="text" placeholder="Country name" />
          </div>
          <div className="App-input-group">
            <label>Destination country</label>
            <input type="text" placeholder="Country name" />
          </div>
          <div className="App-input-group">
            <label>Quote price</label>
            <input type="number" placeholder="Price" />
          </div>
          <div className="App-input-group">
            <label>Shipping channel</label>
            <select>
              <option value="air">Air</option>
              <option value="ocean">Ocean</option>
            </select>
          </div>
          <div className="App-input-group">
            <button className="App-button">Create quote</button>
          </div>
        </form>
        <div className="App-quote-box">
          <table>
            <thead>
              <tr>
                <th>
                  <div className="Table-channel">
                    <img src={planeIcon} width={50} height={50} />
                    <span>{'Traditional air freight'}</span>
                  </div>
                </th>
                <th className="Table-countries-cell">
                  <div className="Table-countries">
                    <span>{'China -> USA'}</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p className="Table-number-days">4 - 6 days</p>
                  <p className="Table-estimated">Estimated delivery</p>
                  <p className="Table-dates">Sept 20 - Sept 26</p>
                </td>
                <td>
                  <div className="Table-price">
                    <span>US$ 2300</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
