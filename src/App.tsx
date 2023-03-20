import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
            <div className="wrapper">
                <h1>This is title</h1>
                <div className="body">
                    <input placeholder={'inter max num'} className={'max__num'} type="number" max={1000} min={1}/>
                    <input placeholder={'inter min num'} className={'min__num'} type="number" max={1000} min={0}/>
                </div>
            </div>
    </div>
  );
}

export default App;
