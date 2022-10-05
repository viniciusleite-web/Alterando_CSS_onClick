
import './App.css';
import React, {useState} from "react";
import Quadrado from './components/Quadrado';
function App() {
  const [style, setStyle] = useState("cont")

  const changeStyle = () => {
    console.log("you just clicked");

    setStyle("cont2")
  }
  return (
    <div className="App">
    
     <h1>Change CSS tyling with onClick event</h1>
<div className='container'>
<div className={style}>
      <button className='button' onClick={changeStyle}>Click me!</button>
     </div>
     <div>
      <Quadrado/>
     </div>
</div>
   
    </div>
  );
}

export default App;
