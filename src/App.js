import React , { useEffect, useState }   from "react";
import logo from './logo.svg';
import './App.css';
import './Pizza.js';
import Pizza from './Pizza.js';
import Login from './Login';

function App() {

  const STATUSES = {
    LOGIN: 'login',
    DATA: 'data'
  }
  let appview;
  const [status, setStatus] = useState(STATUSES.LOGIN);

  let login = () => {
    setStatus(STATUSES.DATA)
  }

  if (status === STATUSES.LOGIN){
    appview = <div> 
        <Login/>
        <button id='button' onClick={login}>Login</button>
      </div>
  } else if (status === STATUSES.DATA){
    appview = <Pizza/>
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      
        {appview}
        
      </header>
    </div>
  );
}

export default App;
