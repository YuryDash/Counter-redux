import React from 'react';
import './App.css';
import {Settings} from "./components/settings/Settings";
import {Counter} from "./components/counter/Counter";

function App() {
  return (
    <div className="App">
            <div className="wrapper">
                <h1>This is title</h1>
                    <Settings/>
                    <Counter/>
            </div>
    </div>
  );
}

export default App;
