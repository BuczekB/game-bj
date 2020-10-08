import React from 'react';

import '../style/buttons.css';

const Buttons = (props) => {



    return (
        <div>
            <button onClick={props.giveFirstThirdCard}  >Stay</button>
            <button onClick={props.onlyOneCardPlayer}>test</button>
        </div>
    )
}

export default Buttons;

