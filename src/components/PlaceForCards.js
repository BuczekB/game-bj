import React from 'react'
import '../style/placeForCards.css'
import Card from './Card';
const PlaceForCards = (props) => {

    const playerCardss = props.playerCards.map(card => (
        <Card key={card.card} card={card.image} />
    ))

    const dealerCardss = props.dealerCards.map(card => (
        <Card key={card.card} card={card.image} />
    ))



    const firstCardss = props.firstThirdCards.map(card => (
        <Card key={card.code} card={card.image}>

        </Card>
    ))







    {/*props.addData(firstThirdCardss, playerCardss, dealerCardss)*/ }




    return (
        <div className='cards'>
            <div className='CardsForPlayer'>
                {firstCardss[0]}
                {firstCardss[2]}
                {playerCardss}



            </div>
            <div className='CardsForDealer'>
                {firstCardss[1]}
                {dealerCardss}

            </div>
        </div>
    )


}



export default PlaceForCards