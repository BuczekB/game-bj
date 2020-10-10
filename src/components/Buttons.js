import React from 'react';

import '../style/buttons.css';

const Buttons = (props) => {

    const active = props.active;


    return (
        <div className={active ? 'active' : 'noActive'}>
            <button onClick={props.giveFirstThirdCard}><p>Card</p></button>
            <button onClick={props.onlyOneCardPlayer}><p>Pass</p></button>
        </div>
    )
}

export default Buttons;

