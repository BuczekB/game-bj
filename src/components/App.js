import React, { useState, useReducer, useEffect, } from 'react';
import axios from 'axios';




import '../style/App.css';

import Table from './Table';
import Value from './Value';
import Score from './Score';
import Buttons from './Buttons';
import PlaceForCards from './PlaceForCards';
import Card from './Card';
import WinLoseDraw from './WinLoseDraw';
import History from './History';
import DataFetching from './DataFetching';
import { render } from '@testing-library/react';

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


const App = () => {




  const [cards, setCards] = useState([]);
  const [firstThirdCards, setFirstThirdCards] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);
  const [counter, setCounter] = useState(0);
  const [pointDealer, setPointDealer] = useState(0);
  const [pointPlayer, setPointPlayer] = useState(0);
  const [addValue, setAddValue] = useState(true);
  const [endGame, setEndGame] = useState(false);
  const [money, setMoney] = useState(1000);
  const [value, setValue] = useState(0);
  const [active, setActive] = useState(false);
  const [winLoseDraw, setWinLoseDraw] = useState('');
  const [flag, setFlag] = useState(false);
  const [historyResult, setHistoryResult] = useState([]);
  const [show, setShow] = useState(0);
  const [showHistroyButton, setShowHistroyButton] = useState(1);
  const [historyOn, setHistoryOn] = useState('none');
  const [cardTest, setCardTest] = useState([]);
  const [id, setId] = useState('')
  const [dataCards, setDataCards] = useState([])
  const [test, setTest] = useState(false)
  const [testt, setTestt] = useState(false)
  const [wld, setWLD] = useState(false)
  const [work, setWork] = useState(false)


  useEffect(() => {
    axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6`)
      .then(res => {
        setId(res.data.deck_id)
        setTestt(true)
      })



  }, [])


  useEffect(() => {

    axios.get(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=324`)

      .then(res => {
        const data = res.data.cards


        const cardDeck = data.map(item => {

          let value = item.value


          switch (value) {
            case 'JACK':
              value = 10
              break;
            case 'QUEEN':
              value = 10
              break;
            case 'KING':
              value = 10
              break;
            case 'ACE':
              value = 10
              break;
            default:
              value = value * 1

          }






          return (
            {
              code: item.code,
              image: item.image,
              value: value,

            }
          )
        })


        dataCards.push(cardDeck)



      })
      .catch(err => {
        console.log('error');
      })
  }, [testt])









  const shufflingCards = () => {
    {
      const newCardList = dataCards.map(card => card);



      const cards = [];
      for (let i = 0; i < newCardList.length; i++) {
        const number = Math.floor(Math.random() * newCardList.length)
        cards.push(newCardList[number])
        newCardList.slice({ number }, 1)

      }

      setCards(card)

    }



    giveFirstThirdCard()
    /*setTimeout(giveFirstThirdCard, 500) */

  }
  const giveFirstThirdCard = () => {


    console.log(dataCards[0]);
    const cardss = dataCards[0]



    const firstThirdCards = []
    for (let i = counter; i < counter + 3; i++) {
      firstThirdCards.push(cardss[i])

    }


    const pointsDealer = firstThirdCards[1].value;
    const pointsPlayer = firstThirdCards[0].value + firstThirdCards[2].value;


    setFirstThirdCards(firstThirdCards)
    setCounter(counter + 3)
    setPointDealer(pointsDealer)
    setPointPlayer(pointsPlayer)


  }

  
  
  const onlyOneCardPlayerAndPoints =  (prevState) => {
    
    
    const cardss = dataCards[0];
    const counterr = counter;
    const playerCardss = playerCards;
    playerCardss.push(cardss[counterr]);
    const value = cardss[counterr].value;
    const valueSum = value + pointPlayer;

    console.log(valueSum);
    if (valueSum > 21){
      setPointPlayer(valueSum)
      
      const test = true

      results(valueSum, test)
      pass1(valueSum)
      
    
      return  
      
    }
    
    
    setPlayerCards([...playerCardss])
    setCounter(counterr + 1)
    setPointPlayer(valueSum)

  }

  const pass1 = (valueSum) =>{
    
    setWinLoseDraw('lose')
      setMoney(money - value)
      
      setFlag(true)
      
      


     
      
      

      
      setTimeout(() => {
        reset(valueSum)
        
        
        
      }, 3000);
    
    


  }

  

  const testing = ( ) =>{
    console.log('works');
    console.log(pointPlayer,'works Points');
    
  }


  const onlyOneCardDealerAndPoints = () => {

    const cards = dataCards[0];
    let counterr = counter;
    const dealerCardss = dealerCards;
    let valueSum = pointDealer;
    while (valueSum <= 16) {
      dealerCardss.push(cards[counterr]);
      let value = cards[counterr].value;
      valueSum += value
      counterr += 1;
    }



    setTimeout(winLoseDrawF, 2000)

    

    setDealerCards([...dealerCardss])
    setCounter(counterr + 1)
    setPointDealer(valueSum)

  }
  const pass = () => {
    
    

    if (pointPlayer  > 21) {

      setMoney(money - value)
      setWinLoseDraw('lose')
      setFlag(true)
      



      

      setTimeout((pointPlayer) => {
        reset(pointPlayer)
      }, 3000);

      return
    }
    if (pointPlayer  < 22) {


      setEndGame(true)

      setFlag(true)

      setTest(true)

      

    }


  }

  useEffect(() => {

    if (endGame) {
      const cards = dataCards[0];
      let counterr = counter;
      const dealerCardss = dealerCards;
      let valueSum = pointDealer;
      while (valueSum <= 16) {
        dealerCardss.push(cards[counterr]);
        let value = cards[counterr].value;
        valueSum += value
        counterr += 1;
      }



      /*setTimeout(winLoseDrawF, 2000)*/


      setWLD(true)

      setDealerCards([...dealerCardss])
      setCounter(counterr + 1)
      setPointDealer(valueSum)

    }


  }, [test])

  useEffect(() => {
    winLoseDrawF()
  }, [wld])






  const winLoseDrawF = () => {

    setWLD(false)
    

    if (endGame) {
      console.log(pointDealer, 'pointDealer');
      if (pointDealer > 21) {

      console.log('wariant 1');
        setMoney(money + (value / 2))
        setWinLoseDraw('win')
        setFlag(true)

        
        
        results(pointPlayer)
        setTimeout((pointPlayer) => {
          reset(pointPlayer)
        }, 3000);

        return
      }

      if (pointDealer > pointPlayer) {

        console.log('wariant 2');

        setMoney(money - (value / 2))
        setWinLoseDraw('lose')
        setFlag(true)

        results(pointPlayer)

        setTimeout((pointPlayer) => {
          reset(pointPlayer)
        }, 3000);

        return
      }
      if (pointDealer < pointPlayer) {


        console.log('wariant 3');
        setMoney(money + (value / 2))
        setWinLoseDraw('win')
       
        setFlag(true)

        results(pointPlayer)

        setTimeout((pointPlayer) => {
          reset(pointPlayer)
        }, 3000);

        return
      }
      if (pointDealer === pointPlayer) {

        setMoney(money)
        setWinLoseDraw('draw')
        setFlag(true)

        results(pointPlayer)

        setTimeout((pointPlayer) => {
          reset(pointPlayer)
        }, 3000);


        return
      }
      return
    }

  }
  const choiceValue = (money) => {

    if (money === 0) {
      alert("no money")

      setValue(0)

      return
    }



    setValue(value + money)


  }
  const startGame = () => {

    if (value === 0) {
      alert("game price is 0")
      return
    }


    setActive(true)

    giveFirstThirdCard()
    /*shufflingCards()*/

  }
  const backMoney = (money) => {

    setValue(0)

  }

  const results = (valueSum, test) => {

    console.log(test,'results dziala');

    let winLoseDrawCorect = winLoseDraw

    if(winLoseDraw || test){  

      if(test){
        winLoseDrawCorect = 'lose'
      }

    console.log(valueSum, 'info');
    console.log(pointDealer, 'info');
    console.log(winLoseDraw, 'infoWLD');

    const historyTableOne = [valueSum, pointDealer, winLoseDrawCorect]

    const historyTableTwo = [historyTableOne, ...historyResult]




    setHistoryResult(historyTableTwo)

  }




  }








  const reset  =  (e) => {

    console.log(e,'dziala reset');



     

    setCards([])
    setFirstThirdCards([])
    setPlayerCards([])
    setDealerCards([])

    setPointDealer(0)
    setPointPlayer(0)
    setAddValue(true)
    setEndGame(false)
    setValue(0)
    setActive(false)
    setWinLoseDraw('')
    setFlag(false)
    setHistoryOn('flex')
    setTest(false)
   


  }

  const scoreShow = () => {

    const flag = !show


    setShow(flag)



  }


  const oneCard = (item) => {




    setCardTest(item)

    



  }







  return (

    <div className='app'>
      <div className='scoreButton' style={{ display: `${historyOn}` }} onClick={scoreShow}  >
        <span className='btnBurger'></span>
      </div>
      <Table>
      </Table>
      <DataFetching
        oneCard={oneCard}
      >
      </DataFetching>
      <PlaceForCards
        firstThirdCards={firstThirdCards}
        playerCards={playerCards}
        dealerCards={dealerCards}
      />
      <Value
        choiceValue={choiceValue}
        startGame={startGame}
        backMoney={backMoney}
        active={active}
        flag={flag}
      />
      <Score
        pointsPlayer={pointPlayer}
        pointsDealer={pointDealer}
        money={money}
        value={value}
      />
      <Buttons className
        flag={flag}
        active={active}
        giveFirstThirdCard={onlyOneCardPlayerAndPoints}
        pass={pass}
      />
      <WinLoseDraw
        winLoseDraw={winLoseDraw}
      />
      <History
        show={show}
        historyResult={historyResult}
      />
    </div >
  )



}



export default App;
