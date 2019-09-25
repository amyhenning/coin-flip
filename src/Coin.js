import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
  render() {
    return <img className='Coin' alt={this.props.coinInfo.side} src={this.props.coinInfo.imgSrc} />
  }
}

export default Coin;
