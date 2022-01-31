import React from 'react';

import '../style/buttons.css';

const Buttons = (props) => {


    const active = props.active;



    return (
        <div className={active ? 'active' : 'noActive'}>

            <button disabled={props.flag ? true : false} onClick={props.giveFirstThirdCard}><p>Card</p></button>
            <button onClick={props.onlyOneCardPlayer}><p>Stand</p></button>
        </div >
    )
}

export default Buttons;

