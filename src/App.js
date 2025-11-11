import React, { useState } from 'react';

import './App.css';

import Code from "./Code"


function App() {

  const [items, setItems] = useState(
    [
      {type:'bc', text:'01670', name:'Bombaj', color: 'black' },
      {type:'bc', text:'WH0116768', name:'Woby haus', color: '#0054a6'},
      {type:'qr', text:'77810006420245677', name:'Lidl', color: '#0050AA'},
      {type:'bc', text:'0000004886778', name:'Aksa 5%', color: '#00add4'},
      {type:'bc', text:'6108560002437243', name:'Benu', color: '#dc0467'},
      {type:'bc', text:'6059352203514072', name:'MOL', color: '#008663'},
      {type:'bc', text:'688100000104064', name:'OMV', color: '#1fff5a'},
      {type:'bc', text:'0480008370426', name:'Maxi', color:'#d23725'}
    ]
  );

  const [filter, setFilter] = useState('');

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  


  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{font: '20px monospace', padding: '0.5rem', width: '400px', margin: '1.5rem' }}
      />

      {filteredItems.map((item, index) => ( 
        <div key={index} >
          <Code props={item}/>
        </div>
      ))}
    </div>
  );
}

export default App;
