import React, { Component } from 'react';
import Coin from './Coin';
import { choice } from './helpers';
import './CoinFlip.css';

class CoinFlip extends Component {
  static defaultProps = {
    coins: [
      { side: 'heads', imgSrc: `https://i.ebayimg.com/images/g/YHsAAOSw8HBZNo7e/s-l640.jpg` },
      { side: 'tails', imgSrc: `https://s3.amazonaws.com/ngccoin-production/world-coin-price-guide/1457610-4696925-218rb.jpg` },
    ]
  };

  constructor(props) {
    super(props);
    this.state = {
      currentCoin: null,
      totalFlips: 0,
      totalHeads: 0,
      totalTails: 0,
    }
    this.handleClick = this.handleClick.bind(this);
    this.pluralTime = this.pluralTime.bind(this);
  }

  flipTheCoin() {
    const newCoin = choice(this.props.coins);
    this.setState(st => {
      return {
        currentCoin: newCoin,
        totalFlips: st.totalFlips + 1,
        totalHeads: st.totalHeads + (newCoin.side === 'heads' ? 1 : 0),
        totalTails: st.totalTails + (newCoin.side === 'tails' ? 1 : 0),
      }
    });
  }

  handleClick() {
    this.flipTheCoin();
  }

  pluralTime(num) {
    return num === 1 ? 'time' : 'times';
  }

  render() {
    return (
      <div className='CoinFlip'>
        <h1>Flip a coin!</h1>
        {this.state.currentCoin && <Coin coinInfo={this.state.currentCoin} />}
        <div>
          <button onClick={this.handleClick}>Flip the Coin!</button>
        </div>
        <h3>The coin has been flipped {this.state.totalFlips} {this.pluralTime(this.state.totalFlips)}.
          It has landed on heads {this.state.totalHeads} {this.pluralTime(this.state.totalHeads)}.
          It has landed on tails {this.state.totalTails} {this.pluralTime(this.state.totalTails)}.
        </h3>
      </div>
    )
  }
}

export default CoinFlip;
