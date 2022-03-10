import React, { useState, useEffect } from 'react';
import axios from 'axios'

import '../style/dataFetching.css';


function DataFetching({ oneCard }) {

    const [posts, setPosts] = useState([]);
    const [id, setId] = useState('evhshg17eai5');
    const [dataCards, setDataCards] = useState([]);

    useEffect(() => {
        axios.get(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`)
            .then(res => {
                const data = res.data.cards
                setDataCards(data)



            })
            .catch(err => {
                console.log('error');
            })
    }, [])


    const card = dataCards.map((item) => {
        return item.image
    })





    return (
        <div className='box'>

        </div>
    )
}

export default DataFetching


