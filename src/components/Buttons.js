import React from 'react';

const Buttons = (props) => {



    return (
        <div>
            <button onClick={props.test} >Card</button>
            <button onClick={props.log}  >Stay</button>
        </div>
    )
}

export default Buttons;

