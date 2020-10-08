import React from 'react'
import '../style/placeForCards.css'
import Card from './Card';
const PlaceForCards = (props) => {

    const playerCards = props.playerCards.map(card => (
        <Card key={card.card} card={card.card} />
    ))

    const dealerCards = props.dealerCards.map(card => (
        <Card key={card.card} card={card.card} />
    ))

    const cardListP = props.firstCards.map(card => (
        <Card key={card.card} card={card.card} />


    ))




    return (
        <div className='cards'>
            <div className='CardsForPlayer'>
                {cardListP[0]}
                {cardListP[2]}
                {playerCards}


            </div>
            <div className='CardsForDealer'>
                {cardListP[1]}
                {dealerCards}

            </div>
        </div>
    )


}



export default PlaceForCards