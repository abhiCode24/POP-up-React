// import logo from './logo.svg';
import './App.css';
import Popup from './Popup/Popup';
import { useState } from 'react';

function App() {
  const [clean, setClean] = useState(false)

  const close = () =>{
    return setClean(false);
  }

  return (
      <>
    <div className="header">
      <h1>Popup Message</h1>
      <button className="btn" onClick={()=>setClean(true)}>Click me</button>
    </div>
    {clean && <Popup close = {close}/>}
  
      </>
  );
}

export default App;
