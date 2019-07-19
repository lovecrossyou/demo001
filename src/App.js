import React from 'react';

import Panel from "./components/panel"
import Table from "./components/tablelist"
import './App.css';

function App() {
  return (
    <div className="App">
      <Panel></Panel> 
      <div className="table-wrapper">
      <Table/>
      </div>
    </div>
  );
}

export default App;
