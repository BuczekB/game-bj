import React from 'react';

import '../style/history.css';


const History = (props) => {

    const testA = [2, 3, 1]


    const historyResult = props.historyResult

    const test = historyResult.map((e) => {

        const first = e[0]
        const secound = e[1]
        const three = e[2]
        let bg = 'red';

        const flag = props.show

        let showBox = ''

        if (flag) showBox = 'boxOFF'
        if (!flag) showBox = ''


        if (three == 'win') bg = 'green';
        if (three == 'draw') bg = 'blue';


        return (
            <div className={showBox}>
                <div className={bg} >
                    <div className='item'>{first}</div>
                    <div className='item'>{three}</div>
                    <div className='item'>{secound}</div>
                </div>
            </div>

        )
    })






    return (
        <div className='historyTable'>
            {test}
        </div>
    )
}

export default History;

