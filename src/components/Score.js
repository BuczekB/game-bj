import React from 'react'

import '../style/score.css'

const Score = (props) => {

    const pointsPlayer = props.pointsPlayer;
    const pointsDealer = props.pointsDealer;
    const money = props.money;
    const value = props.value;

    return (
        <div className='score'>
            <span>Punkty Gracza: {pointsPlayer} </span>
            <span>Punkty Dilera: {pointsDealer} </span>
            <span>Money: {money}$ </span>
            <span>Bet Value: {value}$ </span>
        </div>
    )
}

export default Score



