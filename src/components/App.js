import React, { Component } from 'react';
import { render } from 'react-dom';


import '../style/App.css';

import Table from './Table';
import Value from './Value';
import Score from './Score';
import Buttons from './Buttons';
import PlaceForCards from './PlaceForCards';
import Card from './Card';
import WinLoseDraw from './WinLoseDraw';

const card = [{ card: '1karo', value: 1 }, { card: '2karo', value: 2 }, { card: '3karo', value: 3 },
{ card: '4karo', value: 4 }, { card: '5karo', value: 5 }, { card: '6karo', value: 6 }, { card: '7karo', value: 7 },
{ card: '8karo', value: 8 }, { card: '9karo', value: 9 }, { card: 'Jkaro', value: 10 }, { card: 'Qkaro', value: 10 },
{ card: 'Kkaro', value: 10 }, { card: 'Akaro', value: 10 },

{ card: '1trefl', value: 1 }, { card: '2trefl', value: 2 }, { card: '3trefl', value: 3 }, { card: '4trefl', value: 4 },
{ card: '5trefl', value: 5 }, { card: '6trefl', value: 6 }, { card: '7trefl', value: 7 }, { card: '8trefl', value: 8 },
{ card: '9trefl', value: 9 }, { card: 'Jtrefl', value: 10 }, { card: 'Qtrefl', value: 10 }, { card: 'Ktrefl', value: 10 },
{ card: 'Atrefl', value: 10 },

{ card: '1kier', value: 1 }, { card: '2kier', value: 2 }, { card: '3kier', value: 3 }, { card: '4kier', value: 4 },
{ card: '5kier', value: 5 }, { card: '6kier', value: 6 }, { card: '7kier', value: 7 }, { card: '8kier', value: 8 },
{ card: '9kier', value: 9 }, { card: 'Jkier', value: 10 }, { card: 'Qkier', value: 10 }, { card: 'Kkier', value: 10 },
{ card: 'Akier', value: 10 },

{ card: '1pik', value: 1 }, { card: '2pik', value: 2 }, { card: '3pik', value: 3 }, { card: '4pik', value: 4 },
{ card: '5pik', value: 5 }, { card: '6pik', value: 6 }, { card: '7pik', value: 7 }, { card: '8pik', value: 8 },
{ card: '9pik', value: 9 }, { card: 'Jpik', value: 10 }, { card: 'Qpik', value: 10 }, { card: 'Kpik', value: 10 },
{ card: 'Apik', value: 10 }]


class App extends Component {

  state = {
    cards: [],
    firstThirdCards: [],
    playerCards: [],
    dealerCards: [],
    counter: 0,
    pointDealer: 0,
    pointPlayer: 0,
    addValue: true,
    endGame: false,
    money: 1000,
    value: 0,
    active: false,
    winLoseDraw: '',
  };

  shufflingCards = () => {
    const newCardList = card.map(card => card);
    const cards = [];
    for (let i = 0; i < newCardList.length; i++) {
      const number = Math.floor(Math.random() * newCardList.length)
      cards.push(newCardList[number])
      newCardList.slice({ number }, 1)

    }

    this.setState({
      cards: cards,
    })

    setTimeout(this.giveFirstThirdCard, 500)

  }
  giveFirstThirdCard = () => {

    const cards = this.state.cards
    const firstThirdCards = []
    for (let i = 0; i < 3; i++) {
      firstThirdCards.push(cards[i])
    }
    const pointsDealer = firstThirdCards[1].value;
    const pointsPlayer = firstThirdCards[0].value + firstThirdCards[2].value;

    this.setState({
      firstThirdCards: firstThirdCards,
      counter: 3,
      pointDealer: pointsDealer,
      pointPlayer: pointsPlayer,

    })
  }
  onlyOneCardPlayerAndPoints = (prevState) => {

    const cards = this.state.cards;
    const counter = this.state.counter;
    const playerCards = this.state.playerCards;
    playerCards.push(cards[counter]);
    const value = cards[counter].value;
    const valueSum = value + this.state.pointPlayer;

    this.setState({
      playerCards: [...playerCards],
      counter: counter + 1,
      pointPlayer: valueSum,
    })
  }
  onlyOneCardDealerAndPoints = () => {

    const cards = this.state.cards;
    let counter = this.state.counter;
    const dealerCards = this.state.dealerCards;
    let valueSum = this.state.pointDealer;
    while (valueSum <= 15) {
      dealerCards.push(cards[counter]);
      let value = cards[counter].value;
      valueSum += value
      counter += 1;
    }


    this.setState({
      dealerCards: [...dealerCards],
      counter: counter + 1,
      pointDealer: valueSum,
    })
  }
  pass = () => {
    if (this.state.pointPlayer > 21) {
      this.setState({
        money: this.state.money - this.state.value,
        winLoseDraw: 'lose',
      })
      setTimeout(this.reset, 2000)

      return
    }
    if (this.state.pointPlayer < 22) {
      this.onlyOneCardDealerAndPoints()
    }
    this.setState({
      endGame: true,
    })
    setTimeout(this.winLoseDraw, 2000)


  }
  winLoseDraw = () => {
    if (this.state.endGame) {
      if (this.state.pointDealer > 21) {
        this.setState({
          money: this.state.money + this.state.value,
          winLoseDraw: 'win',
        })
        setTimeout(this.reset, 2000)

        return
      }
      if (this.state.pointDealer > this.state.pointPlayer) {
        this.setState({
          money: this.state.money - this.state.value,
          winLoseDraw: 'lose',
        })
        setTimeout(this.reset, 2000)

        return
      }
      if (this.state.pointDealer < this.state.pointPlayer) {
        this.setState({
          money: this.state.money + this.state.value,
          winLoseDraw: 'win',
        })
        setTimeout(this.reset, 2000)

        return
      }
      if (this.state.pointDealer === this.state.pointPlayer) {
        this.setState({
          money: this.state.money,
          winLoseDraw: 'draw',
        })
        setTimeout(this.reset, 2000)


        return
      }
    }

  }
  choiceValue = (money) => {
    this.setState({
      value: money,
      active: true,
    })
    this.shufflingCards()
    console.log(this.state.winLoseDraw);
  }
  reset = () => {

    this.setState({
      cards: [],
      firstThirdCards: [],
      playerCards: [],
      dealerCards: [],
      counter: 0,
      pointDealer: 0,
      pointPlayer: 0,
      addValue: true,
      endGame: false,
      value: 0,
      active: false,
      winLoseDraw: '',
    })


  }




  render() {
    return (
      <div className='app'>
        <Table />
        <PlaceForCards
          firstCards={this.state.firstThirdCards}
          playerCards={this.state.playerCards}
          dealerCards={this.state.dealerCards}
        />
        <Value
          choiceValue={this.choiceValue}
          active={this.state.active}
        />
        <Score
          pointsPlayer={this.state.pointPlayer}
          pointsDealer={this.state.pointDealer}
          money={this.state.money}
          value={this.state.value}
        />
        <Buttons
          active={this.state.active}
          giveFirstThirdCard={this.onlyOneCardPlayerAndPoints}
          onlyOneCardPlayer={this.pass}
        />
        <WinLoseDraw
          winLoseDraw={this.state.winLoseDraw}
        />
      </div>
    )
  }


}

export default App;
