import React , {useState}from 'react'

import './Quadrado.css'
const Quadrado = () => {
    const [backgrouquadro,setBackgroundQuadro] = useState("quadrado")

    const backgroundStyle = () =>{
        setBackgroundQuadro("red")
    }
    const backgroundStyleBlue = () => {
        setBackgroundQuadro("blue")
    }
    const backgroundStyleInicial = () => {
        
        setBackgroundQuadro("quadrado")
    }
  return (
    <div>
        <h3>Mudando a cor do quadro</h3>
        <div className={backgrouquadro}>
            
        </div>
        <button className='button-inicial' onClick={backgroundStyleInicial}>Inical</button>
        <button className='button-red' onClick={backgroundStyle}>Red</button>
        <button className='button-blue'onClick={backgroundStyleBlue}>blue</button>
       
    </div>
  )
}

export default Quadrado