import React from 'react';

import '../style/value.css';

const Value = (props) => {

    const active = props.active;


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
        <div className={active ? 'noActive' : 'active'}>
            <div className='tableValue' >

                <div className='value' onClick={value5}><p>5$</p></div>
                <div className='value' onClick={value10}><p>10$</p></div>
                <div className='value' onClick={value25}><p>25$</p></div>
                <div className='value' onClick={value100}><p>100$</p></div>

            </div>
        </div>
    )
}
export default Value;