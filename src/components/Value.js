import React from 'react';

import '../style/value.css';

const Value = (props) => {



    const value5 = () => {
        const money = 5
        props.choiceValue(money)
    }
    const value10 = () => {
        const money = 10
        props.choiceValue(money)
    }
    const value25 = () => {
        const money = 25
        props.choiceValue(money)
    }
    const value100 = () => {
        const money = 100
        props.choiceValue(money)
    }


    return (
        <div className='tableValue'>
            <div className='value' onClick={value5}>5$</div>
            <div className='value' onClick={value10}>10$</div>
            <div className='value' onClick={value25}>25$</div>
            <div className='value' onClick={value100}>100$</div>
        </div>
    )
}
export default Value;