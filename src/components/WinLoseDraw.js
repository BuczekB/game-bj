import React from 'react';



import '../style/winLoseDraw.css';
import Score from './Score';

const WinLoseDraw = (props) => {

    const text = props.winLoseDraw.toUpperCase()



    return (
        <div className={props.winLoseDraw} >
            <span>{text}</span>
        </div>
    )


}

export default WinLoseDraw;