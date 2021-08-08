import React, { useState } from 'react';
import './App.css';
import planeIcon from './assets/airplane.png';
import shipIcon from './assets/ship.png';
import moment from 'moment';

function App() {

  const [quote, setQuote] = useState(null);
  const [initInfo, setInitInfo] = useState({
    startingCountry: '',
    destinationCountry: '',
    quotePrice: '',
    shippingChannel: 'air'
  });

  const handleStartingCountryInput = (e) => {
    if (e.target.value.match(/^[a-zA-ZÀ-ÿ ]+$|^$/i))
      setInitInfo({ ...initInfo, startingCountry: e.target.value });
  }

  const handleDestinationCountryInput = (e) => {
    if (e.target.value.match(/^[a-zA-ZÀ-ÿ ]+$|^$/i))
      setInitInfo({ ...initInfo, destinationCountry: e.target.value });
  }

  const handleQuotePriceInput = (e) => {
    if (e.target.value.match(/^[0-9]+$|^$/))
      setInitInfo({ ...initInfo, quotePrice: e.target.value });
  }

  const handleShippingChannelSelect = (e) => {
    setInitInfo({ ...initInfo, shippingChannel: e.target.value });
  }

  function randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1))
  }

  const renderQuote = () => {
    const icon = initInfo.shippingChannel === 'ocean' ? shipIcon : planeIcon;
    const text = initInfo.shippingChannel === 'ocean' ? 'Traditional ocean freight' : 'Traditional air freight';
    const initDay = initInfo.shippingChannel === 'ocean' ? randomInteger(25, 30) : randomInteger(3, 7);
    const finalDay = initDay + (initInfo.shippingChannel === 'ocean' ? randomInteger(5, 10) : randomInteger(2, 4));
    const initDate = moment().add(initDay, 'days');
    const finalDate = moment().add(finalDay, 'days');
    setQuote(
      <div className="App-quote-box">
        <table>
          <thead>
            <tr>
              <th>
                <div className="Table-channel">
                  <img src={icon} width={50} height={50} alt={initInfo.shippingChannel} />
                  <span>{text}</span>
                </div>
              </th>
              <th className="Table-countries-cell">
                <div className="Table-countries">
                  <span>{initInfo.startingCountry + ' -> ' + initInfo.destinationCountry}</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="Table-number-days">{initDay} - {finalDay} days</p>
                <p className="Table-estimated">Estimated delivery</p>
                <p className="Table-dates">{initDate.format("MMM Do")} - {finalDate.format("MMM Do")}</p>
              </td>
              <td>
                <div className="Table-price">
                  <span>US$ {initInfo.quotePrice}</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="App">
      {console.log(initInfo)}
      <header className="App-header">
        <span className="App-title">Generate Quote</span>
      </header>
      <div className="App-container">
        <div className="App-form">
          <div className="App-input-group">
            <label>Starting country</label>
            <input type="text" placeholder="Country name" pattern="[a-zA-ZÀ-ÿ ]+" value={initInfo.startingCountry} onChange={handleStartingCountryInput} />
          </div>
          <div className="App-input-group">
            <label>Destination country</label>
            <input type="text" placeholder="Country name" pattern="[a-zA-ZÀ-ÿ ]+" value={initInfo.destinationCountry} onChange={handleDestinationCountryInput} />
          </div>
          <div className="App-input-group">
            <label>Quote price</label>
            <input type="number" placeholder="Price" pattern="^0\d{9}$" value={initInfo.quotePrice} onChange={handleQuotePriceInput} />
          </div>
          <div className="App-input-group">
            <label>Shipping channel</label>
            <select onChange={handleShippingChannelSelect}>
              <option value="air">Air</option>
              <option value="ocean">Ocean</option>
            </select>
          </div>
          <div className="App-input-group">
            <button className="App-button" onClick={renderQuote} disabled={initInfo.startingCountry.match(/^$/) || initInfo.destinationCountry.match(/^$/) || initInfo.quotePrice.match(/^$/)} >Create quote</button>
          </div>
        </div>
        {quote}
      </div>
    </div>
  );
}

export default App;
