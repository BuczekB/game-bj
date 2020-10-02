import React, { Component } from 'react';
import { render } from 'react-dom';


import '../style/App.css';

import Table from './Table';
import Value from './Value';
import Score from './Score';
import Buttons from './Buttons';
import Card from './Card';

const card = [{ card: '1karo', value: 1 }, { card: '2karo', value: 2 }, { card: '3karo', value: 3 },
{ card: '4karo', value: 4 }, { card: '5karo', value: 5 }, { card: '6karo', value: 6 }, { card: '7karo', value: 7 },
{ card: '8karo', value: 8 }, { card: '9karo', value: 9 }, { card: 'Jkaro', value: 10 }, { card: 'Qkaro', value: 10 },
{ card: 'Kkaro', value: 10 }, { card: 'Akaro', value: 10 },

{ card: '1trefl', value: 1 }, { card: '2trefl', value: 2 }, { card: '3trefl', value: 3 }, { card: '4trefl', value: 4 },
{ card: '5trefl', value: 5 }, { card: '6trefl', value: 6 }, { card: '7trefl', value: 7 }, { card: '8trefl', value: 8 },
{ card: '9trefl', value: 9 }, { card: 'Jtrefl', value: 10 }, { card: 'Qtrefl', value: 10 }, { card: 'Ktrefl', value: 10 },
{ card: 'Atrefl', value: 10 },

{ card: '1kier', value: 1 }, { card: '2kier', value: 2 }, { card: '3kier', value: 3 }, { card: '4kier', value: 4 },
{ card: '5kier', value: 5 }, { card: '6kier', value: 6 }, { card: '7kier', value: 7 }, { card: '8kier', value: 8 },
{ card: '9kier', value: 9 }, { card: 'Jkier', value: 10 }, { card: 'Qkier', value: 10 }, { card: 'Kkier', value: 10 },
{ card: 'Akier', value: 10 },

{ card: '1pik', value: 1 }, { card: '2pik', value: 2 }, { card: '3pik', value: 3 }, { card: '4pik', value: 4 },
{ card: '5pik', value: 5 }, { card: '6pik', value: 6 }, { card: '7pik', value: 7 }, { card: '8pik', value: 8 },
{ card: '9pik', value: 9 }, { card: 'Jpik', value: 10 }, { card: 'Qpik', value: 10 }, { card: 'Kpik', value: 10 },
{ card: 'Apik', value: 10 }]


class App extends Component {
  render() {
    return (
      <div className='app'>
        <Table></Table>
        <Value></Value>
        <Score></Score>
        <Buttons></Buttons>
      </div>
    )
  }


}

export default App;
